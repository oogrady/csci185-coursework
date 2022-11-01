const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
async function setup() {
    createCanvas(canvasWidth, canvasHeight); 
    let rando = Math.random() * 100;
    console.log(rando);
    rando = Math.random() * 490 + 10;
    console.log(rando);
    strokeWeight(0);
    fill('white');
    drawLandscape();    
    }
const bubbles = [];
let x = canvasWidth / 2;
let y = canvasHeight / 2 - 50;
let d = 50;
let color1 = 'hotpink';
let color2 = 'green';
const palette = [ '#78924e', '#924e78', '#4e7892', '#fffd82', '#ff9b71']; 
const b1 = {
    x: 400,
    y: 100,
    speed: 6,
    color1: 'blue',
    color2: 'green'
};
const b2 = {
    x: 100,
    y: 500,
    speed: 10,
    color1: 'green',
    color2: 'hotpink'
};
const b3 = {
    x: 1300,
    y: 100,
    speed: 2,
    color1: 'purple',
    color2: 'yellow'
};

function drawBack(x, y, color1, color2) {
  drawCreature(x, y, color1, color2)
}
function randInt(min, max) { 
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function displayMessage() {
    fill('black');
     textAlign(CENTER);
     textSize(16);
     text("Use WASD to move, spacebar to shoot, and 'h' to change colors.", canvasWidth/2, canvasHeight/2);
}
function drawLandscape(i=true){
    document.body.style.backgroundColor = "black";
    strokeWeight(3);
    stroke('0');
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
    }
    drawAsteroid(1000, 800, 200)
    drawAsteroid(300, 200, 100)
    drawAsteroid(1700, 400, 500)

}
function drawAsteroid(x, y, size) {
    fill('#454545');
    strokeWeight('0');
    stroke('0');
    circle(x, y, size);
    fill('#292929');
    circle(x-size/5, y-size/4, size/4)
    circle(x-size/7, y+size/6, size/7)
    circle(x+size/4, y-size/7, size/3)


}
function shoot() {
    const bubble = {
        x: x,
        y: y,
        d: 15,
        speed: 8
    }
    bubbles.push(bubble)
}
function draw() {
clear();
drawLandscape();
b1.y += b1.speed;
drawBack(b1.x, b1.y, b1.color1, b1.color2);
if (b1.y >= 2000){
 b1.y -= 2200;
 }
b2.y -= b2.speed;
drawBack(b2.x, b2.y, b2.color1, b2.color2);
 if (b2.y <= -100){
      b2.y += 2200;
}
b3.y -= b3.speed;
drawBack(b3.x, b3.y, b3.color1, b3.color2);
 if (b3.y <= -100){
      b3.y += 2200;
}
for (const bubble of bubbles) {
    circle(bubble.x, bubble.y, bubble.d);
    bubble.x -= bubble.speed;
}
drawCreature(x, y, color1, color2);   
    displayMessage();
}
function drawCreature(x, y, color1, color2) {
    stroke(color1);
        strokeWeight(9);
        fill('black');
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
}
function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'KeyS') {
        y += 10;
    } else if (ev.code == 'KeyW') {
        y -= 10;
    } else if (ev.code == 'Space') {
        shoot();
    } else if (ev.code == 'KeyD') {
        x += 10;
    } else if (ev.code == 'KeyA') {
        x -= 10;
    } else if (ev.code == 'ArrowUp') {
        y -= 10;
    } else if (ev.code == 'KeyH') {
        const idx = randInt(0, palette.length - 2);
        color1 = palette[idx];  
   displayMessage();
    }
}
document.addEventListener('keydown', moveController);

