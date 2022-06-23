console.log("page loaded...");

var x = document.getElementById("video-player")

function enableMute() {
    x.muted = true;
}

function playVid() {
    x.play ();
}

function pauseVid() {
    x.pause ();
}
