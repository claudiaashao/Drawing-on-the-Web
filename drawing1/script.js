const flower = document.querySelectorAll('.sakura');
const disk = document.querySelectorAll('.disk');
const audio = document.querySelector('.lofi');
const diskhover = document.querySelector('span');

let frameX = 0;
let frameY = -50;
let dx = 2;
let dy = 3;

let scale = 1.5;
let deg = 0;
let direction = 1;

let animation = requestAnimationFrame(move);

function move(){
    animation = requestAnimationFrame(move);

    if( (frameX + dx +50 ) > window.innerWidth || (frameX + dx) < 0 ){
        dx = -dx;
    }
    if( (frameY + dy +50 ) > window.innerHeight|| (frameY + dy) < -50){
        dy = -dy;
    }

    frameX += dx;
    frameY += dy;

    for(i=0; i<=2; i++){
        flower[i].style.left = frameX + "px";
        flower[i].style.top = frameY + "px";
    }
}

function sakuraSize(){
    if(scale > 2.5 || scale < 1.5){
        direction *= -1;
    } 

    // if(scale > 360 || scale < 0){
    //     direction *= -1;
    // } 

    scale += 0.1 * direction;
    deg += 60;

    for(i=0; i<=2; i++){
        flower[i].style.transform = "rotate(" + deg + "deg)" + "scale(" + scale + ")";
        flower[i].style.transition = "transform 0.8s linear";
    }
}
setInterval(sakuraSize, 500);

function showSakura(){
    for(i=0; i<=2; i++){
        flower[i].style.mixBlendMode = "normal";
    }
}

function hideSakura(){
    for(i=0; i<=2; i++){
        flower[i].style.mixBlendMode = "overlay";
    }
}

diskhover.addEventListener("mouseover",showSakura);
diskhover.addEventListener("mouseout",hideSakura);

function playAudio(){
    audio.volume = 1;
    audio.play();
}

function pauseAudio(){
    vol=1;
    setInterval(fadeout, 300);
}

let vol = 1;

function fadeout() {
    if (vol > 0.10) {
      vol -= 0.10;
      audio.volume = vol;
      console.log(vol);
    }
    else {
      clearInterval(fadeout);
    }
}

diskhover.addEventListener('mouseover', playAudio);
diskhover.addEventListener('mouseout', pauseAudio);