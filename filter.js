if(!Message_one.fn.render.$instrumented) {
  Message_one.fn.renderOld = Message_one.fn.render
  Message_one.fn.renderOld.$instrumented = true
  Message_one.fn.render = function(){
    if(this.item.nick.toLowerCase() === 'yamada') {
      var words = this.item.msg.split(" ")
      for(var i=0; i < words.length; i++) {
	var j = Math.ceil(Math.random()*4)
	if (j == 1) {
	  words[i] = "YAMADA"
	} else if (j == 2) {
	  words[i] = "yama~da"
	} else if (j == 3) {
	  words[i] = "ya~"
	} else {
	  words[i] = "yamada"
	}	
      }
      this.item.msg = words.join(" ")
    } 
    else {
      var urlified = (helpers && helpers.linkify && helpers.linkify(this.item.msg)) || this.item.msg;
      if(urlified === this.item.msg) {
      	var randNum = this.item.msg.hashCode() + this.item.sid.hashCode();
//     	console.log(this.item, randNum)
	for(var i=0; i < word_filters.length; i++) {
	  this.item.msg = this.item.msg.replace(word_filters[i].pat, word_filters[i].target);
	}
	if ((randNum % 10) === 0) {
	  this.item.msg = this.item.msg + " ~ de geso";
	}
      }
    }
    return Message_one.fn.renderOld.apply(this, arguments);
  }
  Message_one.fn.render.$instrumented = true
  $desc = $("#leader-welcome-message-textarea").val()
  $("#leader-welcome-message-textarea").val($desc.replace(/onload/g, 'oonloadnload'))

}
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

var word_filters = [
  {pat : /(b(i|o)n(a|e)r(y|u)(-*heap|hump){0,1})/ig,		target : '$1-niichan'},      
  {pat : /fuk(k){0,1}i(reta){0,1}/ig,		target : 'chiruno'},      
  {pat : /(@_+@|~_+~)/g,                  target : 'XD'},
  {pat : /\b(:3)\b/g,                  target : 'xiox :3'},
  {pat : /\b(u_+u)\b/g,                  target : '^_^'},
  {pat : /\brea(l|I)\b/ig,		target : 'fake'},      
  {pat : /\byour\b/ig,		target : 'you\'re'},      
  {pat : /\byou're\b/ig,		target : 'your'},      
  {pat : /\btheir\b/ig,		target : 'they\'re'},      
  {pat : /\bthere\b/ig,		target : 'their'},      
  {pat : /\bthey're\b/ig,		target : 'there'},      
  {pat : /madoka/ig,			target : 'meduca'},
  {pat : /magica/ig,			target : 'meguca'},
  {pat : /homura/ig,			target : 'hameru'},
  {pat : /mami/ig,			target : 'mumi'},
  {pat : /kyoko/ig,			target : 'kyaku'},
  {pat : /sayaka/ig,			target : 'seyiku'},
  {pat : /\beveryone\b/ig,			target : 'everynyan'},
  {pat : /\bplan\b/ig,			target : 'keikaku'},
  {pat : /\bqb\b/ig,	                        target : '／人◕ ‿‿ ◕人＼'},
  {pat : /kitaa/ig,			target : 'キタ━━━(゜∀゜)━━━!!!!! '},
  {pat : /bu-n/ig,			target : '⊂二二二（　＾ω＾）二⊃'},
  {pat : /grimace/ig,			target : '(╬ ಠ益ಠ)'},
  {pat : /simper/ig,			target : '(￣ー￣)'},
  {pat : /kyuubey|kyubey|kyubei/ig,     target : 'coobie'},
  {pat : /magica/ig,			target : 'meguca'}

];