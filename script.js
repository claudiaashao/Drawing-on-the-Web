const record = document.querySelector('.record');
const plane = document.querySelector('.plane');
const cactus = document.querySelector('.cactus');

const recordAudio = document.querySelector('.record-audio');
const planeAudio = document.querySelector('.plane-audio');
const cactusAudio = document.querySelector('.cactus-audio');

function recordAudioPlay(){
    recordAudio.play();
    record.style.filter = "drop-shadow(0 0 0.5rem #ff00d9)";
}

function recordAudioPause(){
    recordAudio.pause();
    record.style.filter = "drop-shadow(0 0 0 #ff00d9)";
}

function planeAudioPlay(){
    planeAudio.play();
    plane.style.filter = "drop-shadow(0 0 0.5rem #0ae2fa)";
}

function planeAudioPause(){
    planeAudio.pause();
    plane.style.filter = "drop-shadow(0 0 0 #0ae2fa)";
}

function cactusAudioPlay(){
    cactusAudio.play();
    cactus.style.filter = "drop-shadow(0 0 0.5rem #02f557)";
}

function cactusAudioPause(){
    cactusAudio.pause();
    cactus.style.filter = "drop-shadow(0 0 0 #02f557)";

}

record.addEventListener("mouseover", recordAudioPlay);
record.addEventListener("mouseout", recordAudioPause);
plane.addEventListener("mouseover", planeAudioPlay);
plane.addEventListener("mouseout", planeAudioPause);

cactus.addEventListener("mouseover", cactusAudioPlay);
cactus.addEventListener("mouseout", cactusAudioPause);
