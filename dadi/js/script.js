// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const generateBtn = document.getElementById("generate-number");
const resultGame = document.getElementById("result");
console.log(resultGame);

generateBtn.addEventListener("click",
    function() {

        let randomUserNumber = Math.floor(Math.random() * 6) + 1;
        document.getElementById("user-number").innerHTML = randomUserNumber;


        let randomPcNumber = Math.floor(Math.random() * 6) + 1;
        document.getElementById("pc-number").innerHTML = randomPcNumber;

        if ( randomUserNumber > randomPcNumber ) {
            document.getElementById("result").innerHTML = "Hai Vinto!"
            resultGame.classList.remove("green","blue","red");
            resultGame.classList.add("green");

        }   else if ( randomUserNumber === randomPcNumber ) {
            document.getElementById("result").innerHTML = "Pareggio!"
            resultGame.classList.remove("green","blue","red");
            resultGame.classList.add("blue");
            
        }   else {   
            document.getElementById("result").innerHTML = "Hai Perso!"
            resultGame.classList.remove("green","blue","red");
            resultGame.classList.add("red");
        }

    }   
)