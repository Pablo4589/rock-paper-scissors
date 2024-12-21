let humanScore = 0

let computerScore = 0

   

function getComputerChoice() {
    
    const numero= Math.random()

    const computerChoice = ["rock", "paper", "scissors"];

    if(numero <= 0.3333){

    
        return computerChoice[0];
    }
   
    else if (numero <= 0.6666) {
    
         return computerChoice[1];
    }

    else {
            return computerChoice[2];
         }

    }


function getHumanChoice() {
            
    const options = ["paper", "rock", "scissors"];
    

    
    let humanChoice = prompt("Choose between paper, rock or scissors: ");
       
    humanChoice.toLowerCase();
        
          return humanChoice;
        }

        
function playRound() {
              

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();



    if (humanSelection===computerSelection) {
                   
     return "It's a tie!"}

        else if  (
       
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")){
            humanScore++;
            return "You win!";}

        else if (
        (humanSelection === "rock" && computerSelection ===" paper") ||
        (humanSelection === "paper" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "rock")){
          computerScore++;
            return "You lost!";
        }
        else {
            return alert("You must choose between paper, rock or scissors");
            
            }}
        
function playGame() {
    for (let i = 0; i < 5; i++) {
    
         const result = playRound();
        
         console.log(result);
        }
              }
              
 




     
          
    
        




