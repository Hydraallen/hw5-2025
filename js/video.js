var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay);
    video.loop = false;
	console.log("Loop is set to " + video.loop);
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("Volume is set to " + video.volume * 100 + "%");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").textContent = video.volume * 100 + "%";
	console.log("Volume is set to " + video.volume * 100 + "%");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate -= 0.1;
    if (video.playbackRate < 0.1) {
        video.playbackRate = 0.1;
    }
    console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate += 0.1;
    console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
    console.log("Muted: " + video.muted);
});

document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100; 
    document.querySelector("#volume").textContent = video.volume * 100 + "%";
    console.log("Volume: " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
    console.log("Styled with oldSchool class");
});

document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
    console.log("Removed oldSchool class");
});