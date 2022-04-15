// Mail

const listMail = ["paolo123@gmail.com","michele654@libero.it","salvatore321@hotmail.live"]

// Chiedi all’utente la sua email,
const userMail = prompt("dimmi la tua e-mail");
console.log("mail inserita", userMail);

// controlla che sia nella lista di chi può accedere,
let mailFound = false;
for (let i = 0; i < listMail.length; i++ ) {
    
    const thisListMail = listMail[i];

    if (thisListMail === userMail) {
        mailFound = true;
    }    
}


// OUTPUT             
// stampa un messaggio appropriato sull’esito del controllo.
if (mailFound) {
    alert("Adesso inserisci la password.");
}   else {
    alert("Non sei registrato a questo sito.");
}