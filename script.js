/// to do list : make it so that during the five rounds played, a new rock paper or scissor are asked instead of using the inital input for all 5 rounds. 


let computerSelection;
let roundDecision;

function getComputerChoice(min,max) {
    let choice = Math.floor(Math.random() * (max - min + 1) + min);
        if (choice === 1){
            computerSelection = "rock"
        } else if (choice === 2){
            computerSelection = "paper"
        } else if (choice === 3){
            computerSelection = "scissors"
        }
        return computerSelection;
}




let answer = prompt('Enter your choice of rock, paper, or scissors.',"");
let playerSelection = answer.toLowerCase();

let computerCount = 0;
let playerCount = 0;

function playRound(playerSelection,computerSelection) {
  computerSelection = getComputerChoice(1,3);
  
    if ( playerSelection === "rock" && computerSelection ==="rock"){
        roundDecision = "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        roundDecision = "You lose!";
        computerCount = computerCount + 1;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        roundDecision = "You win!";
        playerCount = playerCount + 1;
    }
    if ( playerSelection === "paper" && computerSelection ==="rock"){
        roundDecision = "You win!";
        playerCount = playerCount + 1;
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        roundDecision = "Draw!";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        roundDecision = "You lose!"
        computerCount = computerCount +1;
    }
    if ( playerSelection === "scissors" && computerSelection ==="rock"){
        roundDecision = "You Lose!";
        computerCount = computerCount + 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        roundDecision = "You Win!";
        playerCount = playerCount + 1;
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        roundDecision = "Draw!"
    } 
    return roundDecision,playerSelection,computerSelection, playerCount, computerCount;
    
}



function game(){
  for (let i = 0; i < 5; i++) {
   
   playRound(playerSelection,computerSelection);
   
   console.log(playerSelection, computerSelection, roundDecision,playerCount,computerCount);
  }
  
  if (playerCount > computerCount) {
    console.log("congrats, you win!");
  } else if (computerCount > playerCount) {
    console.log("Sorry, you lose!") 
  } else {
    console.log("Wow, it's a draw!")
  }
 
  
  
}

game();





