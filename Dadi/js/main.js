/*
1-Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    -Math.floor( Math.random() * 6 ) + 1
2-Stabilire il vincitore, in base a chi fa il punteggio più alto.
    -
*/

let dadoUtente = Math.floor( Math.random() * 6 ) + 1;
let dadoComputer = Math.floor( Math.random() * 6 ) + 1;

//risultato dadi
document.querySelector('#dado1').innerHTML = dadoUtente;
document.querySelector('#dado2').innerHTML = dadoComputer;


let createP = document.querySelector('#esito');
let p = document.createElement('p');
p.className = "text-center fs-5 bg-body-tertiary p-2 rounded mt-4"

//risultato vincitore
if(dadoUtente > dadoComputer){
    p.innerHTML = 'Bravo, hai vinto contro il computer!'
    createP.append(p);

}else if(dadoComputer > dadoUtente){
    p.innerHTML = 'Mi dispiace, ha vinto il computer!'
    createP.append(p);

}else{
    p.innerHTML = 'Hai fatto lo stesso punteggio del computer!'
    createP.append(p);
}


