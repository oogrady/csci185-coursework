let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    if (ev.code == 'w') {
        console.log('up arrow!');
        y -= 2;
    } else if (ev.code == 's') {
        console.log('down arrow!');
        y += 2;
    } else if (ev.code == 'a') {
        console.log('left arrow!');
        x -= 2;
    } else if (ev.code == 'd') {
        console.log('right arrow!');
        x += 2;
    }
    // redraw circle:
    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
