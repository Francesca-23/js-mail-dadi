/*
1-Chiedi all’utente la sua email.
    -input
2-controlla che sia nella lista di chi può accedere.
    -array di email
    -ciclo per l'array
    -condizione if
3-stampa un messaggio appropriato sull’esito del controllo.
    -document.querySelector()
*/




function controlloMail(){
    
    //array emails
    let emails = [
        "pincopallo@gmail.com",
        "laurarossi@gmail.com",
        "costanzolibero@gmail.com",
        "anitacolombo@libero.it"
    ];

    //inserimento mail 
    let email = document.getElementById('emailCliente').value;

    let createP = document.querySelector('#container');
    let p = document.createElement('p');
    p.className = "text-center bg-info-subtle rounded p-2";


    let verifica = false;

    for(let i=0; i <= emails.length; i++){

        if(email == emails[i]){
            verifica = true;

        }else{
            
        }
    }


    //da sistemare
    if(verifica = true){
        p.innerHTML = "L'email è corretta";
        createP.append(p);

    }else{
        console.log(sbagliato)
    }
    
}



