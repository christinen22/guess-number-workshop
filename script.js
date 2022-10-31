/*
function guessNumber() {
const trueNumber = '7';
const restartNumber = '0';
let number = (prompt('Guess a number from 1 to 10: '));
while (number !== trueNumber && number !== restartNumber && number !== null) {
number = (prompt('Wrong guess, try again: '));
}
if (number == restartNumber || null) {
return;
}
else if (number == trueNumber) {
alert('You guessed the correct number.');
}
}
guessNumber();

*/




function guessNumber() {
    const trueNumber = 7;
    const restartNumber = 0;
    let number = parseInt(prompt('Guess a number from 1 to 10: '));
    while (number !== trueNumber && number !== restartNumber && number !== null) {
    number = parseInt(prompt('Wrong guess, try again: '));
    
    if (number > trueNumber) {
        alert("Too high");
    }
    else if (number < trueNumber) {
        alert("Too low");
    } }
    if (number == restartNumber || null) {
    return;
    }
    else if (number == trueNumber) {
    alert('You guessed the correct number.');
    }
    }
    guessNumber();
    
    
    