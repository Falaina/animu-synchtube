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
    {pat : /madoka/ig,       new : 'meduca'},
    {pat : /(QB|kyuubey)/ig,  new : 'coobie'},
    {pat : /homura/ig,       new : 'hameru'},
    {pat : /mami/ig,         new : 'mumi'},
    {pat : /kyoko/ig,        new : 'kyaku'},
    {pat : /sayaka/ig,       new : 'sayaku'},
    {pat : /(binaryheap)/ig, new : '$1-senpai'},
    {pat : /everyone/ig,     new : 'everynyan'},
    {pat : /plan/ig,         new : 'keikaku'},
    {pat : /[^ ]*www.synchtube.com\/r\/E34fag/ig,    new : 'Ban me for spammer!'},
    {pat : /[^ ]*www.synchtube.com\/r\/4chanLive/ig, new : 'Ban me for spammer!'},
    {pat : /[^ ]*www.synchtube.com\/r\/Babby/ig,     new : 'Ban me for spammer!'}
];

// Convenience function for logging
var log = function() {
    window.console && console.log && console.log(arguments);
}


// Convenience function for hooking a javascript function
var instrumentFn = function(fn, pre) {
    argTransform = arguments[2];
    var newFn = function() 
    {
	var res = pre.apply(this, arguments); 
	if(argTransform) {arguments = res;}
        if(fn.instrumented) {fn = fn.restore();}
	return fn.apply(this, arguments)
    };
    newFn.restore = function() {return fn;}
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

var wordFilter = function(usr, msg, wat) {
    for(p in word_filters) {
	msg = msg.replace(word_filters[p].pat, word_filters[p].new);
    }
    return [usr, msg, wat];
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

var replaceChatHandler = function() {
    chat.writeMessage = instrumentFn(chat.writeMessage, wordFilter, true);
}

var doit = function (){
    replaceModvatars();
    ignore(replaceChatHandler);
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
    });
};

