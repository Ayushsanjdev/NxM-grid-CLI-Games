class Game {
	static gameCounter = 0;
	constructor(n, m) {
		this.n = n; // Number of rows
		this.m = m; // Number of columns
		this.players = [];
		this.destination = this.generateDestination();
		this.gameId = Game.gameCounter++;
	}

	static create(n, m) {
		return new Game(n, m);
	}

	generateDestination() {
		return {
			x: Math.floor(Math.random() * this.n),
			y: Math.floor(Math.random() * this.m),
		};
	}

	addPlayer(player) {
		if (this.players.length >= this.n * this.m - 1) {
			console.log("Cannot add more players. Maximum limit reached.");
			return;
		}
		player.setPosition(this.randomPosition());
		this.players.push(player);
		console.log(
			`${player.name} joined the game at (${player.x}, ${player.y})`,
		);
	}

	randomPosition() {
		return {
			x: Math.floor(Math.random() * this.n),
			y: Math.floor(Math.random() * this.m),
		};
	}

	start() {
		console.log(
			`Game ${this.gameId} started with destination at (${this.destination.x}, ${this.destination.y})`,
		);
		console.log(`below starter grid board`);
		this.displayGrid();
		this.gameInterval = setInterval(() => {
			for (let player of this.players) {
				player.move(this.n, this.m);
			}
			this.checkForCollisions();
			if (this.checkForWin() || this.checkForGameOver()) {
				clearInterval(this.gameInterval);
			}
			this.displayGrid();
		}, 5000); // Move every 5 seconds
	}

	checkForWin() {
		for (let player of this.players) {
			if (
				player.alive &&
				player.x === this.destination.x &&
				player.y === this.destination.y
			) {
				console.log(
					`${player.name} reached the destination and won the game${this.gameId}! example below:`,
				);
				return true;
			}
		}
		return false;
	}

	checkForCollisions() {
		for (let i = 0; i < this.players.length; i++) {
			for (let j = i + 1; j < this.players.length; j++) {
				if (
					this.players[i].alive &&
					this.players[j].alive &&
					this.players[i].x === this.players[j].x &&
					this.players[i].y === this.players[j].y
				) {
					this.players[i].alive = false;
					this.players[j].alive = false;
					console.log(
						`${this.players[i].name} and ${this.players[j].name} collided and were eliminated!`,
					);
				}
			}
		}
	}

	checkForGameOver() {
		const alivePlayers = this.players.filter((player) => player.alive);
		if (alivePlayers.length === 0) {
			console.log(
				`No players left, game${this.gameId} over! below grid example:`,
			);
			return true;
		}
		return false;
	}

	displayGrid() {
		let grid = Array.from({ length: this.n }, () =>
			Array(this.m).fill("_"),
		);

		// Place the destination on the grid
		grid[this.destination.x][this.destination.y] = "X";

		// Place players on the grid
		for (let player of this.players) {
			if (player.alive) {
				grid[player.x][player.y] = player.name;
			}
		}

		console.log(`\nGame ${this.gameId} Grid:`);
		for (let row of grid) {
			console.log(row.join(" "));
		}
		console.log(); // Add some spacing between rounds
	}
}

export default Game;
