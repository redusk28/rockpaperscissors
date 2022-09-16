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

getComputerChoice(1,3);


let answer = prompt('Enter your choice of rock, paper, or scissors.',"");
let playerSelection = answer.toLowerCase();

function playRound(playerSelection,computerSelection) {
    if ( playerSelection === "rock" && computerSelection ==="rock"){
        roundDecision = "Draw!";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        roundDecision = "You lose!";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        roundDecision = "You win!"
    }
    if ( playerSelection === "paper" && computerSelection ==="rock"){
        roundDecision = "You win!";
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        roundDecision = "Draw!";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        roundDecision = "You lose!"
    }
    if ( playerSelection === "scissors" && computerSelection ==="rock"){
        roundDecision = "You Lose!";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        roundDecision = "You Win!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        roundDecision = "Draw!"
    } else {
        alert("Please enter rock, paper, or scissors.")
    }

    return roundDecision;
}

function game(){
    for(let i = 0; i= 5; i++){
        console.log(playRound(playerSelection,computerSelection));
        
    }
}