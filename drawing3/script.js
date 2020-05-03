const water = document.querySelector('.water');
const indicator = document.querySelector('img');
const cactusColor = document.querySelector('.cactus-bg');
const gif = document.querySelector('span');

let x = -250;
let opacity = 1;

let animation;

let level = 51;

function startAnimation(){
    level += 10;

    cancelAnimationFrame(animation);
    x=-250;
    animation = requestAnimationFrame(fall);

    if (level >=100){
        alert("please don't over water your plant!");
        level=100;
    };
}

function fall (){
    animation = requestAnimationFrame(fall);

    opacity = (window.innerHeight/2 - x)/window.innerHeight;

    water.style.top = x + "px";
    water.style.opacity = opacity;

    x+=4;
}

function levelChange(){
    requestAnimationFrame(levelChange);
    level-=0.01;
}

function cactusbgChange(){
    requestAnimationFrame(cactusbgChange);
    if (level <= 100 && level >70){
        cactusColor.style.fill = "#1c8960";
        cactusColor.style.transition = "all 3s ease";
    }else if (level<=70 && level>50){
        cactusColor.style.fill = "#59964b";
        cactusColor.style.transition = "all 3s ease";
    }else if (level<=50 && level>30){
        cactusColor.style.fill = "#939946";
        cactusColor.style.transition = "all 3s ease";
    }else{
        cactusColor.style.fill = "#757260";
        cactusColor.style.transition = "all 3s ease";
        alert("your plant died... please refresh the page.");
    }
}

function showgif (){
    gif.style.opacity = 0.5;
    gif.style.transition = "all 1s ease";
}

function hidegif (){
    gif.style.opacity = 0;
    gif.style.transition = "all 1s ease";
}

indicator.addEventListener("click", startAnimation);
indicator.addEventListener("mouseover", showgif);
indicator.addEventListener("mouseout", hidegif);
window.addEventListener("load", cactusbgChange);
window.addEventListener("load", levelChange);