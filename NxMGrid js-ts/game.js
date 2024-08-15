export default class Game {
	static gameIdGenerator = 1;

	constructor(rows, cols) {
		this.gameId = Game.gameIdGenerator++;
		this.rows = rows;
		this.cols = cols;
		this.grid = Array.from({ length: rows }, () => Array(cols).fill("_"));
		this.players = [];
		this.step = 0;
		this.destination = this.getRandomCoordinates();
		this.grid[this.destination.x][this.destination.y] = "X";
	}

	static create(rows, cols) {
		return new Game(rows, cols);
	}

	getRandomCoordinates() {
		const x = Math.floor(Math.random() * this.rows);
		const y = Math.floor(Math.random() * this.cols);
		return { x, y };
	}

	addPlayer(player) {
		player.placePlayer(this.rows, this.cols, this.grid);
		this.players.push(player);
		this.grid[player.x][player.y] = player.id;
	}

	start() {
		console.log(`\nGame[${this.gameId}]:\n`);
		this.displayGrid();
		this.playNextStep();
	}

	playNextStep() {
		this.step++;
		console.log(
			`Game ${String(this.gameId).padStart(3, "0")} Turn ${String(this.step).padStart(3, "0")}:\n`,
		);
		this.players.forEach((player) =>
			player.nextMove(this.grid, this.destination),
		);

		if (this.checkWin() || this.checkCollision()) {
			console.log(`Game ${String(this.gameId).padStart(3, "0")} Over!\n`);
			return;
		}

		this.displayGrid();
		setTimeout(() => this.playNextStep(), 5000);
	}

	checkCollision() {
		const positions = new Map();
		let collisionDetected = false;

		this.players.forEach((player) => {
			if (player.isCollisionOccurred) return;

			const position = `${player.x},${player.y}`;
			if (!positions.has(position)) {
				positions.set(position, []);
			}
			positions.get(position).push(player);
		});

		positions.forEach((playersAtPosition) => {
			if (playersAtPosition.length > 1) {
				if (!collisionDetected) {
					console.log("Collision Detected!\n");
					collisionDetected = true;
				}

				playersAtPosition.forEach((player) => {
					player.isCollisionOccurred = true;
				});
			}
		});

		return collisionDetected;
	}

	displayGrid() {
		this.grid.forEach((row) => console.log(row.join(" ")));
		console.log("\n");
	}

	checkWin() {
		for (let player of this.players) {
			if (
				player.x === this.destination.x &&
				player.y === this.destination.y
			) {
				this.displayGrid();
				console.log(
					`Player ${player.id} wins the Game ${String(this.gameId).padStart(3, "0")} at position (${this.destination.x}, ${this.destination.y})\n`,
				);
				return true;
			}
		}
		return false;
	}
}
