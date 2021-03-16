const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

const askQuestion = async () => {
  try{
    rl.question("Enter a coordinance",(answer) => {

    })
  } catch (err) {
    console.error();
  }
}

askQuestion()

class HumanPlayer {
  constructor() {
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove() {
    // TODO: Ask the user for their move and process the answer using the rl
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]

  }

  processGameOver(isWon) {
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
  }
}

module.exports = HumanPlayer;
