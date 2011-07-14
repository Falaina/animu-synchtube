var animu_synchtube = {
    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// PUBLIC INTERFACE ////////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    // Replacement images used by replaceModvatars
    modvatars : [
	{ mod : 'Keii',      url : '//i.imgur.com/zJqJI.gif'}, 
	{ mod : 'DJZebro',   url : '//i.imgur.com/N5DR0.gif'}, 
	{ mod : 'Nodocchi',  url : '//nodocchi.com/nodocchi'},
	{ mod : 'RAILGUN',   url : '//oi56.tinypic.com/714eqh.jpg'},
	{ mod : 'Xiox',      url : '//i.imgur.com/pWCYo.gif'},
	{ mod : 'Tofutoshi', url : '//i.imgur.com/pOBRZ.gif'},
	{ mod : 'AnimuXD',   url : '//i.imgur.com/t1YlE.gif'},
	{ mod : 'Denwa',     url : '//i.imgur.com/imHKi.gif'}
    ],

    // Word filters used during wordFilter (runs before chat.writeMessage)
    // word_filters in this list must be a simple regex replacement.
    // see word_filters_fn for more complex replacement
    word_filters : [ 
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
    ],

    // Word filters used during wordFilter (runs before chat.writeMessage)
    // wordFilter will pass an entire message to the functions in this thread
    // and use the returned value as the new message. these are run after.
    // the simple replacements above.
    word_filters_fns : [ ],

    // Custom commands. These are run during processSay (runs before chat.beforeSay)
    // If the contents of the chat input matches a pat in custom_commands, the
    // associated function is called with the value. Afterwards the chat input is 
    // cleared.
    custom_commands : [
	{ pat : /^\s*\/link/, 
	  fn  : function(msg) {
	      this.linkify();
	  }}
    ],

    ////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// UTILITY FUNCTIONS ///////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    // Convenience function for logging
    log : function() {
	if(window.console && window.console.log) {
	    window.console.log(arguments);
	}
    },

    // Convenience function for hooking a javascript function
    // A FUNCTION CAN ONLY BE HOOKED BY ONE FUNCTION AT A TIME
    instrumentFn : function(fn, pre) {
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
    },

    // Convenience function for invoking a function
    // that may fail
    ignore : function(fn) {
	try{ fn(); } 
	catch (err) { this.log("Ignoring error:\n\t" + err); }
    },
    // Create the opening tag for a link
    openA : function(url) { return '<a href="'+url+'">'; },
    
    ///////////////////////////// Playist modifications ////////////////////////
    // Convert every playlist entry into a clickable link
    linkify : function() {
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
		    vidHtml = vidHtml.replace(/.*/, openA(ytUrl)+"$&"+"</a>");
		    cur.html(vidHtml);
		    this.log(cur.html());
		    vids[vid].linked = true;
		}
	    }
	}
    },
    
    ///////////////////////////// Mod bar modifications ////////////////////////
    // Replace an image in the banner's mod list
    replaceModvatar : function(mod, url) {
	$('img.user_id[alt='+mod+']').replaceWith('<img src='+url+' class=user_id alt='+mod+' id='+mod+'>');
	$('#'+mod).addClass('mod-avatar');
    },
    
    // Replaces images in the banner's mod list 
    // according to this.modvatars
    replaceModvatars : function () {
	var i;
	for(i=0; i < this.modvatars.length; i++) {
            this.replaceModvatar(this.modvatars[i].mod, this.modvatars[i].url);
	}
    },

    ///////////////////////////// Word filters ////////////////////////////////
    wordFilter : function(usr, msg, wat) {
	var i;
	for(i=0; i < this.word_filters.length; i++) {
	    msg = msg.replace(this.word_filters[i].pat, this.word_filters[i].target);
	}
	return [usr, msg, wat];
    },

    str_Alert : [
        {pat  : /[^ ]*www.synchtube.com\/r\/([^ ]+)/ig, target: '[censored: $1]'}
    ],

    approved_Chans : [
	{pat : /animu/ig },
	{pat : /science/ig },
	{pat : /chiruno/ig },
	{pat : /binaryheap/ig }
    ],

    whiteList : function(usr, msg, wat) {
	var i, j;
	for(i=0; i < this.str_Alert.length; i++) {
	    var match = this.str_Alert[i].pat.exec(msg);
	    if(match && match[1]) {
		for(j=0; j < this.approved_Chans.length; j++) {
		    if(this.approved_Chans[j].pat.exec(match[1])) {
			this.log("Approved");
			return [usr, msg, wat];
		    }
		}
		msg = msg.replace(this.str_Alert[i].pat, this.str_Alert[i].target);
		break;
	    }
	}
	return [usr, msg, wat];
    },


    processSay : function (msg) {
	var i;
	for(i=0; i < this.custom_commands; i++) {
	    if(msg.match(this.custom_commands[i].pat)) {
		custom_this.commands[i].fn(msg);
		return true;
	    }
	}
	return false;
    },

    // Instrument synchtube handlers with our own hooks.
    replaceChatHandler : function() {
	// We want the call  chat.writeMessage(args) to be equivalent to
	// chat.writeMessage(wordFilter(whiteList(args). We achieve this via
	// hooking wordFilter with whiteList, and hooking chat.writeMesasge
	// with the hooked wordFilter
	anime_synchtube.wordFilter   = 
	    animu_synchtube.instrumentFn(animu_synchtube.wordFilter, animu_synchtube.whiteList, true);
	chat.writeMessage = 
	    animu_synchtube.instrumentFn(chat.writeMessage, animu_synchtube.wordFilter, true);

	// Instrument chat.beforeSay so we can make a few custom commands.
	// chat.beforeSay    = instrumentFn(chat.beforeSay, customCommand, true);
    },

    // Entry point for code (this is probably not idiomatic javascript, apparently
    // it's standard to wrap the entire file in an anonymous function)
    run : function (){
	this.replaceModvatars();
	this.ignore(animu_synchtube.replaceChatHandler); 
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
    }};

// Remove this eventually, just keeping for fear of breaking.
var doit = function() {animu_synchtube.run();};