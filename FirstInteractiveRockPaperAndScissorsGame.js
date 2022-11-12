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
          ? "The Game is tie"
          : playerOne === "rock" && computer === "paper"
          ? "Computer Wins!"
          : playerOne === "paper" && computer === "scissors"
          ? "Computer Wins!"
          : playerOne === "scissors" && computer === "rock"
          ? "Computer Wins!"
          : "Player One Wins!";
      alert(result);
      console.log(result);
      console.log("Player One: ", playerOne);
      console.log("Computer: ", computer);
    } else {
      alert("Please enter either rock, paper, or scissors!");
    }
  } else {
    alert("I guess you change your mind maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
