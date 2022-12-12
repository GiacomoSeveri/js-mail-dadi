const diceRoll = document.getElementById('dice');
const cBtn = document.getElementById('btn-casual');
const dOne = document.getElementById('dice-1');
const dTwo = document.getElementById('dice-2');
const gg = document.getElementById('winner');

let randomOne = '';
let randomTwo = '';

cBtn.addEventListener('click', function(){
    randomOne = Math.floor(Math.random() * 6) + 1;
    // console.log(randomOne);
    
    dOne.innerText = `Il primo numero è ${randomOne}`;

    randomTwo = Math.floor(Math.random() * 6) + 1;
    // console.log(randomTwo);

    dTwo.innerText = `Il secondo numero è ${randomTwo}`;

    if (randomOne < randomTwo) {
        gg.innerText = `Il vincitore è ${randomTwo} COMPLIMENTI!`;
    } else if (randomOne > randomTwo) {
        gg.innerText = `Il vincitore è ${randomOne} COMPLIMENTI!`;
    } else if (randomOne === randomTwo) {
        gg.innerText = 'Pareggio, sarà per la prossima.';
    }
    
});