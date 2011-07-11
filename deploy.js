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
    var retrieve = [
	'git checkout master',
	'git pull',
	'git checkout gh-pages',
	'rm document.js',
	'git checkout origin/master document.js',
	'rm st.js',
	'git checkout origin/master st.js',
    ];
    var retrieveCmd = retrieve.join('; ');
    var deploy =  [
	'git commit -a -m "deploy hook"',
	'git pull',
	'git push'
    ];
    var deployCmd = deploy.join('; ');
    var testFiles = [
	'document.js'
//	'st.js'
    ];
    var testCmd = 'java -jar jslint4java.jar ' + testFiles.join(' ');
    var testResultFile = 'README.md';

    // Events
    var testsSucceeded  = 'tests-success';
    var testsFailed     = 'tests-failed';
    var filesRetrieved  = 'files-retrieved';
    var deployed        = 'deployed';
    var finished        = 'finished';

    // Simplified exec call, prints stdout and stderr
    // as the callback to exec. emits event when
    // finished.
    var execAndEmit = function(cmd, event) {
	console.log(retrieveCmd);
	child = exec(retrieveCmd, function(err, stdout, stderr) {
	    sys.print('stdout: ' + stdout);
	    sys.print('stderr: ' + stderr);
	    if(err != null) {
		console.log('exec error: ' + err);
	    }
	    console.log("emitting");
	    self.emit(event);
	});
    };

    // Public methods
    this.retrieveFiles = function () {
	console.log("Retrieving files");
	execAndEmit(retrieveCmd, filesRetrieved);
    }

    this.deployFiles = function () { 
	execAndEmit(deployCmd, deployed);	
    }

    this.runTests = function() {
	console.log("Running Tests");
	var test_out = "Deploy Status:\n";
	child = exec(testCmd, function(err, stdout, stderr) {
	    if(stdout) sys.print('stdout: ' + stdout);
	    if(stderr) sys.print('stderr: ' + stderr);
	    
	    if(err) {
		test_out += "DEPLOY FAILED - Errors below must be fixed before deploy: \n";
		test_out += "jslint returned ";
		test_out += err + "\n";		
		test_out += stdout;
		test_out += stderr;
	    } else {
		test_out += "Deploy successful.\n";
	    }
	    // Write results of tests and let everyone know tests are done.
	    fs.writeFileSync(testResultFile, test_out);
	    if(err) self.emit(testsFailed);
	    else self.emit(testsSucceeded);
	});
    }

    this.deploy = function() {
	return this.retrieveFiles();
    }
    
    // Set up internal listeners
    // After retrieving committed versions, run tests
    self.addListener(filesRetrieved, self.runTests);
    // For manual runs, either deployed or tests failed events
    // constitute finished
    self.addListener(deployed,    function() {self.emit(finished)});
    self.addListener(testsFailed, function() {self.emit(finished)});
    // On testsSucceeded, deploy files.
//    self.addListener(testsSucceeded, deployFiles);
    


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
		console.log(POST);
            });
	    deployFiles();
	} else if(req.method=='GET') {
            var url_parts = url.parse(req.url,true);
            console.log(url_parts.query);
	}

    }).listen(8080);

    self.emit('test');
}
sys.inherits(Deployer, events.EventEmitter);

if(process.argv[2] === "--manual-run") {
    console.log("*** Starting manual run ***");
    var deployer = new Deployer();
    console.log(deployer);
    deployer.deploy();
    deployer.addListener('finished', process.exit);
}
