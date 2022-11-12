// My first interactive game
let playGame = confirm("Shall we play Rock, Paper, or Scissors?");

if (playGame) {
  // Play the game
  let playerChoice = prompt("Please Enter Rock, Paper, or Scissors.");
  if (playerChoice) {
    // The logic of the game
    /* computerChoice, computerRandom and computer variable is the AI of this game it make sures that 
    computer will have an answer of either Rock, Paper, or Scissors*/
    const computerChoice = ["rock", "paper", "scissors"];
    let computerRandom = Math.floor(Math.random() * computerChoice.length);
    let computer = computerChoice[computerRandom];

    let playerOne = playerChoice.trim().toLowerCase();
    // This checks whether the player choose the 3 possible choices if not then it will return an alert or notice
    if (
      playerOne === "paper" ||
      playerOne === "rock" ||
      playerOne === "scissors"
    ) {
      // This is the logic of the game.
      let result =
        playerOne === computer
          ? `Player One: ${playerOne}\nComputer: ${computer}\n\nThe Game is tie`
          : playerOne === "rock" && computer === "paper"
          ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `Player One: ${playerOne}\nComputer: ${computer}\n\nComputer Wins!`
          : `Player One: ${playerOne}\nComputer: ${computer}\n\nPlayer One Wins!`;
      alert(result);
      let tryAgain = confirm("Do you want to play again?");
      tryAgain ? location.reload() : alert("Ok, thanks for playing");
    } else {
      alert("Please enter either rock, paper, or scissors!");
    }
  } else {
    alert("I guess you change your mind maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
