// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;
let count = 0;

function check() {
    // your code here.
    count++;
    let guess = document.querySelector('#guess').value;
    guess = Number(guess);
    if(guess === secret){
        console.log('you win');
        document.querySelector('#message').innerHTML = 'YOU WIN'
        document.querySelector('#num-guesses').innerHTML = 'how did it take you ' + count + ' guesses??'
        document.querySelector('#celebrate').className = '';
    } else if (guess < secret) {
        console.log('too low');
        document.querySelector('#message').innerHTML = 'TOO LOW'
    } else if (guess > secret) {
        console.log('too high');
        document.querySelector('#message').innerHTML = 'TOO HIGH'

    }
}