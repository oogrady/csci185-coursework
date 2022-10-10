const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let color = 'black';

function draw() {
    // frameRate(1);
    clear();


    if (x >= 500-width*.5 && x <= 500-width*.5) {
        speed = speed*-1;
        // width = width+2;
    }
  

    if (x <= 150+width*.5) {
        speed = speed*-1;
        // width = width+2;

    }
  



    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill(color);
    circle(x, canvasHeight/2, width);
    x += speed;
    // console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}


const changeBallColor = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyR') {
        color = 'red';
    }
    if (ev.code == 'KeyP') {
        color = 'purple';
    }
    if (ev.code == 'Space') {
        x += 80;
    }
    if (ev.code == 'KeyU') {
        speed = speed * -1;
    }
    if (ev.code == 'ShiftLeft') {
        speed = speed * 2;
    }
    if (ev.code == 'ControlLeft') {
        speed = speed * .5;
    }
}

document.addEventListener('keydown', changeBallColor);