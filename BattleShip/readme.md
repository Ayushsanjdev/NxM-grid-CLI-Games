# **Battleship Game Simulation**

- **Description**: Simulate a simplified version of the Battleship game. Players take turns placing their ships on an `n x m` grid and then take turns trying to hit the opponent's ships by guessing grid coordinates. The game continues until all ships of one player are sunk.

- **Challenges**:
  - Implement ship placement on the grid.
  - Implement the turn-based system for guessing and hitting ships.
  - Track hits, misses, and sunk ships.

- **Difficulty**: Easy due to the turn-based nature and simple grid interactions.

``` Output:

Initial Grid:
_ _ _ _ _
_ _ S _ _
_ _ _ _ _
_ _ _ _ S
_ _ _ _ _

Hit at (1, 2)!
Hit at (0, 0)!
Miss at (4, 4).
Hit at (3, 4)!

Grid After Guesses:
_ _ _ _ _
_ _ X _ _
_ _ _ _ _
_ _ _ _ X
_ _ _ _ O

```
Here’s an ordered list of the problems by difficulty:




### Medium: **Snake Game Simulation**
- **Description**: Implement a simple snake game where a snake moves within an `n x m` grid. The snake starts at a random position and grows when it eats food, which appears at random positions on the grid. If the snake runs into the grid boundary or into itself, the game ends.
- **Challenges**:
  - Implement the snake's movement (up, down, left, right).
  - Handle the growth of the snake and the generation of food.
  - Detect collisions with the grid boundary and the snake's own body.
- **Difficulty**: Medium due to continuous movement, collision detection, and snake growth logic.

### Hard: **Pac-Man Movement Simulation**
- **Description**: Create a Pac-Man-like simulation where Pac-Man moves within an `n x m` grid. Pac-Man starts at a random location, and several ghosts are also randomly placed on the grid. Pac-Man can move in all directions to avoid the ghosts. If Pac-Man collides with a ghost, the game ends.
- **Challenges**:
  - Implement Pac-Man's movement logic.
  - Implement ghost movement with simple AI (e.g., move towards Pac-Man).
  - Detect collisions between Pac-Man and ghosts.
- **Difficulty**: Hard due to the need for AI movement for ghosts and real-time decision-making for Pac-Man.

These problems should help you progressively build your skills, starting with simpler grid management and moving towards more complex, real-time interactions and AI.
