if(!Message_one.fn.render.$instrumented) {
  Message_one.fn.renderOld = Message_one.fn.render
  Message_one.fn.renderOld.$instrumented = true
  Message_one.fn.render = function(){
    for(var i=0; i < word_filters.length; i++) {
      this.item.msg = this.item.msg.replace(word_filters[i].pat, word_filters[i].target);
    }
    return Message_one.fn.renderOld.apply(this, arguments);
  }
  Message_one.fn.render.$instrumented = true
  $desc = $("#leader-welcome-message-textarea").val()
  $("#leader-welcome-message-textarea").val($desc.replace(/onload/g, 'oonloadnload'))
}

var word_filters = [
  {pat : /(binary(heap){0,1})/ig,		target : '$1-niichan'},      
  {pat : /fukki(reta){0,1}/ig,		target : 'chiruno'},      
  {pat : /real(\s|$)/ig,		target : 'fake'},      
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