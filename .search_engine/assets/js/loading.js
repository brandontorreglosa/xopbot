var a=document.getElementById("a-load");var s=document.getElementById("suggestions");a.style.display="none";s.style.display="none";setTimeout(()=>{const l=document.getElementById("loader");l.style.display="none";a.style.display="block";},3000);const video=document.getElementById("vid");function startPreview(){video.muted=true;video.currentTime=1;video.playbackRate=0.8;video.play();}
function stopPreview(){video.currentTime=0;video.playbackRate=1;video.pause();}
let previewTimeout=null;video.addEventListener("mouseenter",()=>{startPreview();previewTimeout=setTimeout(stopPreview,10000);});video.addEventListener("mouseleave",()=>{clearTimeout(previewTimeout);previewTimeout=null;stopPreview();});const video1=document.getElementById("vid1");function startPreview1(){video1.muted=true;video1.currentTime=1;video1.playbackRate=0.8;video1.play();}
function stopPreview1(){video1.currentTime=0;video1.playbackRate=1;video1.pause();}
let previewTimeout1=null;video1.addEventListener("mouseenter",()=>{startPreview1();previewTimeout1=setTimeout(stopPreview1,10000);});video1.addEventListener("mouseleave",()=>{clearTimeout(previewTimeout1);previewTimeout1=null;stopPreview1();});const video2=document.getElementById("vid2");function startPreview2(){video2.muted=true;video2.currentTime=1;video2.playbackRate=0.8;video2.play();}
function stopPreview2(){video2.currentTime=0;video2.playbackRate=1;video2.pause();}
let previewTimeout2=null;video2.addEventListener("mouseenter",()=>{startPreview2();previewTimeout2=setTimeout(stopPreview2,10000);});video2.addEventListener("mouseleave",()=>{clearTimeout(previewTimeout2);previewTimeout2=null;stopPreview2();});const video3=document.getElementById("vid3");function startPreview3(){video3.muted=true;video3.currentTime=1;video3.playbackRate=0.8;video3.play();}
function stopPreview3(){video3.currentTime=0;video3.playbackRate=1;video3.pause();}
let previewTimeout3=null;video3.addEventListener("mouseenter",()=>{startPreview3();previewTimeout3=setTimeout(stopPreview3,10000);});video3.addEventListener("mouseleave",()=>{clearTimeout(previewTimeout3);previewTimeout3=null;stopPreview3();});function vprev(){var a=document.getElementById("img-1");var b=document.getElementById("vid");a.style.display="none";b.style.display="block";}
function eprev(){var a=document.getElementById("img-1");var b=document.getElementById("vid");a.style.display="block";b.style.display="none";}
function bprev(){var a=document.getElementById("img-2");var b=document.getElementById("vid1");a.style.display="none";b.style.display="block";}
function sprev(){var a=document.getElementById("img-2");var b=document.getElementById("vid1");a.style.display="block";b.style.display="none";}
function lprev(){var a=document.getElementById("img-3");var b=document.getElementById("vid2");a.style.display="none";b.style.display="block";}
function kprev(){var a=document.getElementById("img-3");var b=document.getElementById("vid2");a.style.display="block";b.style.display="none";}
function iprev(){var a=document.getElementById("img-4");var b=document.getElementById("vid3");a.style.display="none";b.style.display="block";}
function dprev(){var a=document.getElementById("img-4");var b=document.getElementById("vid3");a.style.display="block";b.style.display="none";}
function suggest(){var del=document.getElementById("search");var x=document.getElementById("search").value;var s=document.getElementById("suggestions");var w=document.documentElement.clientWidth||window.innerWidth;if(w<=1200){s.style.display="none";document.getElementById("alert").style.display="none";if(x.length<4){document.getElementById("alert").style.display="block";document.getElementById("alert-msg").innerHTML="You need to have more than 4 characters";}else{document.getElementById("alert-msg").innerHTML="Searching For:"+"&nbsp"+"&nbsp"+x;}
if(x.length<1){document.getElementById("alert").style.display="block";document.getElementById("alert-msg").innerHTML="Please type something to search.";}
if(x.includes("gore")||x.includes("nsfw")||x.includes("hentai")||x.includes("yuri")||x.includes("lewds")||x.includes("paizuri")||x.includes("anal")||x.includes("pgif")||x.includes("ass")||x.includes("boobs")||x.includes("tits")||x.includes("anus")||x.includes("pussy")||x.includes("crotch")||x.includes("dick")||x.includes("cock")||x.includes("sex")||x.includes("xxx")||x.includes("porn")||x.includes("beastiality")||x.includes("xnx")||x.includes("neko")||x.includes("rule34")||x.includes("r34")||x.includes("orgasm")||x.includes("lesbian")||x.includes("gay")||x.includes("cum")||x.includes("sperm")||x.includes("rape")||x.includes("vagina")||x.includes("penis")||x.includes("pp")||x.includes("neto")||x.includes("creampie")){document.getElementById("alert").style.display="block";document.getElementById("s-engine").innerHTML="Xoppy";document.getElementById("alert-msg").innerHTML="To search for sensitive content please turn off the safesearch setting.";document.getElementById("GeekerMagazine").action="https://xopbot.glitch.me/";}}else{s.style.display="block";del.style.display="none";var zcon=document.getElementById("search-after").value;var d1=document.getElementById("s-data-2");var d2=document.getElementById("s-data-3");var d3=document.getElementById("s-data-4");var d4=document.getElementById("s-data-5");setTimeout(()=>{s.style.display="none";del.style.display="block";},120000);document.getElementById("s-data-1").innerHTML=zcon;if(zcon.length<4){document.getElementById("s-data-1").innerHTML=zcon+"&nbsp"+"&nbsp"+"(You need to have more than 4 characters)";}
if(zcon.length<1){document.getElementById("s-data-1").innerHTML="Please type something to search.";d1.innerHTML="Suggestion 1";d2.innerHTML="Suggestion 2";d3.innerHTML="Suggestion 3";d4.innerHTML="Suggestion 4"}
if(zcon.startsWith("a")){var l1=["Apple","Async","Alphabet","Astronaunt","Axel F"];var l2=["Ac/Dc","Amy Adams","Amal Clooney","Alexander The Great","Adam Sandler"];var l3=["Audi","Alfa Romeo","Aston Martin","Alpine","Arrival"];var l4=["Avocado","Almonds","Angus Beef","Apple Pie","Americano Coffee"];var ent1=Math.floor(Math.random()*l1.length);d1.innerHTML=l1[ent1];var ent2=Math.floor(Math.random()*l2.length);d2.innerHTML=l2[ent2];var ent3=Math.floor(Math.random()*l3.length);d3.innerHTML=l3[ent3];var ent4=Math.floor(Math.random()*l4.length);d4.innerHTML=l4[ent4];}else if(zcon.startsWith("b")){var l1=["Banana","Break","Bungie","Banker","Booger T"];var l2=["Beatles","Ben Affleck","Bobby Brown","Booboo Stewart","Brooke Burker"];var l3=["BMW","Bentley","Bugatti","Brammo","Bowler"];var l4=["Beans","Baguette","Beef","Blueberry Pie","Brazilian Coffee"];var ent1=Math.floor(Math.random()*l1.length);d1.innerHTML=l1[ent1];var ent2=Math.floor(Math.random()*l2.length);d2.innerHTML=l2[ent2];var ent3=Math.floor(Math.random()*l3.length);d3.innerHTML=l3[ent3];var ent4=Math.floor(Math.random()*l4.length);d4.innerHTML=l4[ent4];}else if(zcon.startsWith("c")){var l1=["Cheeries","Clear","Chase Bank","Chairman","Chris da rapper"];var l2=["Calexico","Chace Crawford","Camila Cabello","Chelsea Clinton","Cher"];var l3=["Cadillac","Citroen","Chevrolet","Chery","Canoo"];var l4=["Coconut","Cabbage","Corn","Cheerie Pie","Colombian Coffee"];var ent1=Math.floor(Math.random()*l1.length);d1.innerHTML=l1[ent1];var ent2=Math.floor(Math.random()*l2.length);d2.innerHTML=l2[ent2];var ent3=Math.floor(Math.random()*l3.length);d3.innerHTML=l3[ent3];var ent4=Math.floor(Math.random()*l4.length);d4.innerHTML=l4[ent4];}
if(zcon.includes("gore")||zcon.includes("nsfw")||zcon.includes("hentai")||zcon.includes("yuri")||zcon.includes("lewds")||zcon.includes("paizuri")||zcon.includes("anal")||zcon.includes("pgif")||zcon.includes("ass")||zcon.includes("boobs")||zcon.includes("tits")||zcon.includes("anus")||zcon.includes("pussy")||zcon.includes("crotch")||zcon.includes("dick")||zcon.includes("cock")||zcon.includes("sex")||zcon.includes("xxx")||zcon.includes("porn")||zcon.includes("beastiality")||zcon.includes("xnx")||zcon.includes("neko")||zcon.includes("rule34")||zcon.includes("r34")||zcon.includes("orgasm")||zcon.includes("lesbian")||zcon.includes("gay")||zcon.includes("cum")||zcon.includes("sperm")||zcon.includes("rape")||zcon.zconincludes("vagina")||zcon.includes("penis")||zcon.includes("pp")||zcon.includes("neto")||zcon.includes("creampie")){document.getElementById("s-engine").innerHTML="Xoppy";document.getElementById("s-data-1").innerHTML="To search for sensitive content please turn off the safesearch setting.";document.getElementById("GeekerMagazine1").action="https://xopbot.glitch.me/";}}}
function geng(){document.getElementById("s-engine").innerHTML="Google";document.getElementById("data-eng-1").style.border="2px solid red";document.getElementById("GeekerMagazine1").action="https://www.google.com/search";}
function feng(){document.getElementById("s-engine").innerHTML="Firefox";document.getElementById("data-eng-2").style.border="2px solid red";document.getElementById("GeekerMagazine1").action="https://www.firefox.com/search";}
function ceng(){document.getElementById("s-engine").innerHTML="Yahoo";document.getElementById("data-eng-3").style.border="2px solid red";document.getElementById("GeekerMagazine1").action=" https://us.search.yahoo.com/search";}
function eeng(){document.getElementById("s-engine").innerHTML="Edge";document.getElementById("data-eng-4").style.border="2px solid red";document.getElementById("GeekerMagazine1").action="https://www.bing.com/search";}