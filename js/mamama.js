const mailCons = ['prova1@gmail.com', 'prova2@gmail.it', 'prova3@gmail.eu'];

const emailField = document.getElementById('email');
const btn = document.getElementById('button');
const result = document.getElementById('result');

btn.addEventListener('click', function(){

    const userEmail = emailField.value.trim();

    if(!userEmail) {
        alert('non hai inserito nessuna Email');
        return;
    }

    let allow = false;

    for(let i = 0; i < mailCons.length; i++){

        const currentMail = mailCons[i]

        if(currentMail === userEmail){
            allow = true;
        }

    }

    result.innerText = allow ? 'Bentornato' : 'mail NON valida';
});

