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
  return choice = prompt("Rock, paper, or scissors?", "");
}

// This function compares players' choices and shows the results
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("It's a tie! Play again.");
    
    } else if (computerChoice == "paper") {
      console.log("You lose! Rock is covered by Paper.");
      ++computerScore;
    
    } else if (computerChoice == "scissors") {
      console.log("You win! Rock crushes Scissors.");
      ++humanScore;
    }
  
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("You win! Paper covers Rock.");
      ++humanScore;
    
    } else if (computerChoice == "paper") {
      console.log("It's a tie! Play again.");
    
    } else if (computerChoice == "scissors") {
      console.log("You lose! Paper is cut by Scissors.");
      ++computerScore;
    }
  
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("You lose! Scissors are crushed by Rock.");
      ++computerScore;
    
    } else if (computerChoice == "paper") {
      console.log("You win! Scissors cut paper.");
      ++humanScore;
    
    } else if (computerChoice == "scissors") {
      console.log("It's a tie! Play again.");
    }
  }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(humanSelection);
console.log(computerSelection);
console.log(humanScore);
console.log(computerScore);
