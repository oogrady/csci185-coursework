const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    drawElmo(100, 100, 150, '#0bc9cd', true);
    drawElmo(300, 200, 75, '#0bc9cd', false);
    drawElmo(100, 325, 100, '#8093f1', false);
    drawElmo(250, 375, 125, '#7fb285', true);
    drawElmo(550, 200, 250, '#102e4a', true);

    drawGrid(canvasWidth, canvasHeight);
}


function drawElmo(x, y, size, color, hasNose){
    fill(color);
    circle(x, y, size);
    fill('white');
    circle(x-(size/8), y-(size/8), size/4.5);
    circle(x+(size/8), y-(size/8), size/4.5);
    fill('black');
    circle(x-(size/8), y-(size/8), size/16);
    circle(x+(size/8), y-(size/8), size/16);
    if(hasNose == true) {
        fill('#db5461');
        ellipse(x, y+(size/16), size/4, size/2.5);
    } else (hasNose == false); {
}
}
