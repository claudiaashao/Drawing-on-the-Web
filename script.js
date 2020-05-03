const record = document.querySelector('.record');
const plane = document.querySelector('.plane');
const cactus = document.querySelector('.cactus');

const recordAudio = document.querySelector('.record-audio');
const planeAudio = document.querySelector('.plane-audio');
const cactusAudio = document.querySelector('.cactus-audio');

function recordAudioPlay(){
    recordAudio.play();
}

function recordAudioPause(){
    recordAudio.pause();
}

function planeAudioPlay(){
    planeAudio.play();
}

function planeAudioPause(){
    planeAudio.pause();
}

function cactusAudioPlay(){
    cactusAudio.play();
}

function cactusAudioPause(){
    cactusAudio.pause();
}

record.addEventListener("mouseover", recordAudioPlay);
record.addEventListener("mouseout", recordAudioPause);
plane.addEventListener("mouseover", planeAudioPlay);
plane.addEventListener("mouseout", planeAudioPause);

cactus.addEventListener("mouseover", cactusAudioPlay);
cactus.addEventListener("mouseout", cactusAudioPause);
