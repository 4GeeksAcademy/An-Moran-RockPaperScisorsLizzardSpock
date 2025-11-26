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
  let result = " ";

  if (userChoice === computerChoice) {
    result = console.log("It's a draw!");
  }
  else if (rules[userChoice].includes(computerChoice)) {
    result = console.log( "You win!");
  }
  else {
    result= console.log ("You lose! Loser :P");
  }
}

document.getElementById("result").innerText = result; 


