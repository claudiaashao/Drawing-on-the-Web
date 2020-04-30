const filter = document.querySelector('.dark-filter');
const sky = document.querySelector('.sky');
const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');
const indicator = document.querySelector('.hover-indicator');
const bg = document.querySelector('.rain');
const clouds = document.querySelector('.clouds');
const chair = document.querySelectorAll('.chair');

x1 = 700;
x2 = 800;
dx1 = 0.7;
dx2 = 2;

//get current time
function getTime(){
    let today = new Date();
    let hours = today.getHours();
    let seconds = today.getSeconds();
    colorChange(hours);
    skyColor(seconds);
}

//change color based on current minute and second
function colorChange(hours){
    let opacity = Math.abs(12-hours)/10 - 0.4;
    filter.style.opacity = opacity;
    filter.style.transition = "1s ease";
}

function skyColor(seconds){
    let rColor = 100 + Math.random()*100;
    let gColor = 100 + Math.abs(30-seconds)*4;
    let bColor = 186;

    sky.style.fill="rgb(" + rColor + "," + gColor + "," + bColor + ")";
    sky.style.transition = "all 3s ease";
}

function moveClouds(){
    requestAnimationFrame(moveClouds);
    if (x1 < 0){
        x1 = 900;
    }

    if (x2 < 0){
        x2 = 800;
    }
    x1 -= dx1;
    x2 -= dx2;

    cloud1.style.left=x1 + "px";
    cloud2.style.left=x2 + "px";
}

function blendmode(){
    cloud1.style.mixBlendMode = "hard-light";
    cloud2.style.mixBlendMode = "hard-light";
    bg.style.opacity = 1;
    clouds.style.opacity = 1;
    chair[0].style.opacity = 0;
    chair[1].style.opacity = 0;
    chair[2].style.opacity = 0;

}
function normal(){
    cloud1.style.mixBlendMode = "normal";
    cloud2.style.mixBlendMode = "normal";
    bg.style.opacity = 0;
    clouds.style.opacity = 0;
    chair[0].style.opacity = 1;
    chair[1].style.opacity = 1;
    chair[2].style.opacity = 1;
}


setInterval(getTime, 1000);
moveClouds();
indicator.addEventListener("mouseover", blendmode);
indicator.addEventListener("mouseout", normal);