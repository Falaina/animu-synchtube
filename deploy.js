// node.js deployment server for animu-synchtube
var http	= require('http'),
url		= require('url'),
qs		= require('querystring'),
events		= require('events'),
fs		= require('fs'),
exec            = require('child_process').exec,
sys		= require('sys');

// We will "deploy" changes by switching to the gh-pages
// branch, removing the previous js files, pulling
// the master's js files, then pushing to github's gh-pages
var Deployer = function() {
    events.EventEmitter.call(this);
    var self = this;
    // Private members
    // Prefix for all hook messages. It's important to use this
    // as this is how we determined if we should attempt to deploy
    // a commit (and we don't want to deploy our own commits)
    // TODO: Give hook its own account
    var testHookPrefix   = '[TEST HOOK]';
    var deployHookPrefix = '[DEPLOY HOOK]';

    var retrieve = [
	'git checkout master',
	'git pull'
    ];
    var retrieveCmd = retrieve.join('; ');
    var deploy =  [
	'git checkout gh-pages',
	'rm document.js',
	'git checkout origin/master document.js',
	'rm st.js',
	'git checkout origin/master st.js',
	'git commit -a -m "'+deployHookPrefix+'"',
	'git pull',
	'git push'
    ];
    var deployCmd = deploy.join('; ');
    var testFiles = [
	'document.js',
	'st.js'
    ];
    var testCmd = 'java -jar jslint4java.jar --encoding UTF-8 ' + testFiles.join(' ');
    var testResultFile = 'README';

    // Events
    var testsSucceeded  = 'tests-success';
    var testsFailed     = 'tests-failed';
    var filesRetrieved  = 'files-retrieved';
    var deployed        = 'deployed';
    var finished        = 'finished';
    var newDeploy       = 'deploy-requested';

    // The current status. Don't try and run concurrent tests.
    var waiting = 'waiting';
    var busy    = 'busy';
    var status  = waiting;
    var needsDeploy;

    // Simplified exec call, prints stdout and stderr
    // as the callback to exec. emits event when
    // finished.
    var execAndEmit = function(cmd, event) {
	console.log(cmd);
	child = exec(cmd, function(err, stdout, stderr) {
	    if(stdout) sys.print('stdout: ' + stdout);
	    if(stderr) sys.print('stderr: ' + stderr);
	    if(err != null) {
		console.log('exec error: ' + err);
	    }
	    console.log("emitting");
	    self.emit(event);
	});
    };

    // Text banner for import log messages
    var banner = function(msg) {console.log("*** "+msg+" ***");}

    // Public methods
    this.retrieveFiles = function () {
	status = busy;
	banner("Retrieving files");
	execAndEmit(retrieveCmd, filesRetrieved);
    }

    this.deployFiles = function () { 
	banner("Deploying files");
	execAndEmit(deployCmd, deployed);	
    }

    this.runTests = function() {
	banner("Running Tests");
	var test_out = "[Deployment Status] ";
	var commit_msg = testHookPrefix;
	child = exec(testCmd, function(err, stdout, stderr) {
	    console.log(testCmd);
	    test_out += 'Last attempt: '+new Date()+'\n';
	    if(stdout) sys.print('stdout: ' + stdout);
	    if(stderr) sys.print('stderr: ' + stderr);
	    
	    if(err) {
		test_out += "DEPLOY FAILED - Errors below must be fixed before deploy: \n";
		test_out += "jslint returned ";
		test_out += err + "\n";		
		test_out += stdout;
		test_out += stderr;
		commit_msg += "Test failure. Not deploying.";
	    } else {
		test_out += "Deploy successful.\n";
		commit_msg += "Tests passed. Attempting to deploy.";
	    }
	    // Write results of tests and let everyone know tests are done.
	    fs.writeFileSync(testResultFile, test_out);
	    child = exec('git pull; git commit -a -m "'+commit_msg+'"; git push', function() {
		if(err) self.emit(testsFailed);
		else self.emit(testsSucceeded);
	    });
	});
    }

    this.deploy = function() {
	needsDeploy = true;
	banner("Requesting new deploy");
	self.emit(newDeploy);
    }
    
    // Set up internal listeners
    // A new deploy has been requested
    self.addListener(newDeploy, function() {
	if((status == waiting) && needsDeploy) 
	    self.retrieveFiles();
    });
    self.addListener(finished, function () {
	status = waiting;
	self.emit(newDeploy);
    });

    // After retrieving committed versions, run tests
    self.addListener(filesRetrieved, self.runTests);
    // For manual runs, either deployed or tests failed events
    // constitute finished
    self.addListener(deployed,    function() {self.emit(finished)});
    self.addListener(testsFailed, function() {self.emit(finished)});
    // On testsSucceeded, deploy files.
    self.addListener(testsSucceeded, self.deployFiles);
    
    // Start the HTTP server github POSTS to
    var server = http.createServer(function(req, res) {
	req.setEncoding("utf8");
	req.content = '';
	if(req.method=='POST') {
	    var body='';
            req.on('data', function (data) {
		body +=data;
            });
            req.on('end',function(){                
		var POST =  qs.parse(body);
		var payload = JSON.parse(POST.payload);		
		console.log(payload);
		for(var i; i < payload.commits.length; i++) {
		    console.log("Examining: " + payload.commits[i]);
		    // Only deploy commits that aren't ours
		    if((payload.commits[i].message.indexOf(testHookPrefix) != -1) ||
		       (payload.commits[i].message.indexOf(deployHookPrefix) != -1)) {
			banner("Ignoring hook commit");
			return;
		    }
		}
		self.deploy();
	    });

	} else if(req.method=='GET') {
            var url_parts = url.parse(req.url,true);
            console.log(url_parts.query);
	}

    }).listen(8080);

    self.emit('test');
}
sys.inherits(Deployer, events.EventEmitter);
var deployer = new Deployer();
if(process.argv[2] === "--manual-run") {
    console.log("*** Starting manual run ***"); 
    deployer.deploy();
//    deployer.addListener('finished', process.exit);
};
