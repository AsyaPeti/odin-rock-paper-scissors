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

// This function plays the game for five rounds
function playGame() {
  // Two variables to track the score
  let humanScore = 0;
  let computerScore = 0;
  
  for (let round = 1; round <= 5; round++) {
    console.log(`Round number ${round}.`);
    
    // This function compares players' choices and shows the results
    function playRound(humanChoice, computerChoice) {
      if (humanChoice == "rock") {
        if (computerChoice == "paper") {
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
        }
      }
    }

    let humanSelection = getHumanChoice().toLowerCase();
    let computerSelection = getComputerChoice();
    
    while (humanSelection === computerSelection) {
      console.log("It's a tie! Play again.");
      humanSelection = getHumanChoice().toLowerCase();
      computerSelection = getComputerChoice();
    }

    playRound(humanSelection, computerSelection);
    
    if (round < 5) {
      console.log(`Current score: (human)${humanScore}:${computerScore}(computer)`);

    } else {
      if (humanScore > computerScore) {
        console.log(`You've won the game with the total score: (human)${humanScore}:${computerScore}(computer)!`);
      } else {
        console.log(`You've lost the game with the total score: (human)${humanScore}:${computerScore}(computer).`);
      }
    }
  }
}
