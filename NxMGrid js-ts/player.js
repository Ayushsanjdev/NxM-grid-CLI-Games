export default class Player {
  static playerIdGenerator = 0;

  constructor() {
    this.id = String.fromCharCode(65 + Player.playerIdGenerator++);
    this.x = 0;
    this.y = 0;
    this.isCollisionOccurred = false;
  }

  static create() {
    return new Player();
  }

  placePlayer(rows, cols, grid) {
    do {
      this.x = Math.floor(Math.random() * rows);
      this.y = Math.floor(Math.random() * cols);
    } while (grid[this.x][this.y] !== "_");
  }

  nextMove(grid, destination) {
    if (
      this.isCollisionOccurred ||
      (this.x === destination.x &&
        this.y === destination.y)
    ) {
      return;
    }

    if (grid[this.x][this.y] === this.id) {
      grid[this.x][this.y] = "_";
    }

    const dx = destination.x - this.x;
    const dy = destination.y - this.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      this.x += Math.sign(dx);
    } else {
      this.y += Math.sign(dy);
    }

    grid[this.x][this.y] = this.id;
  }
}
