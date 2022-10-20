const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: -100,
    y: 100,
    width: 200,
    speed: 4,
    color: 'hotpink'
};
const c2 = {
    x: 2100,
    y: 300,
    width: 200,
    speed: 8,
    color: 'green'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    clear();
    c1.x += c1.speed;
    drawCar(c1.x, c1.y, c1.width, c1.color);
    if (c1.x >= 2100){
        c1.x -= 2200;
    }
    c2.x -= c2.speed;
    drawCar(c2.x, c2.y, c2.width, c2.color);
   if (c2.x <= -100){
       c2.x += 2200;
   }
}
// function draw() {
//         clear();
//         // redraw the car:
//         drawCar(c2.x, c2.y, c2.width, c2.color);
//         // move the car:
//         c2.x += c2.speed;
       
   
//        if (c2.x >= -100){
//            c2.x += 2200;
//        }
// }




function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
