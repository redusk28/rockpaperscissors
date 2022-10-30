let playerSelection;
let computerSelection;
let computerCount = 0;
let playerCount = 0;

buttons = document.getElementById('choices');
const displayResult = function (message) {
  document.querySelector('.rounddecision').textContent = message;
};

// --------------------------------------------
function getComputerChoice(min, max) {
  let choice = Math.floor(Math.random() * (max - min + 1) + min);
  if (choice === 1) {
    computerSelection = 'rock';
  } else if (choice === 2) {
    computerSelection = 'paper';
  } else if (choice === 3) {
    computerSelection = 'scissors';
  }
  return computerSelection;
}

function playRound() {
  computerSelection = getComputerChoice(1, 3);

  if (playerSelection === 'rock' && computerSelection === 'rock') {
    roundDecision = 'Draw! 🪨 vs. 🪨';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    roundDecision = 'You lose! Computer picks 🧻';
    computerCount = computerCount + 1;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    roundDecision = 'You win! Computer picks ✄';
    playerCount = playerCount + 1;
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    roundDecision = 'You win! Computer picks 🪨';
    playerCount = playerCount + 1;
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    roundDecision = 'Draw! 🧻 vs. 🧻';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    roundDecision = 'You lose! Computer picks ✄';
    computerCount = computerCount + 1;
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    roundDecision = 'You Lose! Computer picks 🪨';
    computerCount = computerCount + 1;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    roundDecision = 'You Win! Computer picks 🧻';
    playerCount = playerCount + 1;
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    roundDecision = 'Draw! ✄ vs. ✄';
  }
  return (
    roundDecision,
    playerSelection,
    computerSelection,
    playerCount,
    computerCount
  );
}

buttons.addEventListener('click', event => {
  playerSelection = event.target.id;
  playRound(playerSelection, computerSelection);

  if (playerCount === 5) {
    roundDecision = 'congrats, You beat the computer! 🏆 ';
  } else if (computerCount === 5) {
    roundDecision = 'You have lost to the computer.. Try again ❌';
  }
  displayResult(roundDecision);
  document.querySelector('.playerscore').textContent = playerCount;
  document.querySelector('.computerscore').textContent = computerCount;

  document.querySelector('.reset').addEventListener('click', function () {
    playerCount = 0;
    computerCount = 0;
    document.querySelector('.playerscore').textContent = playerCount;
    document.querySelector('.computerscore').textContent = computerCount;
    document.querySelector('.rounddecision').textContent =
      'Prepare to play a first to five against the computer!';
  });
});
