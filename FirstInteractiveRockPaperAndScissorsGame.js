const AILogic = () => {
  const computerChoice = ["rock", "paper", "scissors"];
  const computerRandom = Math.floor(Math.random() * computerChoice.length);
  const computer = computerChoice[computerRandom];
  return computer;
};

const checkResult = (playerOne, computerAnswer) => {
  const result =
    playerOne === computerAnswer
      ? `Player One: ${playerOne}\nComputer: ${computerAnswer}\n\nThe Game is tie!`
      : playerOne === "rock" && computerAnswer === "paper"
      ? `Player One: ${playerOne}\nComputer: ${computerAnswer}\n\nComputer Wins!`
      : playerOne === "paper" && computerAnswer === "scissors"
      ? `Player One: ${playerOne}\nComputer: ${computerAnswer}\n\nComputer Wins!`
      : playerOne === "scissors" && computerAnswer === "rock"
      ? `Player One: ${playerOne}\nComputer: ${computerAnswer}\n\nComputer Wins!`
      : `Player One: ${playerOne}\nComputer: ${computerAnswer}\n\nPlayer One Wins!`;
  return result;
};

const scoreCounterChecker = (computerScore, playerOneScore) => {
  let result;
  if (playerOneScore === computerScore) {
    result = `The game is tie`;
  } else if (playerOneScore > computerScore) {
    result = `Player One win with a score of ${playerOneScore}`;
  } else {
    result = `Computer win with a score of ${computerScore}`;
  }
  return result;
};

// My first interactive game
const playGame = confirm("Shall we play Rock, Paper, or Scissors?");

if (playGame) {
  // Play the game
  const roundsPlayed = prompt("Choose between 3 - 5 - 7");
  let counter = 1;
  let checkWinner;
  let computerScore = 0;
  let playerOneScore = 0;

  if (
    Number.parseInt(roundsPlayed) === 3 ||
    Number.parseInt(roundsPlayed) === 5 ||
    Number.parseInt(roundsPlayed) === 7
  ) {
    while (counter <= roundsPlayed) {
      const playerChoice = prompt("Please Enter Rock, Paper, or Scissors.");
      if (playerChoice) {
        // The logic of the game
        /* computerChoice, computerRandom and computer variable is the AI of this game it make sures that 
      computer will have an answer of either Rock, Paper, or Scissors*/
        const computerAnswer = AILogic();

        const playerOne = playerChoice.trim().toLowerCase();
        // This checks whether the player choose the 3 possible choices if not then it will return an alert or notice
        if (
          playerOne === "paper" ||
          playerOne === "rock" ||
          playerOne === "scissors"
        ) {
          // This is the logic of the game.
          const result = checkResult(playerOne, computerAnswer);
          playerOne === computerAnswer
            ? `The Game is tie!`
            : playerOne === "rock" && computerAnswer === "paper"
            ? (computerScore = computerScore + 1)
            : playerOne === "paper" && computerAnswer === "scissors"
            ? (computerScore = computerScore + 1)
            : playerOne === "scissors" && computerAnswer === "rock"
            ? (computerScore = computerScore + 1)
            : (playerOneScore = playerOneScore + 1);
          checkWinner = scoreCounterChecker(computerScore, playerOneScore);
          alert(result);
        } else {
          alert("Please enter either rock, paper, or scissors!");
        }
      } else {
        alert("I guess you change your mind maybe next time.");
      }
      counter++;
      checkWinner = scoreCounterChecker(computerScore, playerOneScore);
    }
    alert(checkWinner);
    const tryAgain = confirm("Do you want to play again?");
    tryAgain ? location.reload() : alert("Ok, thanks for playing");
  } else {
    alert("Please choose between 3 - 5 - 7");
  }
} else {
  alert("Ok, maybe next time.");
}
