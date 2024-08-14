const { BattleShip } = require("./battleShip.js");

const game = BattleShip.create(5, 5);

// Player 1 places ships
game.placeShip(1, 2);
game.placeShip(3, 4);
game.placeShip(0, 0);

// Display the initial grid (hidden from players in a real game)
console.log("Initial Grid:");
game.displayGrid();

// Player 2 takes guesses
game.takeGuess(1, 2);  // Hit
game.takeGuess(0, 0);  // Hit
game.takeGuess(4, 4);  // Miss
game.takeGuess(3, 4);  // Hit

console.log("\nGrid After Guesses:");
game.displayGrid();

if (game.isGameOver()) {
  console.log("Game Over: All ships sunk!");
} else {
  console.log("Game Continues...");
}
