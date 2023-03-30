var video;

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
	console.log(video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9; 
	console.log(video.playbackRate)
});

document.getElementById('player1').onended = function(){video.currentTime = 0
console.log(video.currentTime)};

document.querySelector("#skip").addEventListener("click", function () {
	video.currentTime += 10;
});


