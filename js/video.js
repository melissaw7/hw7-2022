var video;
var volume_value;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.createElement('video');
	video = document.getElementById('player1');
	video.removeAttribute('autoplay');
	console.log("got rid of autoplay")
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.getElementById('player1').removeAttribute("loop");
	console.log("got rid of loop")

});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Slow down video")
	console.log("Speed is ", video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9; 
	console.log("Speed down video")
	console.log("Speed is ", video.playbackRate)
});

document.getElementById('player1').onended = function(){video.currentTime = 0
console.log(video.currentTime)};

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10;
	console.log("Skip ahead")
	console.log("Video current time is ", video.currentTime)
});

var isMuted = false;
document.querySelector("#mute").addEventListener("click", function () {
	if (isMuted === false){
		video.muted = true;
		isMuted = true;
		document.getElementById('mute').innerHTML = "Unmute";
		console.log("Muted");
	}
	else{
		video.muted = false;
		isMuted = false;
		document.getElementById('mute').innerHTML = "Mute";
		console.log("Unmuted")
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100) + '%';
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add('oldSchool');
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
})
