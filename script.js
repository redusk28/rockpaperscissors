// make a function where the CPU picks a number between 1-3 at random
// create conditions where 1 - rock , 2 = paper , 3 = scissors
// make sure function returns the value 
//



function getComputerChoice(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

let randomChoice = getComputerChoice(1,3)
let playerRoll = prompt("Pick rock, paper, or scissors,","")
let pcRoll;
if (randomChoice === 1) {
    pcRoll = "rock"
    
} else if (randomChoice === 2) {
    pcRoll = "paper";
    
} else {
    pcRoll = "Scissors";
    
}

console.log(playerRoll);
console.log(pcRoll);