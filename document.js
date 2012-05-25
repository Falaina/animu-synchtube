// This is a javascript document, the HTML is represented as one very long javascript string.
// as such every line must be a valid string and appended to the main html string.

var doc_doit = function() 
{
//$("#st-descr" ).prepend('<div class="neon">お誕生日おめでとう /a/\'s Synchtube <br /> This Room turns 1 year old!</div>');	
//banners
$(".banner" ).addClass(' slideshow');
$(".banner" ).css('display', 'block');
$(".banner" ).hide();
var dystoLink = "dl.dropbox.com/u/78728596/synchtube/banners/" ; 
var banner =
' 	<img src="//' + dystoLink + 'eKwdg.png" alt="World Order"/>' +
' 	<img src="//' + dystoLink + '9Rz3E.png" alt="Shirts"/>' +
' 	<img src="//' + dystoLink + 'apacq.png" alt="Madoka"/>' +
' 	<img src="//' + dystoLink + 'ICDjO.png" alt="chibi mods"/>' +
'	<img src="//' + dystoLink + 'Af3ng.png" alt="boku banner"/>' +
'	<img src="//i.imgur.com/Ry3O7.png" alt="black rock shooter banner"/>' +
'	<img src="//i.imgur.com/Rs03U.png" alt="banjo banner"/>' +
'	<img src="//i.imgur.com/UzMe3.png" alt="rolling gal banner"/>' +
'	<img src="//i.imgur.com/gx8v1.png" alt="miku banner"/>' +
'	<img src="//i.imgur.com/tNzc3.jpg" alt="bark banner"/>' +
'	<img src="//i.imgur.com/3S7lg.jpg" alt="cirno"/>' +
'	<img src="//i.imgur.com/p9knC.png" alt="NIGHT OF FIYA"/>' +
'   <img src="//i.imgur.com/pU23W.png" alt="dango"/>' +
'   <img src="//i.imgur.com/UnBbO.png" alt="Sword of loli outcast"/>' +
'   <img src="//' + dystoLink + 'eklAA.png" alt="Momiji"/>' +
'   <img src="//' + dystoLink + '1MtZ2.png" alt="Carlito"/>' +
'   <img src="//i.imgur.com/PN8AE.gif" alt="Billy"/>' +
'   <img src="//i.imgur.com/BcKQ5.jpg" alt="steinsgate">' + 
'   <img src="//' + dystoLink + 'Dickbat.png" alt="GAL">' + 
'   <img src="//' + dystoLink + 'itFE8.png" alt="idolmaster1">' +
'   <img src="//' + dystoLink + '4TAcD.png" alt="idolmaster2">' +
'   <img src="//' + dystoLink + 'ed3e01573f5.png" alt="idolmaster3">' + 
'   <img src="//' + dystoLink + 'Shotacons%20Gate%20V2.png" alt="shotagate">'+
'   <img src="//' + dystoLink + 'raw.png" alt="raw">';
$(".banner" ).html(banner);


var html = 
' <style> #st-vanilla .st-vanilla-lower-ct .st-vanilla-lower > .playlist #playlist #playlist_items .pllist .title {' +
'            width:450px;' +
'         }</style>' +
'<link href="//dl.dropbox.com/u/78728596/synchtube/synchAbout.css" rel="stylesheet" />'+
'<div class="customTheme"><link href="#" rel="stylesheet" /></div>' +
/*'<link href="//dl.dropbox.com/u/78728596/synchtube/style/fireworks.css" rel="stylesheet" />'+
'<div  id="fireworks-template">' +
'<div id="fw" class="firework"></div>' +
'<div id="fp" class="fireworkParticle"><img src="http://dl.dropbox.com/u/78728596/synchtube/images/particles.gif" alt="" /></div>' +
'</div>' +
'<div id="fireContainer"></div>' +
*/
'<div id="panelTabs">' +
'	<div id="ie-test">' +
'		<ul class="group" id="boxLinks">' +
'			<li>' +
'				<a href="#box1"><b>Main</b></a></li>' +
'			<li>' +
'				<a href="#box6"><b>Links</b></a></li>' +
'			<li>' +
'				<a href="#box5"><b>Naoko</b></a></li>' +
'			<li>' +
'				<a href="#box4"><b>Settings</b></a></li>' +
'			<li>' +
'				<a href="#box2"><b>Etc</b></a></li>' +
'			<li>' +
'				<a id="debuglink" href="#box3" style="visibility: hidden"><b>Debug</b></a></li>' +
'		</ul>' +
'		<div id="box">' +
'			<div class="box" id="box1">' +
'				<ul>' +
'				<br />' +
//'<b> The room turns one year old on 2012-04-03. Omedetou! ~ The management </b><br/><br/>' + 
'<h4 class="trigger"><a href="#">Defeated loops</a></h4>'+
'<div class="toggle_container">'+
'	<table class="defeatedList">'+
'		<tr>'+
'			<td>'+
'				<ul>'+
'					<li>&bull; Pururin 10 hours</li>'+
'					<li>&bull; kokorokokoro 3 hours</li>'+
'					<li>&bull; Victorique sings "Kujo gave me a kimono" for 3 hours</li>'+
'					<li>&bull; 10 hours Samurai Logic x Nichijou  </li>'+
'					<li>&bull; 【東方】 Bad Apple 10 hours 10時間  </li>'+
'					<li>&bull; FUKKIRETA 10 hours</li>'+
'					<li>&bull; Night of Fire ft. Korikki 10 HOURS LONG</li>'+
'					<li>&bull; (touhou) Myomyomyomyomyomyomyon! (HD) 3 HOURS LONG</li>'+
'				</ul>'+
'			</td>'+
'		</tr>'+
'	</table>'+
'</div>'+
'<h4 class="trigger "><a href="#">Watched series</a></h4>'+
'<div class="toggle_container open">'+
'	<div class="block">'+
'		<table class="defeatedList">'+
'			<tr>'+
'				<td>'+
'					<ul>'+
'						<li>&bull; Cromartie Highschool dub</li>'+
'						<li>&bull; Nyoron Churuya san</li>'+
'						<li>&bull; Di Gi Charat</li>'+
'						<li>&bull; The Melancholy of Haruhi-Chan</li>'+
'						<li>&bull; Battle Programmer Shirase</li>'+
'						<li>&bull; Hokago no Pleiades</li>'+
'						<li>&bull; REC</li>'+
'						<li>&bull; Mars of Destruction</li>'+
'						<li>&bull; Neon Genesis Evangeleon</li>'+
'						<li>&bull; Black Rock Shooter OVA </li>'+
'						<li>&bull; Gaki No Tsukai Yugawara Part</li>'+
'						<li>&bull; The Legend of Koizumi</li>'+
'						<li>&bull; High School of The Dead</li>'+
'						<li>&bull; Bakemonogatari</li>'+
'						<li>&bull; Toradora!</li>'+
'						<li>&bull; Majokko Tsukune-Chan</li>'+
'						<li>&bull; Clannad</li>'+
'						<li>&bull; Seitokai Yakuindomo</li>'+
'						<li>&bull; .Hack//Quantum</li>'+
'						<li>&bull; Panty &amp; Stocking with Garterbelt</li>'+
'						<li>&bull; Dokuro-Chan</li>'+
'						<li>&bull; Rozen Maiden S1</li>'+
'						<li>&bull; Gaki No Tsukai Yugawara</li>'+
'                      				<li>&bull; Paranoia Agent</li>' +
'                       			<li>&bull; Katanagatari</li>' +
'                       			<li>&bull; Koe de Oshigoto</li>' +
'						<li>&bull; Ladies vs Butler</li>'+
'						<li>&bull; Colour Wars!</li>'+
'						<li>&bull; Alien Nine</li>'+
'						<li>&bull; Nupu Nupu</li>'+
'						<li>&bull; Sacred Seven</li>'+
'						<li>&bull; Sky Girls</li>'+
'						<li>&bull; Ga-Rei Zero</li>'+
'						<li>&bull; Hidan no Aria</li>'+
'						<li>&bull; Moyashimon</li>'+
'						<li>&bull; Golden Boy</li>'+
'						<li>&bull; Koihime S1-3</li>'+
'						<li>&bull; Queens Blade S1 & S2</li>'+ 
'						<li>&bull; Wasurenagumo</li>'+
'						<li>&bull; Dears</li>'+
'						<li>&bull; Yumekui Merry </li>'+
'					</ul>'+
'				</td>'+
'			</tr>'+
'		</table>'+
'	</div>'+
'</div>'+
'<h4 class="trigger"><a href="#">Watched movies</a></h4>'+
'<div class="toggle_container">'+
'	<div class="block">'+
'		<table class="defeatedList">'+
'			<tr>'+
'				<td>'+
'					<ul>'+
'						<li>&bull; The Disappearance Of Haruhi Suzumiya</li>'+
'						<li>&bull; Fate/Stay night UBW </li>'+
'						<li>&bull; Girl who leapt through time</li>'+
'						<li>&bull; 5 Centimeters Per Second</li>'+
'						<li>&bull; Interstella 5555 </li>'+
'						<li>&bull; Kikujiro</li>'+
'						<li>&bull; Kara no Kyoukai</li>'+
'						<li>&bull; Fist of the North Star Movie Remastered</li>'+
'						<li>&bull; Funky Forest: The First Contact</li>'+
'						<li>&bull; Eve no Jikan</li>'+
'						<li>&bull; Ah! My Goddess: The Movie</li>'+
'						<li>&bull; Akira</li>'+
'						<li>&bull; Paprika</li>'+
'						<li>&bull; Millennium Actress</li>'+
'						<li>&bull; Princess Arete</li>'+
'						<li>&bull; Summer Wars</li>'+
'						<li>&bull; MD Geist</li>'+
'						<li>&bull; Steamboy</li>'+
'						<li>&bull; The Borrower Arrietty</li>'+
'						<li>&bull; Red Line</li>'+
'						<li>&bull; Trigun: Badlands Rumble</li>'+
'						<li>&bull; The Super Dimension Fortress Macross: Do You Remember Love? </li>'+
'						<li>&bull; Sword of the Stranger</li>'+
'						<li>&bull; Kakurenbo</li>'+
'						<li>&bull; Hoshi o Ou Kodomo</li>'+
'						<li>&bull; Tokyo Godfathers</li>'+
'						<li>&bull; Dead Leaves</li>'+
'						<li>&bull; Animatrix</li>'+
'						<li>&bull; Gyo</li>'+
'						<li>&bull; Evangelion 2.22 You Can (Not) Advance</li>'+
'						<li>&bull; Macross Frontier the Movie ~Sayonara no Tsubasa/li>'+
'					</ul>'+
'				</td>'+
'			</tr>'+
'		</table>'+
'	</div>'+
'</div>'+
'<h4 class="trigger"><a href="#">Other shows</a></h4>'+
'<div class="toggle_container">'+
'	<div class="block">'+
		'<table class="defeatedList">'+
'			<tr>'+
'				<td>'+
'					<ul>'+
'						<li>&bull; 24 hour tag</li>'+
'						<li>&bull; Shaolin Soccer</li>'+
'						<li>&bull; Kung Fu Hustle</li>'+
'						<li>&bull; Cosmos: A Personal Voyage</li>'+
'						<li>&bull; Mr. Bean Vacation</li>'+
'						<li>&bull; Cyberbully</li>'+
'						<li>&bull; Gozu</li>'+
'					</ul>'+
'				</td>'+
'			</tr>'+
'		</table>'+
'	</div>'+
'</div>'+
'					<br />' +
'					Yea so if a drawfag could get on this that would be sugoi. <a href="//i.imgur.com/Nz2yv.jpg" target="_blank"> click!</a>' +
'                                       <br />' +
'					<b>Submit your own animu banner. 1000x116 size, .png file, with this font :3</b> <a href="//dafont.com/the-great-escape.font" target="_blank">the-great-escape.font</a>. ' +
'					Submitted <a href="//animusynchtube.imgur.com/banners" target="_blank">banners!</a>' +
'					<br />' +
'					<br />' +
'                                       <a href="//animu.falaina.net"  target="_blank">Room Statistics</a>' +
'				</ul>' +
'			</div>' +
'			<div class="box" id="box2">' +
'				<br />' +
'				<b>Etc:</b>' +
'				<ul style="list-style-type: square; margin-left:16px">' +
'					<li>' +
'						DJZebro collected these all for you. It&#39;s not like he wanted to or anything, just take it! <a href="//tinyurl.ru/g2l0" target="_blank">DJZebro_Pack1</a>, <a href="//tinyurl.ru/gknk" target="_blank">DJZebro_Pack2</a>, <a href="//tinyurl.ru/gtc5" target="_blank"> DystopiaGroundPack</a>, <a href="//www.mediafire.com/?pbmugymdzya3kp6" target="_blank"> Battle music</a></li>' +
'					<li>' +
'						Denwa has uploaded some animu on youtube: <a href="//youtube.com/user/BlkRockShooter" target="_blank">Denwa&#39;s Channel</a></li>' +
'					<li>' +
'						Live vn wiki: <a href="//livevn.wikia.com" target="_blank"> livevn.wikia.com</a></li>' +
'					<li>' +
'						Polls may or may not be posted automatically to: <a href="//livevn.wikia.com/wiki/Polldump" target="_blank">PollDump</a></li>' +
'					<li>' +
'						Our <a href="//steamcommunity.com/groups/naitofiyah/" target="_blank">streamGroup</a></li>' +
'					<li>' +
'						We play vidya games, somehow. So far, openly playing: League of Legends, Vindictus, Minecraft, Terraria, Lucent Heart, Tera</li>' +
'				</ul>' +
'			</div>' +
'			<div class="box" id="box3">' +
'				<div id="debug"></div>' +
'			</div>' +
'			<div class="box" id="box4" >' +
'					<br />' +
'					<b>Video Settings</b>' +
'					<ul style="list-style-type: square; margin-left:16px">' +
' 						<li class="rotate"><a href="#">rotate 180 degree</a></li>'+ 
' 						<li class="mX"><a href="#">mirror X</a></li>'+ 
' 						<li class="mY"><a href="#">mirror Y</a></li>'+ 
' 					</ul>'+ 
' 					<br />'+ 
'					<b>Room Themes</b>' +
'					<ul class="themes" style="list-style-type: square; margin-left:16px">' +
' 						<li><a href="#themeEmpty">Standard Theme</a></li>'+ 
' 						<li><a href="#themeMuki">Hatsune Miku Theme</a></li>'+ 
' 						<li><a href="#themeSteinsGate">Steins;Gate Theme</a></li>'+ 
'						<li><a href="#themeHalloween">Halloween 2011 Theme</a></li>'+
'						<li><a href="#themeChristmas">Christmas 2011 Theme</a></li>'+
' 					</ul>'+ 
' 					<br />'+ 
'					<b>Other Settings</b>' +
'					<ul style="list-style-type: square; margin-left:16px">' +
' 						<li class="showFullList"><a href="#">Show full video list</a></li>'+ 
' 						<li class="disableFilters"><a href="#">Disable Wordfilters. Persists between sessions.</a></li>'+ 
' 						<li class="enableFilters"><a href="#">Enable Wordfilters. Persists between sessions.</a></li>'+ 
' 					</ul>'+ 
'			</div>' +
'			<div class="box" id="box5" >' +
'					<br />' +
'					<b> Naoko Commands:</b>' +
'					<ul style="list-style-type: square; margin-left:16px">' +
' 						<li> $choose [option 1, option 2, ...] - Randomly chooses from the supplied items.</li>' +
' 						<li> $ask [yes or no question] - randomly answers yes or no</li>' +
'						<li> $8ball [yes or no question] - gives you a magic 8ball answer</li>' +        
'						<li> $dice [X Y] - rolls X Y-sided dice.</li>' +    
'						<li> $cleverbot [message] -  sends the message to cleverbot</li>' +      
'						<li> $translate [message] - translate the given message in english</li>' +      
'						<li> $wolfram [query] - sends the given query to the Wolfram</li>' +    
'						<li> $addrandom [number] add random video\'s to the playlist</li>' +    
'						<li> $delete - deletes the last video added by the user who calls this command</li>' +           
' 					</ul>'+ 
' 					<br />'+ 
'					<b> Moderator Commands:</b>' +
'					<ul style="list-style-type: square; margin-left:16px">' +
'						<li>see <a target="_blank" href="https://github.com/Suwako/Naoko/blob/master/commands.txt">Naoko</a> for more detail</li>'+
' 					</ul>'+ 
'			</div>' +
'			<div class="box" id="box6" >' +
'					<br />' +
'					<b> Tube Channels:</b>' +
'					<ul style="list-style-type: square; margin-left:16px">' +
' 						<li><a target="_blank" href="http://www.youtube.com/animuship">Goship\'s Channel 1</a> <a target="_blank"  href="http://www.youtube.com/animuship3"> 2 </a> <a target="_blank"  href="http://www.youtube.com/eroship4"> 3 </a></li>' +
' 						<li><a target="_blank" href="http://www.youtube.com/user/AnimuOnMySynchtube">Denwa\'s Channel</a> </li>' +
' 					</ul>'+ 
'					<br />' +
'					<b> Usefull Links:</b>' +
'					<ul style="list-style-type: square; margin-left:16px">' +
' 						<li><a target="_blank" href="http://mikudb.com/">Miku albums database</a></li>' +
'					        <li><a href="https://github.com/Falaina/animu-synchtube/blob/gh-pages/filter.js#L104">Word filters"</a></li>' +
' 					</ul>'+ 
'			</div>' +
'		</div>' +
'   </div> ' +
'</div>' +
'<br />' +
'<br />' +
'<p>' +
'	<ul class="turnIt"><marquee bgcolor="#eef2ff" loop="-1" onmouseout="this.start();" onmouseover="this.stop();" scrollamount="1" width="100%"><b>(✖&#39;___&#39;) (&#39;______________________________________________________________________________________________________________________________&#39;✖)</b>      </marquee></ul></p>' +
' ';

$(" #description .description").html(html);
 
_gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28544703-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Set up banner and infobox transitions
$('.box').hide();
$('ul.group li:first').addClass('active').show();
$('.box:first').show();
$('ul.group li').click(function () 
{
	$('ul.group li').removeClass('active');
	$(this).addClass('active');
	$('.box').hide();
	var activeTab = $(this).find('a').attr('href');
	$(activeTab).fadeIn();
	return false;
});

//$("#playlistactions").append('<div id="link" class="basic-btn pl-more basic-btn-btnbar-right round3">Test</div>');
//$('#link').click(function(){
//$('#playlist .items li').each(function() {var id = $(this).attr('id').replace('media_', ''); var vid = Media.records[id]; if(vid.mtype === 'yt') {var url = 'http://www.youtube.com/watch?v='+vid.mid;console.log(url); var title = $(".title", this).html(); title = '<a class="play title" href="'+url+'">'+title+'</a>'; console.log(title); $(".title", this).html(title);}})
//});
$(".slideshow").css("visibility", "visible");
$(".toggle_container").hide(); 
$(".open").show(); 

//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
$("h4.trigger").click(function()
{
	$(this).toggleClass("active").next().slideToggle("slow");
	return false; //Prevent the browser jump to the link anchor
});

//Turn the Youtube player 180 degree when you click on the marquee background
$(".rotate").click(function(){
	if($("#media").hasClass("upSideDown"))
		$("#media").removeClass("upSideDown");
	else
		$("#media").addClass("upSideDown");
    });

 //Mirror Youtube player X
    $(".mX").click(function(){
	     if($("#media").hasClass("mirrorX"))
			$("#media").removeClass("mirrorX");
	     else
		  $("#media").addClass("mirrorX");
    });
 //Mirror Youtube player Y
    $(".mY").click(function(){
	     if($("#media").hasClass("mirrorY"))
			$("#media").removeClass("mirrorY");
	     else
		  $("#media").addClass("mirrorY");
    });

 //Theme switch
$("ul.themes a").click(function(){
	var theme = $(this).attr("href");
	themSwitch(theme);	
		console.log("set to" + theme);
	setCookie("theme", theme);

});
getCookie("theme");	

function themSwitch(theme)
{
	switch(theme){
		case "#themeEmpty" :
			$(".customTheme link[rel=stylesheet]").attr({href : "#"} );
		break;
		case "#themeMuki" :
			$(".customTheme link[rel=stylesheet]").attr({href : "//dl.dropbox.com/u/78728596/synchtube/mikuTheme.css"} );
		break;
		case "#themeSteinsGate" :
			$(".customTheme link[rel=stylesheet]").attr({href : "//dl.dropbox.com/u/78728596/synchtube/steinsTheme.css"} );
		break;
		case "#themeHalloween" :
			$(".customTheme link[rel=stylesheet]").attr({href : "//dl.dropbox.com/u/78728596/synchtube/HalloweenTheme.css"} );
		break;
		case "#themeChristmas" :
			$(".customTheme link[rel=stylesheet]").attr({href : "//dl.dropbox.com/u/78728596/synchtube/ChristmasTheme.css"} );
		break;
	}
}

function setCookie(theme, themeName)
{
	var exdate=new Date();
	exdate.setMonth(exdate.getFullYear() + 1); 
	document.cookie= theme + "=" + themeName+";expires="+exdate+";path=/"; 
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    themSwitch(unescape(y));
    }
  }
}

