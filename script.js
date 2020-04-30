const record = document.querySelector('.record');
const plane = document.querySelector('.plane');
const cactus = document.querySelector('.cactus');

const recordAudio = document.querySelector('.record-audio');
const planeAudio = document.querySelector('.plane-audio');

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

record.addEventListener("mouseover", recordAudioPlay);
record.addEventListener("mouseout", recordAudioPause);
plane.addEventListener("mouseover", planeAudioPlay);
plane.addEventListener("mouseout", planeAudioPause);
