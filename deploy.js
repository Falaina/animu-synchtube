// node.js deployment server for animu-synchtube
var http = require('http'),
url = require('url'),
qs = require('querystring'),
sys = require('sys');

// We will "deploy" changes by switching to the gh-pages
// branch, removing the previous js files, pulling
// the master's js files, then pushing to github's gh-pages
var deploy = [
    'git checkout master',
    'git pull',
    'git checkout gh-pages',
    'rm document.js',
    'git checkout origin/master document.js',
    'rm st.js',
    'git checkout origin/master st.js',
    'git commit -a -m "deploy hook"',
    'git pull',
    'git push'
];

    

var deployCmd = deploy.join('; ');
console.log(deployCmd);

var testFiles = [
    'document.js',
    'st.js'
];

var test = function() {
    var readme_out = "Deploy Status:\n";
    var status = 1;
    var out_txt; 
    if(status == 0) {
	readme_out += "Deploy successful.\n";
    }else {
	readme_out += "DEPLOY FAILED: jslint returned status: ";
	readme_out += status + "\n";
	readme_out += out_txt;
    }
}

	

}

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
	child = sys.exec(deployCmd, function(err, stdout, stderr) {
	    sys.print('stdout: ' + stdout);
	    sys.print('stderr: ' + stderr);
	    if(err != null) {
		console.log('exec error: ' + err);
	    }
	});	    
    } else if(req.method=='GET') {
        var url_parts = url.parse(req.url,true);
        console.log(url_parts.query);
    }

}).listen(8080);