
const video_player=document.querySelector('#video_player'),mainVideo=video_player.querySelector('#main-video'),progressAreaTime=video_player.querySelector('.progressAreaTime'),controls=video_player.querySelector('.controls'),progressArea=video_player.querySelector('.progress-area'),progress_Bar=video_player.querySelector('.progress-bar'),fast_rewind=video_player.querySelector('.fast-rewind'),play_pause=video_player.querySelector('.play_pause'),fast_forward=video_player.querySelector('.fast-forward'),volume=video_player.querySelector('.volume'),volume_range=video_player.querySelector('.volume_range'),current=video_player.querySelector('.current'),totalDuration=video_player.querySelector('.duration'),auto_play=video_player.querySelector('.auto-play'),settingsBtn=video_player.querySelector('.settingsBtn'),picture_in_picutre=video_player.querySelector('.picture_in_picutre'),fullscreen=video_player.querySelector('.fullscreen'),settings=video_player.querySelector('#settings'),playback=video_player.querySelectorAll('.playback li');function playVideo(){play_pause.innerHTML="pause";play_pause.title="Pause";video_player.classList.add('paused')
mainVideo.play();}
function pauseVideo(){play_pause.innerHTML="play_arrow";play_pause.title="Play";video_player.classList.remove('paused')
mainVideo.pause();}
play_pause.addEventListener('click',()=>{const isVideoPaused=video_player.classList.contains('paused');isVideoPaused?pauseVideo():playVideo();})
mainVideo.addEventListener('play',()=>{playVideo();})
mainVideo.addEventListener('pause',()=>{pauseVideo();})
fast_rewind.addEventListener('click',()=>{mainVideo.currentTime-=10;})
fast_forward.addEventListener('click',()=>{mainVideo.currentTime+=10;})
mainVideo.addEventListener("loadeddata",(e)=>{let videoDuration=e.target.duration;let totalMin=Math.floor(videoDuration/60);let totalSec=Math.floor(videoDuration%60);totalSec<10?totalSec="0"+totalSec:totalSec;totalDuration.innerHTML=`${totalMin}:${totalSec}`;})
mainVideo.addEventListener('timeupdate',(e)=>{let currentVideoTime=e.target.currentTime;let currentMin=Math.floor(currentVideoTime/60);let currentSec=Math.floor(currentVideoTime%60);currentSec<10?currentSec="0"+currentSec:currentSec;current.innerHTML=`${currentMin}:${currentSec}`;let videoDuration=e.target.duration
let progressWidth=(currentVideoTime/videoDuration)*100;progress_Bar.style.width=`${progressWidth}%`;})
progressArea.addEventListener('click',(e)=>{let videoDuration=mainVideo.duration;let progressWidthval=progressArea.clientWidth;let ClickOffsetX=e.offsetX;mainVideo.currentTime=(ClickOffsetX/progressWidthval)*videoDuration;})
function changeVolume(){mainVideo.volume=volume_range.value/100;if(volume_range.value==0){volume.innerHTML="volume_off";}else if(volume_range.value<40){volume.innerHTML="volume_down";}else{volume.innerHTML="volume_up";}}
function muteVolume(){if(volume_range.value==0){volume_range.value=80;mainVideo.volume=0.8;volume.innerHTML="volume_up";}else{volume_range.value=0;mainVideo.volume=0;volume.innerHTML="volume_off";}}
volume_range.addEventListener('change',()=>{changeVolume();})
volume.addEventListener('click',()=>{muteVolume();})
progressArea.addEventListener('mousemove',(e)=>{let progressWidthval=progressArea.clientWidth;let x=e.offsetX;progressAreaTime.style.setProperty('--x',`${x}px`);progressAreaTime.style.display="block";let videoDuration=mainVideo.duration;let progressTime=Math.floor((x/progressWidthval)*videoDuration);let currentMin=Math.floor(progressTime/60);let currentSec=Math.floor(progressTime%60);currentSec<10?currentSec="0"+currentSec:currentSec;progressAreaTime.innerHTML=`${currentMin}:${currentSec}`;})
progressArea.addEventListener('mouseleave',()=>{progressAreaTime.style.display="none";})
auto_play.addEventListener('click',()=>{auto_play.classList.toggle('active')
if(auto_play.classList.contains('active')){auto_play.title="Autoplay Is On";}else{auto_play.title="Autoplay Is Off";}});mainVideo.addEventListener("ended",()=>{if(auto_play.classList.contains('active')){playVideo();}else{play_pause.innerHTML="replay";play_pause.title="Replay";}});picture_in_picutre.addEventListener('click',()=>{mainVideo.requestPictureInPicture();})
fullscreen.addEventListener('click',()=>{if(!video_player.classList.contains('openFullScreen')){video_player.classList.add('openFullScreen');fullscreen.innerHTML="fullscreen_exit";fullscreen.title="Open / Exit";video_player.requestFullscreen();}else{video_player.classList.remove('openFullScreen');fullscreen.innerHTML="fullscreen";document.exitFullscreen();}});settingsBtn.addEventListener('click',()=>{settings.classList.toggle('active');settingsBtn.classList.toggle('active');settings.title="Open / Close";})
playback.forEach((event)=>{event.addEventListener('click',()=>{removeActiveClasses();event.classList.add('active');let speed=event.getAttribute('data-speed');mainVideo.playbackRate=speed;})})
function removeActiveClasses(){playback.forEach(event=>{event.classList.remove('active')});}
window.addEventListener('unload',()=>{let setDuration=localStorage.setItem('duration',`${mainVideo.currentTime}`);let setSrc=localStorage.setItem('src',`${mainVideo.getAttribute('src')}`);})
window.addEventListener('load',()=>{let getDuration=localStorage.getItem('duration');let getSrc=localStorage.getItem('src');if(getSrc){mainVideo.src=getSrc;mainVideo.currentTime=getDuration;}})
mainVideo.addEventListener('contextmenu',(e)=>{e.preventDefault();})
video_player.addEventListener('mouseover',()=>{controls.classList.add('active');})
video_player.addEventListener('mouseleave',()=>{if(video_player.classList.contains('paused')){if(settingsBtn.classList.contains('active')){controls.classList.add('active');}else{controls.classList.remove('active')}}else{controls.classList.add('active')}})
if(video_player.classList.contains('paused')){if(settingsBtn.classList.contains('active')){controls.classList.add('active');}else{controls.classList.remove('active')}}else{controls.classList.add('active')}
video_player.addEventListener('touchstart',()=>{controls.classList.add('active');setTimeout(()=>{controls.classList.remove('active')},8000);})
video_player.addEventListener('touchmove',()=>{if(video_player.classList.contains('paused')){controls.classList.remove('active')}else{controls.classList.add('active')}})