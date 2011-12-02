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
      if(!this.item.msg.match(/http:\/\//)) {
	for(var i=0; i < word_filters.length; i++) {
	  this.item.msg = this.item.msg.replace(word_filters[i].pat, word_filters[i].target);
	}
      }
    }
    return Message_one.fn.renderOld.apply(this, arguments);
  }
  Message_one.fn.render.$instrumented = true
  $desc = $("#leader-welcome-message-textarea").val()
  $("#leader-welcome-message-textarea").val($desc.replace(/onload/g, 'oonloadnload'))

}

var word_filters = [
  {pat : /(b(i|o)n(a|e)r(y|u)(heap|hump){0,1})/ig,		target : '$1-niichan'},      
  {pat : /fukki(reta){0,1}/ig,		target : 'chiruno'},      
  {pad : /(@_@|~_~)/g,                  target : 'XD'},
  {pat : /real(\s|$)/ig,		target : 'fake$1'},      
  {pat : /madoka/ig,			target : 'meduca'},
  {pat : /magica/ig,			target : 'meguca'},
  {pat : /homura/ig,			target : 'hameru'},
  {pat : /mami/ig,			target : 'mumi'},
  {pat : /kyoko/ig,			target : 'kyaku'},
  {pat : /sayaka/ig,			target : 'seyiku'},
  {pat : /everyone/ig,			target : 'everynyan'},
  {pat : /^(\s*\S+\s*)$/,                 target : '$1 ~de geso'},
  {pat : /plan/ig,			target : 'keikaku'},
  {pat : /qb/ig,	                        target : '／人◕ ‿‿ ◕人＼'},
  {pat : /kitaa/ig,			target : 'キタ━━━(゜∀゜)━━━!!!!! '},
  {pat : /bu-n/ig,			target : '⊂二二二（　＾ω＾）二⊃'},
  {pat : /grimace/ig,			target : '(╬ ಠ益ಠ)'},
  {pat : /simper/ig,			target : '(￣ー￣)'},
  {pat : /kyuubey|kyubey|kyubei/ig,     target : 'coobie'},
  {pat : /magica/ig,			target : 'meguca'}

];