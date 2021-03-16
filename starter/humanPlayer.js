const readline = require('readline');


class HumanPlayer {
  constructor() {
    // a new readline interface stored as an instance
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove) {
    // TODO: Ask the user for their move and process the answer using the rl
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
    this.rl.question("Please enter X and Y values seperated by a coma(Ex: 3,2 )",(answer) => {
      let [row,col] = answer = split(",")
      processMove(row,col);
    })
  }

  processGameOver(isWon) {
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
    if (isWon) {
      console.log('Congratulations, you sunk all the battle ships!')
    } else {
      console.log(" Didn't win this time, play again? ")
    }
    this.rl.close;
  }
}

module.exports = HumanPlayer;
