const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let color = 'white';
const bubbles = [];
let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
let d = 50;
let color1 = 'hotpink';
let color2 = 'green';

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // circle(x, y, 50);

    displayMessage();
}

function shoot() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: x,
        y: y - 25,
        d: 8,
        speed: 10
    }
    bubbles.push(bubble)
}

function draw() {
    clear();
    // 2. loop through the bubbles list and draw / animate each bubble:
    for (const bubble of bubbles) {
        circle(bubble.x, bubble.y, bubble.d);
        bubble.x -= bubble.speed;
    }

    stroke(color1);
        strokeWeight(9);
        fill('nofill');
        curve(
            x, y-100,
            x, y,
            x+(80+10), y-12,
            x, y-500
        )
        fill(color2);
        rect(x+(80+10), y-12, 80*.1)
        fill(color1);
        strokeWeight(1);
        circle(x, y, 80*1.5);
        fill('white');
        stroke(color2);
        strokeWeight(2);
        circle(x-(x*.07), y, 80*.4);
        fill(color2);
        circle(x-(x*.07), y, 80*.1);
 

    // message:
    displayMessage();

}


function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowDown') {
        y += 8;
    } else if (ev.code == 'ArrowUp') {
        y -= 8;
    } else if (ev.code == 'Space') {
        shoot();
    }
    
    // message
   displayMessage();
}

function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
    //  text("Use the arrow keys to move the avatar, spacebar to shoot.", canvasWidth/2, canvasHeight/2);
}

// Add event listener on keydown
document.addEventListener('keydown', moveController);