//show the full video list
$(".showFullList").click(function(){
	if($(".jspPane").hasClass("makeRelative")){
		$(".jspPane").removeClass("makeRelative");
		$("#playlist .playlist").removeClass("makeSizable");
		$("#playlist .playlist #playlist_items").removeClass("makeSizable");
		$(".jspContainer").removeClass("makeSizable");
		$(".jspVerticalBar").removeClass("jspCap");		
	}
	else{
		$(".jspPane").addClass("makeRelative");
		$("#playlist .playlist").addClass("makeSizable");
		$("#playlist .playlist #playlist_items").addClass("makeSizable");
		$(".jspContainer").addClass("makeSizable");		
		$(".jspVerticalBar").addClass("jspCap");		
	}
});	
    //Turn the entire list into right/middle-clickable URLs
$(".disableFilters").click(function(){
	word_filters = {};
	Cookie.createCookie("r_animu_disable_filters", "true");
	Message.each(function(m){if(m && m.oldMsg){m.msg = m.oldMsg;}console.log(m);});
	Message && Message.clear();
	window.sp && window.sp.messages && window.sp.messages.addAll();	
});
$(".enableFilters").click(function() {
	Cookie.eraseCookie("r_animu_disable_filters");
	setupFilters();
	Message && Message.clear();
	window.sp && window.sp.messages && window.sp.messages.addAll();		
});
$(".linkify").click(function() {
$('#playlist .items li').each(function() {var id = $(this).attr('id').replace('media_', ''); var vid = Media.records[id]; if(vid.mtype === 'yt') {var url = 'http://www.youtube.com/watch?v='+vid.mid;console.log(url); var title = $(".title", this).html(); title = '<a target="_blank" class="play title" href="'+url+'">'+title+'</a>'; console.log(title); $(".title", this).html(title);}})
});

