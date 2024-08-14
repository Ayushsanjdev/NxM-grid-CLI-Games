class BattleShip {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array.from({ length: rows }, () => Array(cols).fill("_"));
    this.ships = [];
    this.hits = 0;
    this.totalShips = 0;
  }

  static create(rows, cols) {
    return new BattleShip(rows, cols);
  }

  placeShip(x, y) {
    if (this.grid[x][y] === "_") {
      this.grid[x][y] = "Ship";
      this.ships.push({ x, y });
      this.totalShips++;
    } else {
      console.log(`Ship is already present at coordinate: ${(x, y)}`);
    }
  }

  takeGuess(x, y) {
    if (this.grid[x][y] === "Ship") {
      console.log(`Hit at (${x}, ${y})`);
      this.grid[x][y] = "hit!";
      this.hits++;
    } else {
      console.log(`Miss at (${x}, ${y})`);
      this.grid[x][y] = "Miss!";
    }
  }

  isGameOver() {
    return this.hits === this.totalShips;
  }

  displayGrid() {
    console.log(this.grid.map((r) => r.join(" ")).join("\n"));
  }
}

module.exports = { BattleShip };
