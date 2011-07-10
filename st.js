var modvatars = [ //Replacement avatars
    { mod : 'Keii',      url : '//i.imgur.com/zJqJI.gif'}, 
    { mod : 'DJZebro',   url : '//i.imgur.com/N5DR0.gif'}, 
    { mod : 'Nodocchi',  url : '//nodocchi.com/nodocchi'},
    { mod : 'RAILGUN',   url : '//oi56.tinypic.com/714eqh.jpg'},
    { mod : 'Xiox',      url : '//i.imgur.com/pWCYo.gif'},
    { mod : 'Tofutoshi', url : '//i.imgur.com/pOBRZ.gif'},
    { mod : 'AnimuXD',   url : '//i.imgur.com/t1YlE.gif'},
    { mod : 'Denwa',     url : '//i.imgur.com/imHKi.gif'}
];    
var word_filters = [ // Filtered words
    {pat : /madoka/ig,       target : 'meduca'},
    {pat : /magica/ig,       target : 'meguca'},
    {pat : /homura/ig,       target : 'hameru'},
    {pat : /mami/ig,         target : 'mumi'},
    {pat : /kyoko/ig,        target : 'kyaku'},
    {pat : /sayaka/ig,       target : 'sayaku'},
    {pat : /(binaryheap)/ig, target : '$1-senpai'},
    {pat : /everyone/ig,     target : 'everynyan'},
    {pat : /plan/ig,         target : 'keikaku'},
    {pat : /(QB)/ig,         target : '／人◕ ‿‿ ◕人＼'},
    {pat : /(kyuubey|kyubey|kyubei)/ig,              target : 'coobie'},
    {pat : /magica/ig,       target : 'meguca'},
    {pat : /[^ ]*www.synchtube.com\/r\/E34fag/ig,    target : 'Ban me for spammer!'},
    {pat : /[^ ]*www.synchtube.com\/r\/4chanLive/ig, target : 'Ban me for spammer!'},
    {pat : /[^ ]*www.synchtube.com\/r\/Babby/ig,     target : 'Ban me for spammer!'}
];

// Convenience function for logging
var log = function() {
    window.console && console.log && console.log(arguments);
}


// Convenience function for hooking a javascript function
var instrumentFn = function(fn, pre) {
    // Optional argument argTransform: Should we pass the return of the hook
    // as parameters to the function?
    argTransform = arguments[2];
    var newFn = function() 
    {
	// Apply hook
	var res = pre.apply(this, arguments); 
	// Replace arguments with results of hook if necessary
	if(argTransform) {arguments = res;}
	// If this function has been instrumented, restore it before applying
	// so we don't get a situation where we recursively hook it for every
	// banner save.
        if(fn.instrumented) {fn = fn.restore();}
	// Apply the original function
	return fn.apply(this, arguments)
    };
    // Keep a handle to the original function
    newFn.restore = function() {return fn;}
    // Mark the function as instrumented
    newFn.instrumented = true;
    return newFn;
}

// Convenience function for invoking a function
// that may fail
var ignore = function(fn) {
    try{
	fn()
    } catch (err) {
	log("Ignoring error:\n\t" + err);
    }
}

var replaceModvatar = function(mod, url) {
    $('img.user_id[alt='+mod+']').replaceWith('<img src='+url+' class=user_id alt='+mod+' id='+mod+'>');
    $('#'+mod).addClass('mod-avatar');
}


var replaceModvatars = function () {
    for(i in modvatars) {
        replaceModvatar(modvatars[i].mod, modvatars[i].url);
    }
}

var wordFilter = function(usr, msg, wat) {
    for(p in word_filters) {
	msg = msg.replace(word_filters[p].pat, word_filters[p].target);
    }
    return [usr, msg, wat];
}


// Instrument the synchtube chat message handler with the word filter
var replaceChatHandler = function() {
    chat.writeMessage = instrumentFn(chat.writeMessage, wordFilter, true);
}


// Entry point for code (this is probably not idiomatic javascript, apparently
// it's standard to wrap the entire file in an anonymous function)
var doit = function (){
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
    });
};