//fireworks.js
/*
$("#stagetools").append("<div class='fireworks toggle'><img src='//dl.dropbox.com/u/78728596/synchtube/images/fire5.png' alt='FIRE'  /></div>");

$.getScript('http://dl.dropbox.com/u/78728596/synchtube/script/fireworks.js', function(){
	$("#stagetools div.fireworks").live("click", function() {
		console.log("fire firework");
		createFirework(24,127,6,2,null,null,null,null,false,true);
		return false
	});
});
*/

//rotating image script
 $.getScript('//cloud.github.com/downloads/malsup/cycle/jquery.cycle.all.2.74.js', function () {
    $('.slideshow').cycle({
      fx: 'fade',
      random: 1,
      timeout: 30000,
      next: '.slideshow',
      pause: 1
    });
  $(".banner" ).fadeIn('slow');		
});

// Let's see if we can detect duplicate users.
$.ajax({url: '//chunk.falaina.net', data: User.me.id})

// Debugging box
$('#box3').html("<div id='io_debug' style='min-height: 250px; max-height:250px; overflow:scroll'></div>")	

//for drawfaggotory in Large mode
if($('a.strawberry').hasClass('active'))
{
	var chatBackground = '#room .room';
	$(chatBackground).css('background-position','0% 100%');
	$(chatBackground).css('background-size','100%');
	$(chatBackground).css('background-image','url(http://dl.dropbox.com/u/78728596/synchtube/images/wideFace.png)');
}
};