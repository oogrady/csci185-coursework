function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    // let y = 0;
    // while(y <= 700){
    // circle(100, y, 50);
    // y += 50;
    // }


    let size = 50
    let fillColor = red;
    while(size <= 7000){
        // if (size  >=0){
        //     if(fillColor == 'red'){
        //         fillColor = 'blue';
        //     } else {
        //         fillColor = 'red'
        //     }
        //     fill(fillColor);
        // }
    circle(700 , 300, size);
    size += 6;
  
    }
    let size2 = 50
    while(size2 <= 7000){
        // if (size  >=0){
        //     if(fillColor == 'red'){
        //         fillColor = 'blue';
        //     } else {
        //         fillColor = 'red'
        //     }
        //     fill(fillColor);
        // }
    circle(300 , 300, size2);
    size2 += 6;
    }
    let size3 = 50
    while(size3 <= 7000){
        // if (size  >=0){
        //     if(fillColor == 'red'){
        //         fillColor = 'blue';
        //     } else {
        //         fillColor = 'red'
        //     }
        //     fill(fillColor);
        // }
    circle(1100 , 300, size3);
    size3 += 6;
    }


    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // ci5cle(100, 350, 50);
    // circle(100, 400, 50);

    //6drawGrid(canvasWidth, canvasHeight);
}
