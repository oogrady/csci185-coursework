
const makeRed = () => {
    // your code here...
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = 'red';
};

const makeBlue = () => {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('body').style.backgroundColor = 'blue';
};

const makePink = () => {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('body').style.backgroundColor = 'pink';
};

const makeOrange = () => {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('body').style.backgroundColor = 'orange';
};
const makeARainbow = () => {
    // your code here...
    console.log('Change background to a rainbow');
    document.querySelector('#section1').style.backgroundColor =  'red';
    document.querySelector('#section2').style.backgroundColor =  'blue';
    document.querySelector('#section3').style.backgroundColor =  'pink';
    document.querySelector('#section4').style.backgroundColor =  'orange';
};
const makeClear = () => {
    // your code here...
    console.log('Change background to clear');
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('#section1').style.backgroundColor =  'white';
    document.querySelector('#section2').style.backgroundColor =  'white';
    document.querySelector('#section3').style.backgroundColor =  'white';
    document.querySelector('#section4').style.backgroundColor =  'white';
}
const makeRandom = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*1643233576345734673575635).toString(16);
    const randomColor3 = Math.floor(Math.random()*63477215).toString(16);
    const randomColor4 = Math.floor(Math.random()*17347215).toString(16);
    const randomColor5 = Math.floor(Math.random()*1687657215).toString(16);

    document.querySelector('body').style.backgroundColor = "#" + randomColor;
    document.querySelector('#section1').style.backgroundColor = "#" + randomColor2;
    document.querySelector('#section2').style.backgroundColor = "#" + randomColor3;
    document.querySelector('#section3').style.backgroundColor = "#" + randomColor4;
    document.querySelector('#section4').style.backgroundColor = "#" + randomColor5;
}
