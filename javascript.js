// Two variables to track the score
let humanScore = 0;
let computerScore = 0;

// A function that randomly returns: "rock," "paper," or "scissors"
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else if (random === 3) {
    return "scissors";
  }
}

// This function asks the user to select "rock," "paper," or "scissors"
function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?", "");
  return choice.toLowerCase();
}
