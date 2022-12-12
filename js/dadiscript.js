// 1 prendo gli elementi
// 2 aggiungo addeventlistener al btn
// 3 creo 2 numeri casuali
// 4 li stampo in pagina
// 5 verifico quale è il piu grande
// 6stampo in pagia l'esito della sfida

// 1
const diceRoll = document.getElementById('dice');
const cBtn = document.getElementById('btn-casual');
const dOne = document.getElementById('dice-1');
const dTwo = document.getElementById('dice-2');
const gg = document.getElementById('winner');

let randomOne = '';
let randomTwo = '';

// 2
cBtn.addEventListener('click', function(){

    // 3
    randomOne = Math.floor(Math.random() * 6) + 1;
    // console.log(randomOne);

    dOne.innerText = `Il primo numero è ${randomOne}`;

    // 3
    randomTwo = Math.floor(Math.random() * 6) + 1;
    // console.log(randomTwo);
    dTwo.innerText = `Il secondo numero è ${randomTwo}`;

    // 4
    if (randomOne < randomTwo) {
        // 5
        gg.innerText = `Il vincitore è ${randomTwo}, COMPLIMENTI!`;
    } else if (randomOne > randomTwo) {
        // 5
        gg.innerText = `Il vincitore è ${randomOne}, COMPLIMENTI!`;
    } else if (randomOne === randomTwo) {
        // 5
        gg.innerText = 'Pareggio, sarà per la prossima.';
    }
    
});