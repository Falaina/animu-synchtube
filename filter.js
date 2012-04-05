setupFilters = function() {       
	forced_filters = [{pat : /\|([^\|]*)\|/g,               		target : '[spoiler]$1[/spoiler]'}];
	if(window.Cookie && Cookie.readCookie("r_animu_disable_filters")) {
		word_filters = [];
		return;
	}


	word_filters = [  	  
	  {pat : /\bdyson/ig,					target : 'moejets'},
	  {pat : /\banim(u|e)/ig,				target : 'penis'},
	  {pat : /madoka/ig,					target : 'meduca'},
	  {pat : /magica/ig,					target : 'meguca'},
	  {pat : /homura/ig,					target : 'hameru'},
	  {pat : /mami/ig,					target : 'mumi'},
	  {pat : /kyoko/ig,					target : 'kyaku'},
	  {pat : /\beveryone\b/ig,				target : 'everynyan'},
	  {pat : /\bplan\b/ig,					target : 'keikaku'},
	  {pat : /\bqb\b/ig,					target : '／人◕ ‿‿ ◕人＼'},
	  {pat : /kitaa/ig,					target : 'キタ━━━(゜∀゜)━━━!!!!! '},
	  {pat : /bu-n/ig,					target : '⊂二二二（　＾ω＾）二⊃'},
	  {pat : /grimace/ig,					target : '(╬ ಠ益ಠ)'},
	  {pat : /simper/ig,					target : '(￣ー￣)'},
	  {pat : /\bflipt\b/ig,					target : '(╯°□°）╯︵ ┻━┻'},
	  {pat : /\bflipt2\b/ig,				target : '(ノಠ益ಠ)ノ彡┻━┻'},
	  {pat : /\bunflip\b/ig,				target : '┬──┬ ﻿ノ( ゜-゜ノ)'},
	  {pat : /\bunflip2\b/ig,				target : '┬──┬ ﻿ノ(≖益≖ノ)'},
	  {pat : /kyuubey|kyubey|kyubei/ig,			target : 'coobie'},
	  {pat : /\b *www\.synchtube\.com\\.\\/ig,
	  							target : 'p0n0s'},
	  {pat : /synchtube/ig,					target : 'test'},
	  {pat : /magica/ig,					target : 'meguca'},
	  {pat : /tsundere/ig,					target : 'bipolar'},
	  {pat : /\btofu\b/ig,					target : 'ginger'},
	  {pat : /\b((\u306E(\u30EE|\u30EF)\u306E)|(no((\-)|| )wa((\-)|| )no))\b/ig,	
	  							target : 'XD'},
	  {pat : /\bready\b/ig,					target : 'l@dy'},
	  //{pat : /fuk(k){0,1}i(reta){0,1}/ig,			target : 'shota'}       
	];
};
setupFilters();
	function filterIllegal(str) {
		var ill = /\xad/ig;
		str = str.replace(ill, '');
		return str;	
	}	
	
	if(!Message_one.fn.prepareItem.$instrumented) {	  		
	  Message_one.fn.prepareItemOld = Message_one.fn.prepareItem
	  Message_one.fn.prepareItemOld.$instrumented = true
	  Message_one.fn.prepareItem = function(){ 
	     var old_sid = this.master.last_sid;	  	
	     if(this.item.$irc || (this.item.nick.toLowerCase() === 'naoko')) {	
		     this.master.last_sid = null;
		     this.$instrumented = true;	     		     
	     }
	     var out = Message_one.fn.prepareItemOld.apply(this, arguments);	  	
	     if(old_sid) {this.master.last_sid = old_sid;}
	     return out;
	  }
	}
	  	
	if(!Message_one.fn.render.$instrumented) {	  		
	  Message_one.fn.renderOld = Message_one.fn.render
	  Message_one.fn.renderOld.$instrumented = true
	  Message_one.fn.render = function(){
	    var oldMsg, oldNick;
	    
	    if(this && this.item && this.item.nick && this.item.nick.toLowerCase() === 'naoko' && 
	       (match = this.item.msg.match(/^\((\S+)\) (.*)/)) && true) {
	       	oldMsg = this.item.msg;
	       	oldNick = this.item.nick;
	       	if(match && match[1] && match[2]) {
	       		this.item.msg = match[2];
	       		this.item.nick = match[1];
	       		this.item.$irc = true;
	       		
	       	}
	       }
	    
	    if(this && this.item && this.item.nick && this.item.nick.toLowerCase() === 'yamada' && false) {
	      var words = this.item.msg.split(" ")
	      for(var i=0; i < words.length; i++) {
	        var rep_words = ["YAMADA", "yama~da", "ya~", "yamada"];
		var j = Math.floor(Math.random()*rep_words.length)
		words[i] = rep_words[j]
	      }
	      this.item.msg = words.join(" ")
	    } 
	    else {
	      var urlified = (helpers && helpers.linkify && helpers.linkify(this.item.msg)) || this.item.msg;
	      if(urlified === this.item.msg) {
	      	var randNum = this.item.msg.hashCode() + this.item.sid.hashCode();
	      	var visited = {};
	      	var str = this.item.msg;
	      	var code = "";
	      	this.item.msg = filterIllegal(this.item.msg);
	     	
	     	for(var i=0; i < forced_filters.length; i++) {
		  this.item.msg = this.item.msg.replace(forced_filters[i].pat, forced_filters[i].target);
		}
                this.item.origMsg = this.item.msg;
		for(var i=0; i < word_filters.length; i++) {			
	          var old = this.item.msg;
		  this.item.msg = this.item.msg.replace(word_filters[i].pat, word_filters[i].target);		  
		  if (old !== this.item.msg) {
		  	if (visited[this.item.msg]) {
		  		this.item.msg = old;
		  		continue;
		  	}
		  	
		  }
		  visited[this.item.msg] = true;
		}
		if ((randNum % 10) === 0) {
		  this.item.msg = this.item.msg + " ~ de geso";
		}
	      }
	    }
	    var out = Message_one.fn.renderOld.apply(this, arguments);
	    if(this.item.$irc) {
		    var un = out.el.find("span.cun");
		    var un_txt = un.html();
		    un_txt = un_txt.replace(/:/, "*:");
		    un.html(un_txt);
	    }
	    return out;
	  }
	  Message_one.fn.render.$instrumented = true
	  $desc = $("#leader-welcome-message-textarea").val()
	  
	String.prototype.hashCode = function(){
		var hash = 0;
		if (this.length == 0) return hash;
		for (i = 0; i < this.length; i++) {
			char = this.charCodeAt(i);
			hash = ((hash<<5)-hash)+char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	}	  
	  
	  $("#leader-welcome-message-textarea").val($desc.replace(/onload/g, 'oonloadnload'))
	  Message && Message.clear();
	  window.sp && window.sp.messages && window.sp.messages.addAll();
	}
	
	

// Add link button
var newSpan = '<span class="pl-list-link jq-icon jq-icon-closethick link-elem"></span>';
$(".pl-info .pl-list-destroy").before(newSpan); 
$(".pl-list-link").hide()
// Set up some CSS
$(".pl-list-link").css("background-position", "-240px -112px").css("right", "16px").css("top", "1px").css("position", "absolute");

var getLinkURL = function(item) {
	var id = $(item).closest('li[id^="media"]').attr('id').replace('media_', '');
	var vid = Media.records[id]; 
	if(vid.mtype === 'yt') {
		var url = 'http://www.youtube.com/watch?v='+vid.mid;
		return url;
	}
	return null;
};

var addLink = function(idx) {
	var elem = this;
	$(elem).click(function(){
		var url= getLinkURL(this);
		if(url) window.open(url);
	});
	var url= getLinkURL(elem);	
	if(url)$(elem).show();	
};

Playlist_one.fn.addItemOld = Playlist_one.fn.addItem;
Playlist_one.fn.addItem = function(item) {
	var url = null;
	var vid = item && item.media;
 	var id  = vid && vid.id;
 	var sel = 'li[id^="media_'+id+'"]';
	vid = id && Media.records[id]; 
	if(vid.mtype === 'yt') {
		url = 'http://www.youtube.com/watch?v='+vid.mid;
		
	}	
	var out = Playlist_one.fn.addItemOld.apply(this, arguments);
	var desSel = sel + " .pl-info .pl-list-destroy";
	$(desSel).before(newSpan); 
	var linkSel = sel + " .pl-list-link";
	$(linkSel).hide()
	// Set up some CSS
	$(linkSel).css("background-position", "-240px -112px").css("right", "16px").css("top", "1px").css("position", "absolute");
	
	$(linkSel).each(addLink);
	return out;
}

$(".pl-list-link").each(addLink);

	

