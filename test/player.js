class Player {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.alive = true;
  }

  static create(name) {
    return new Player(name);
  }

  setPosition(position) {
    this.x = position.x;
    this.y = position.y;
  }

  move(n, m) {
    if (!this.alive) return;

    // Randomly choose a direction: up, down, left, right, or diagonal
    const direction = Math.floor(Math.random() * 8);

    switch (direction) {
      case 0:
        if (this.x > 0) this.x--;
        break; // Move left
      case 1:
        if (this.x < n - 1) this.x++;
        break; // Move right
      case 2:
        if (this.y > 0) this.y--;
        break; // Move up
      case 3:
        if (this.y < m - 1) this.y++;
        break; // Move down
      case 4:
        if (this.x > 0 && this.y > 0) {
          this.x--;
          this.y--;
        }
        break; // Move up-left
      case 5:
        if (this.x < n - 1 && this.y > 0) {
          this.x++;
          this.y--;
        }
        break; // Move up-right
      case 6:
        if (this.x > 0 && this.y < m - 1) {
          this.x--;
          this.y++;
        }
        break; // Move down-left
      case 7:
        if (this.x < n - 1 && this.y < m - 1) {
          this.x++;
          this.y++;
        }
        break; // Move down-right
    }

    console.log(`${this.name} moved to (${this.x}, ${this.y})`);
  }
}

export default Player;
