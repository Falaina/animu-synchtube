var animu_synchtube = (function() {
    // 'this'
    var self = {};

    // Replacement avatars
    var modvatars = [
	{ mod : 'Keii',      url : '//i.imgur.com/zJqJI.gif'}, 
	{ mod : 'DJZebro',   url : '//i.imgur.com/N5DR0.gif'}, 
	{ mod : 'Nodocchi',  url : '//nodocchi.com/nodocchi'},
	{ mod : 'RAILGUN',   url : '//oi56.tinypic.com/714eqh.jpg'},
	{ mod : 'Xiox',      url : '//i.imgur.com/pWCYo.gif'},
	{ mod : 'Tofutoshi', url : '//i.imgur.com/pOBRZ.gif'},
	{ mod : 'AnimuXD',   url : '//i.imgur.com/t1YlE.gif'},
	{ mod : 'Denwa',     url : '//i.imgur.com/imHKi.gif'}
    ];
    
    // Simple word filters
    var word_filters = [
	{pat : /madoka/ig,			target : 'meduca'},
	{pat : /magica/ig,			target : 'meguca'},
	{pat : /homura/ig,			target : 'hameru'},
	{pat : /mami/ig,			target : 'mumi'},
	{pat : /kyoko/ig,			target : 'kyaku'},
	{pat : /sayaka/ig,			target : 'seyiku'},
	{pat : /(binaryheap)/ig,		target : '$1-senpai'},
	{pat : /everyone/ig,			target : 'everynyan'},
	{pat : /plan/ig,			target : 'keikaku'},
	{pat : /(QB)/ig,			target : '／人◕ ‿‿ ◕人＼'},
	{pat : /(kitaa)/ig,			target : 'キタ━━━(゜∀゜)━━━!!!!! '},
	{pat : /(bu-n)/ig,			target : '⊂二二二（　＾ω＾）二⊃'},
	{pat : /(grimace)/ig,			target : '(╬ ಠ益ಠ)'},
	{pat : /(simper)/ig,			target : '(￣ー￣)'},
	{pat : /(kyuubey|kyubey|kyubei)/ig,     target : 'coobie'},
	{pat : /magica/ig,			target : 'meguca'}

    ];

    // Function-based word filters
    var word_filters_fn = [ ];

    // Custom chat commands
    var custom_commands = [ 
	{pat : /^\s*\/link/, 
	 fn  : function(msg) { animu_synchtube.linkify();}}
    ];

    // Create the opening tag for a link
    self.openA = function(url) { return '<a href="'+url+'">'; };

    // Convert every playlist entry into a clickable link
    self.linkify = function() {
	var vids = st.collections.videos, vid;
	var YT_BASE = "http://www.youtube.com/watch?v=";	
	for(vid in vids) {
	    if(vids.hasOwnProperty(vid) &&
	       vids[vid] && (!vids[vid].linked)) { 
		var id = vids[vid].id;
		var cur = $("#"+id+" .title");
		var vidHtml = cur.html();
		if(vidHtml) {
		    var ytUrl =  YT_BASE + vids[vid].vid;
		    vidHtml = vidHtml.replace(/.*/, self.openA(ytUrl)+"$&"+"</a>");
		    cur.html(vidHtml);
		    vids[vid].linked = true;
		}
	    }
	}
    };


    // Convenience function for logging
    var log = function() {
	if(window.console && window.console.log) {
	    console.log(arguments);
	}
    };

    // Convenience function for invoking a function
    // that may fail
    var ignore = function(context, fn) {
	try {fn.apply(context);} 
	catch (err) { log("Ignoring error:\n\t" + err); }
    };

    // Convenience function for hooking a javascript function
    // A FUNCTION CAN ONLY BE HOOKED BY ONE FUNCTION AT A TIME
    var instrumentFn = function(context, fn, hook, transformArgs) {
	// Remove any previous hooks
	if(fn.instrumented) {
	    fn = fn.restore();
	}
	var newFn = function() 
	{
	    var fnArgs = arguments;
	    // Apply hook
	    var results = hook.apply(context, arguments); 
	    // Replace arguments with results of hook if necessary
	    if(transformArgs) {
		fnArgs = results;
	    }
	    // Apply the original function
	    return fn.apply(context, fnArgs);
	};
	// Keep a handle to the original function
	newFn.restore = function() {return fn;};
	// Mark the function as instrumented
	newFn.instrumented = true;
	return newFn;
    };


    var replaceModvatars = function () {
	var i, mod, url;
	for(i=0; i < modvatars.length; i++) {
	    mod = modvatars[i].mod;
	    url = modvatars[i].url;
	    $('img.user_id[alt='+mod+']').replaceWith('<img src='+url+' class=user_id alt='+mod+' id='+mod+'>');
	    $('#'+mod).addClass('mod-avatar');	    
	}
    };

    self.wordFilter = function(usr, msg, wat) {
	var i;
	for(i=0; i < word_filters.length; i++) {
	    msg = msg.replace(word_filters[i].pat, word_filters[i].target);
	}
	return [usr, msg, wat];
    };

    var str_Alert = [
	{pat  : /[^ ]*www.synchtube.com\/r\/([^ ]+)/ig, target: '[censored: $1]'}
    ];

    var approved_Chans = [
	{pat : /animu/ig },
	{pat : /science/ig },
	{pat : /chiruno/ig },
	{pat : /binaryheap/ig }
    ];

    self.whiteList = function(usr, msg, wat)
    {
	var i, j, match;
	for( i=0; i < str_Alert.length; i++) {
	    str_Alert[i].pat.lastIndex = 0;
	    match = str_Alert[i].pat.exec(msg);
	    if(match && match[1]) {
		for(j=0; j < approved_Chans.length; j++) {
		    approved_Chans[j].pat.lastIndex = 0;
		    if(approved_Chans[j].pat.exec(match[1])) {
			return [usr, msg, wat];
		    }
		}
		msg = msg.replace(str_Alert[i].pat, str_Alert[i].target);
		return [usr, msg, wat];
	    }
	}
	return [usr, msg, wat];
    };

    self.processSay = function(msg) {
	var i, curCom;
	// Wrap in a try so we don't break the chat handler if we error out.
	try {
	    for(i=0; i< custom_commands.length; i++) {
		curCom = custom_commands[i];
		if(msg.match(curCom.pat)) {
		    curCom.fn(msg);
		}
	    }
	} catch (err) {
	    self.log("Failure in processSay, ignoring" + err);
	}
    };

    // Instrument the synchtube chat message handler with the word filter
    var replaceChatHandler = function() {
	self.wordFilter   = instrumentFn(self, self.wordFilter,   self.whiteList, true);
	chat.writeMessage = instrumentFn(chat, chat.writeMessage, self.wordFilter, true);

	chat.beforeSay    = instrumentFn(chat, chat.beforeSay,    self.processSay, false);
    };

    // Entry point for code (this is probably not idiomatic javascript, apparently
    // it's standard to wrap the entire file in an anonymous function)
    self.doit = function (){
	replaceModvatars();
	replaceChatHandler(); 
	// Set up banner and infobox transitions
	$.getScript('//cloud.github.com/downloads/malsup/cycle/jquery.cycle.all.2.74.js', function () {
            $('.slideshow').cycle({
		fx: 'fade',
		random: 1,
		timeout: 10000,
		next: '.slideshow',
		pause: 1
            });
            $('.box').hide();
            $('ul.group li:first').addClass('active').show();
            $('.box:first').show();
            $('ul.group li').click(function () {
		$('ul.group li').removeClass('active');
		$(this).addClass('active');
		$('.box').hide();
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;
            });
	    $(".slideshow").css("visibility", "visible");

	    $(".toggle_container").hide(); 
	    $(".open").show(); 

	    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	    $("h4.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false; //Prevent the browser jump to the link anchor
	    });
	});
    };
    return self;
}());

var doit = function() {animu_synchtube.doit();};