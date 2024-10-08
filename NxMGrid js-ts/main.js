/*
A game with n x m grid (chosen at the start)

A random destination is generated whose coordinates will be informed to all players

A new player joins, they will be spawned at a random location

Once someone reaches destination, that player wins and game ends

If Two player ends up on same coordinates, both are eliminated.

Every player can move one square every 5 seconds diagonally, horizontally and vertically.

Max player number < empty grid spots

New player can be added after a game starts

*/

import Game from "./game.js";
import Player from "./player.js";

const game1 = Game.create(3, 4);
const game2 = Game.create(4, 4);

const playerA = Player.create("A");
const playerB = Player.create("B");
const playerC = Player.create("C");
const playerD = Player.create("D");

game1.addPlayer(playerA);
game1.addPlayer(playerB);
game2.addPlayer(playerC);
game2.addPlayer(playerD);

game1.start();
game2.start();

/* CLI output:
Game 01 Turn 001:
A _ _ _
_ B _ X
_ _ _ _

Game 02 Turn 001:
_ _ _ _
_ _ C _
X _ _ _
_ _ _ D

< After 5s >

Game 01 Turn 002:
_ _ _ _
_ A B X
_ _ _ _

Game 02 Turn 002:
_ _ _ _
_ _ _ _
X _ C _
_ _ D _

...
*/
