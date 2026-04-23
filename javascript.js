// A function that randomly returns: "rock," "paper," or "scissors"
function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;
  console.log(random);
  
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else if (random === 3) {
    return "scissors";
  }
}

console.log(getComputerChoice());
