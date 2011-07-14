var animu_synchtube = (function() {
    this.modvatars = [ //Replacement avatars
	{ mod : 'Keii',      url : '//i.imgur.com/zJqJI.gif'}, 
	{ mod : 'DJZebro',   url : '//i.imgur.com/N5DR0.gif'}, 
	{ mod : 'Nodocchi',  url : '//nodocchi.com/nodocchi'},
	{ mod : 'RAILGUN',   url : '//oi56.tinypic.com/714eqh.jpg'},
	{ mod : 'Xiox',      url : '//i.imgur.com/pWCYo.gif'},
	{ mod : 'Tofutoshi', url : '//i.imgur.com/pOBRZ.gif'},
	{ mod : 'AnimuXD',   url : '//i.imgur.com/t1YlE.gif'},
	{ mod : 'Denwa',     url : '//i.imgur.com/imHKi.gif'}
    ];    
    this.word_filters = [ // Word filters which use a simple regex replacement
	{pat : /madoka/ig,       target : 'meduca'},
	{pat : /magica/ig,       target : 'meguca'},
	{pat : /homura/ig,       target : 'hameru'},
	{pat : /mami/ig,         target : 'mumi'},
	{pat : /kyoko/ig,        target : 'kyaku'},
	{pat : /sayaka/ig,       target : 'seyiku'},
	{pat : /(binaryheap)/ig, target : '$1-senpai'},
	{pat : /everyone/ig,     target : 'everynyan'},
	{pat : /plan/ig,         target : 'keikaku'},
	{pat : /(QB)/ig,         target : '／人◕ ‿‿ ◕人＼'},
	{pat : /(kitaa)/ig,       target : 'キタ━━━(゜∀゜)━━━!!!!!'},
	{pat : /(bu-n)/ig,       target : '⊂二二二（　＾ω＾）二⊃'},
	{pat : /(grimace)/ig,       target : '(╬ ಠ益ಠ)'},
	{pat : /(simper)/ig,       target : '(￣ー￣)'},
	{pat : /(kyuubey|kyubey|kyubei)/ig,              target : 'coobie'},
	{pat : /magica/ig,       target : 'meguca'}
    ];

    // Create the opening tag for a link
    var openA = function(url) {
	return '<a href="'+url+'">';
    };

    this.word_filters_fns = [// Word filters which provide a function for replacement
    ];

    // Convert every playlist entry into a clickable link
    this.linkify = function() {
	var vids = st.collections.videos, vid, vidInfo;
	var YT_BASE = "http://www.youtube.com/watch?v=";	
	for(vid in vids) {
	    if(vids.hasOwnProperty(vid) &&
	       vids[vid] && (!vids[vid].linked)) { 
		var id = vids[vid].id;
		var cur = $("#"+id+" .title");
		var vidHtml = cur.html();
		if(vidHtml) {
		    var ytUrl =  YT_BASE + vidInfo.vid;
		    vidHtml = vidHtml.replace(/.*/, openA(ytUrl)+"$&"+"</a>");
		    cur.html(vidHtml);
		    console.log(cur.html());
		    vids[vid].linked = true;
		}
	    }
	}
    };

    // Convenience function for logging
    this.log = function() {
	if(window.console && window.console.log) {
	    window.console.log(arguments);
	}
    };

    // Convenience function for hooking a javascript function
    // A FUNCTION CAN ONLY BE HOOKED BY ONE FUNCTION AT A TIME
    this.instrumentFn = function(fn, pre) {
	// Optional argument argTransform: Should we pass the return of the hook
	// as parameters to the function?
	argTransform = arguments[2];
	// Remove any previous hooks
	if(fn.instrumented) {
	    fn = fn.restore();
	}
	var newFn = function() 
	{
	    var fnArgs = arguments;
	    // Apply hook
	    var res = pre.apply(this, arguments); 
	    // Replace arguments with results of hook if necessary
	    if(argTransform) {fnArgs = res;}
	    // Apply the original function
	    return fn.apply(this, fnArgs);
	};
	// Keep a handle to the original function
	newFn.restore = function() {return fn;};
	// Mark the function as instrumented
	newFn.instrumented = true;
	return newFn;
    };

    // Convenience function for invoking a function
    // that may fail
    this.ignore = function(fn) {
	try{
	    fn();
	} catch (err) {
	    log("Ignoring error:\n\t" + err);
	}
    };

    this.replaceModvatar = function(mod, url) {
	$('img.user_id[alt='+mod+']').replaceWith('<img src='+url+' class=user_id alt='+mod+' id='+mod+'>');
	$('#'+mod).addClass('mod-avatar');
    };

    this.replaceModvatars = function () {
	var i;
	for(i=0; i < modvatars.length; i++) {
            replaceModvatar(modvatars[i].mod, modvatars[i].url);
	}
    };

    this.wordFilter = function(usr, msg, wat) {
	var i;
	for(i=0; i < word_filters.length; i++) {
	    msg = msg.replace(word_filters[i].pat, word_filters[i].target);
	}
	return [usr, msg, wat];
    };

    this.str_Alert = [
        {pat  : /[^ ]*www.synchtube.com\/r\/([^ ]+)/ig, target: '[censored: $1]'}
    ];

    this.approved_Chans = [
	{pat : /animu/ig },
	{pat : /science/ig },
	{pat : /chiruno/ig },
	{pat : /binaryheap/ig }
    ];

    this.whiteList = function(usr, msg, wat) {
	var i, j;
	for(i=0; i < str_Alert.length; i++) {
	    var match = str_Alert[i].pat.exec(msg);
	    if(match && match[1]) {
		for(j=0; j < approved_Chans.length; j++) {
		    if(approved_Chans[j].pat.exec(match[1])) {
			log("Approved");
			return [usr, msg, wat];
		    }
		}
		msg = msg.replace(str_Alert[i].pat, str_Alert[i].target);
		break;
	    }
	}
	return [usr, msg, wat];
    };

    // Instrument the synchtube chat message handler with the word filter
    this.replaceChatHandler = function() {
	wordFilter        = instrumentFn(wordFilter, whiteList, true);
	chat.writeMessage = instrumentFn(chat.writeMessage, wordFilter, true);
    };

    // Entry point for code (this is probably not idiomatic javascript, apparently
    // it's standard to wrap the entire file in an anonymous function)
    this.run = function (){
	replaceModvatars();
	ignore(replaceChatHandler); 
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
    return this;
}());

var doit = animu_synchtube.run;