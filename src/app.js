const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
  rock: [`scissors`, `lizard`],
  paper: [`rock`, `spock`],
  scissors: [`paper`, `lizard`],
  lizard: [`spock`, `paper`],
  spock: [`rock`, `scissors`]
}


const jugar = (userChoice) => {
  let rncomputerchoice = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[rncomputerchoice];
 

  if (userChoice === computerChoice) {
    return "It's a draw!"
  }
  else if (rules[userChoice].includes(computerChoice)) {
    return "You win!"
  }
  else {
    return "You lose! Loser :P"
  }
}




