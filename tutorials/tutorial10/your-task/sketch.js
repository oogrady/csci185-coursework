const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let color = 'white';
const bubbles = [];
let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
let d = 50;
let color1 = 'hotpink';
let color2 = 'green';
const palette = [ '#78924e', '#924e78', '#4e7892', '#fffd82', '#ff9b71'];
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // circle(x, y, 50);

    displayMessage();
}
function randInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Use the arrows to move, spacebar to shoot, and 'h' to change colors.", canvasWidth/2, canvasHeight/2);
}
function shoot() {
    // 1. When you drag your mouse, create a bubble 
    //    object and add it to the "bubbles" list.
    const bubble = {
        x: x,
        y: y,
        d: 15,
        speed: 15
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
        circle(x, y, 80*.4);
        fill(color2);
        circle(x, y, 80*.1);
 

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
    } else if (ev.code == 'ArrowRight') {
        x += 8;
    } else if (ev.code == 'ArrowLeft') {
        x -= 8;
    } else if (ev.code == 'ArrowUp') {
        y -= 8;
    } else if (ev.code == 'KeyH') {
        const idx = randInt(0, palette.length - 2);
        color1 = palette[idx];

    
    // message
   displayMessage();
}



// Add event listener on keydown
document.addEventListener('keydown', moveController);
}