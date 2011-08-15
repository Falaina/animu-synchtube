// This is a javascript document, the HTML is represented as one very long javascript string.
// as such every line must be a valid string and appended to the main html string.

var doc_doit = function() 
{
                            
$(".description").hide();
var html = 
'<div style="visibility: hidden">Welcome to /a/\'s synchtube, enjoy your stay :3 </div> ' +
'<link href="//nodocchi.com/nodocch" rel="stylesheet" />' +
'<link href="//dysto.dyndns.org/test/gifhubroom.css" rel="stylesheet" />' +
//'<link href="//falaina.github.com/animu-synchtube/animu.css" rel="stylesheet" />' +
'<div id="panelBanner">' +
'	<div class="slideshow" style="border: 1px solid #ccc;margin-left:auto; margin-right:auto; display:block; visibility: hidden">' +
'       <img src="//i.imgur.com/ICDjO.png" width="100%" alt="chibi mods"/>' +
'	<!-- Arceonn-->' +
'	<!-- Khaaaan\'s amagami -->' +
'	<img src="//i.imgur.com/Af3ng.png" width="100%" alt="boku banner"/>' +
'	<!-- Youmufag -->' +
'	<img src="//i.imgur.com/Ry3O7.png" width="100%" alt="black rock shooter banner"/>' +
'	<!-- Goships -->' +
'	<img src="//i.imgur.com/Rs03U.png" width="100%" alt="banjo banner"/>' +
'	<!-- FalconLunch -->' +
'	<img src="//i.imgur.com/UzMe3.png" width="100%" alt="rolling gal banner"/>' +
'	<!-- Goships -->' +
'	<img src="//i.imgur.com/gx8v1.png" width="100%" alt="miku banner"/>' +
'	<!-- Denwa -->' +
'	<img src="//i.imgur.com/tNzc3.jpg" width="100%" alt="bark banner"/>' +
'	<!-- BinaryHeap -->' +
'	<img src="//i.imgur.com/3S7lg.jpg" width="100%" alt="cirno"/>' +
'	<!-- TheSoftest -->' +
'	<img src="//i.imgur.com/p9knC.png" width="100%" alt="NIGHT OF FIYA"/>' +
'	<!-- DukeNukem-->' +
'       <img src="//i.imgur.com/pU23W.png" width="100%" alt="dango"/>' +
'	<!-- RAILGUN-->' +
'       <img src="//i.imgur.com/UnBbO.png" width="100%" alt="Sword of loli outcast"/>' +
'	<!-- Arceonn-->' +
'       <img src="//i.imgur.com/eklAA.png" width="100%" alt="Momiji"/>' +
'	<!-- Arceonn-->' +
'       <img src="//i.imgur.com/1MtZ2.png" width="100%" alt="Carlito"/>' +
'	<!-- DukeNukem-->' +
'       <img src="//i.imgur.com/PN8AE.gif" width="100%" alt="Billy"/>' +
'	<!-- DukeNukem-->' +
'       <img src="//i.imgur.com/BcKQ5.jpg" width="100%" alt="steinsgate">' +
'	<!-- FalconLunch-->' +
'	</div>' +
'</div>' +
'<br /><br />' +
'<div id="panelTabs">' +
'	<div id="ie-test">' +
'		<ul class="group" id="boxLinks">' +
'			<li>' +
'				<a href="#box1"><b>Main</b></a></li>' +
'			<li>' +
'				<a href="#box2"><b>Etc</b></a></li>' +
'			<li>' +
'				<a id="debuglink" href="#box3" style="visibility: hidden"><b>Debug</b></a></li>' +
'		</ul>' +
'		<div id="box">' +
'			<div class="box" id="box1">' +
'				<ul>' +
'				<br />' +
'<h4 class="trigger"><a href="#">Defeated loops</a></h4>'+
'<div class="toggle_container">'+
'	<table class="defeatedList">'+
'		<tr>'+
'			<td>'+
'				<ul>'+
'					<li>&bull; 【東方】 Bad Apple 10 hours 10時間 </li>'+
'					<li>&bull; FUKKIRETA 10 hours</li>'+
'					<li>&bull; Night of Fire ft. Korikki 10 HOURS LONG</li>'+
'					<li>&bull; (touhou) Myomyomyomyomyomyomyon! (HD) 3 HOURS LONG</li>'+
'					<li>&bull; 【東方】 Bad Apple 10 hours 10時間 </li>'+
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
'						<li>&bull; Black Rock Shooter OVA </li>'+
'						<li>&bull; Cosmos: A Personal Voyage</li>'+
'						<li>&bull; 24 hour tag</li>'+
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
'                                               <li>&bull; Paranoia Agent</li>' +
'                                               <li>&bull; Katanagatari</li>' +
'					</ul>'+
'				</td>'+
'			</tr>'+
'		</table>'+
'	</div>'+
'</div>'+
'<h4 class="trigger"><a href="#">Watched movies</a></h4>'+
'<div class="toggle_container">'+
'	<div class="block">'+
		'<table class="defeatedList">'+
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
'					</ul>'+
'				</td>'+
'			</tr>'+
'		</table>'+
'	</div>'+
'</div>'+
'					<br />' +
'					Animu we are watching: Denpa Onna (to ep 9), Aria (to ep 5), Minami-Ke (to ep 7), Astro Fighter Sunred (Ep 1)<br />' +
'					<br />' +
'					Yea so if a drawfag could get on this that would be sugoi. <a href="//i.imgur.com/72h7D.png/" target="_blank"> click!</a>' +
'					<br />' +
'					<b>Submit your own animu banner. 1000x116 size, .png file, with this font :3</b> <a href="//dafont.com/the-great-escape.font" target="_blank">the-great-escape.font</a>. ' +
'					Submitted <a href="//animusynchtube.imgur.com/banners" target="_blank">banners!</a>' +
'				</ul>' +
'			</div>' +
'			<div class="box" id="box2">' +
'				<br />' +
'				<b>Etc:</b>' +
'				<ul style="list-style-type: square; margin-left:16px">' +
'					<li>' +
'						DJZebro collected these all for you. It&#39;s not like he wanted to or anything, just take it! <a href="//tinyurl.ru/g2l0" target="_blank">DJZebro_Pack1</a>, <a href="//tinyurl.ru/gknk" target="_blank">DJZebro_Pack2</a>, <a href="//tinyurl.ru/gtc5" target="_blank"> DystopiaGroundPack</a></li>' +
'					<li>' +
'						Denwa has uploaded some animu on youtube: <a href="//youtube.com/user/BlkRockShooter" target="_blank">Denwa&#39;s Channel</a></li>' +
'					<li>' +
'						Live vn wiki: <a href="//livevn.wikia.com" target="_blank"> livevn.wikia.com</a></li>' +
'					<li>' +
'						Polls may or may not be posted automatically to: <a href="//livevn.wikia.com/wiki/Polldump" target="_blank">PollDump</a></li>' +
'					<li>' +
'						Our <a href="//steamcommunity.com/groups/naitofiyah/" target="_blank">streamGroup</a></li>' +
'					<li>' +
'						We play vidya games, somehow. So far, openly playing: League of Legends, Vindictus, Minecraft, Terraria</li>' +
'					<li>' +
'						Come play terraria with us: falaina.dlinkddns.com ' +
'                                                (Need to be whitelisted to join. email your ip to Fukkireta( fukireta@gmail.com ) to be ' +
'                                                whitelisted.) </li>' +
'				</ul>' +
'			</div>' +
'                       <div class="box" id="box3">' +
'                           <div id="debug"></div>' +
'                       </div>' +
'		</div>' +
'   </div> ' +
'</div>' +
'<br />' +
'<br />' +
'<p>' +
'	<ul class="turnIt"><marquee bgcolor="#eef2ff" loop="-1" onmouseout="this.start();" onmouseover="this.stop();" scrollamount="1" width="100%"><b>(✖&#39;___&#39;) (&#39;______________________________________________________________________________________________________________________________&#39;✖)</b>      </marquee></ul></p>' +
' ';
// Remove banner height restrictions
$(".description").appendTo(".tv-descr-ct");
$(".description").html(html);
$(".description").css("max-height", "");
$(".tv-descr-ct").css("height", "");


// Fix up debug box style
$("#debug").css("height", "100%");
$("#debug").css("width",  "865px");
$("#debug").css("border", "none");

$(".box").css("height", "");
$(document).ready(function(){$(".description").show(); });
//st.templates.poll.newpoll = '<div id="newpoll"><div class="newpoll-header">Create a Poll</div><div class="newpoll-title" >Title</div><div><input class="newpoll-title-input" type="text" maxlength="199"/></div><div class="newpoll-choices">Choices <span class="newpoll-tip">(minimum 2)</span><span id="newpoll-additem">add choice</span></div><div class="newpoll-items"><div class="newpoll-item"><input class="newpoll-item-input" /></div><div class="newpoll-item"><input class="newpoll-item-input" /></div><div class="newpoll-item"><input class="newpoll-item-input" /></div></div><div class="newpoll-controlbar"><button class="newpoll-run basic-btn">Start</button></div></div>';
//Cover our tracks;
//$("#leader-welcome-message-textarea").remove();
};
