let ChessState = require("chessstate")

// Initalize a new game
let game = new ChessState.ChessState()

// Execute move "e4" for white.
game.move("e4")

// Execute move "e5" for black.
game.move("e5")

// Print out an ascii representation of the board.
game.printBoard()

// Print out the FEN string representing the game.
console.log(game.getFen())

// Print out game state object.
console.log(game.getStatus())
