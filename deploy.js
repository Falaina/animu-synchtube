// node.js deployment server for animu-synchtube
var http = require('http'),
url = require('url'),
qs = require('querystring'),
sys = require('sys');

// We will "deploy" changes by switching to the gh-pages
// branch, removing the previous js files, pulling
// the master's js files, then pushing to github's gh-pages
var deployCmd = ' git co master; git pull; git co gh-pages;';
deployCmd    += ' rm document.js; git co origin/master document.js;';
deployCmd    += ' rm st.js; git co origin/master st.js';
deployCmd    += ' git commit -a -m "deploy hook";';
deployCmd    += ' git pull; git push';

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