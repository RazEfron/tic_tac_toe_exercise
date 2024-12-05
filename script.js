const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");

let currentPlayer = "X";
let gameActive = true;
const cells = Array(9).fill(null);

// Create board cells
function createBoard() {
  // - Clear the current board's content (if any).
  // - Loop through 9 cells (0 to 8).
  // - For each cell:
  //   - Create a new HTML element for the cell.
  //   - Add a class to style it as a cell.
  //   - Store the cell's index as data.
  //   - Add an event listener for when the cell is clicked.
  //   - Append the cell to the board.
}

// Check for winner
function checkWinner() {
  // - Define winning combinations (array of arrays).
  // - Loop through each winning combination.
  // - For each combination, check:
  //   - If all three cells in the combination have the same non-null value.
  //   - If yes, return the winner (e.g., "X" or "O").
  // - If no winner and no empty cells, return "Tie".
  // - Otherwise, return null (no winner yet).
}

// Handle cell click
function handleCellClick(event) {
  // - Get the clicked cell and its index.
  // - If the game is inactive or the cell is already filled, do nothing.
  // - Update the cell with the current player's symbol ("X" or "O").
  // - Update the game state to reflect the player's move.
  // - Check for a winner using the `checkWinner` function.
  //   - If there's a winner:
  //     - Set the game as inactive.
  //     - Update the status text to show the winner or a tie.
  //   - If no winner:
  //     - Switch to the other player.
  //     - Update the status text to indicate the next player's turn.
}

// Reset game
function resetGame() {
  // - Reset the current player to "X".
  // - Set the game to active (true).
  // - Clear the cells array (set all values to null).
  // - Reset the status text to indicate Player X's turn.
  // - Recreate the board.
}

// Initialize game
resetButton.addEventListener("click", resetGame);

// - Add an event listener to the reset button to call `resetGame` when clicked.
// - Set the initial game status text to indicate Player X's turn.
// - Call the `createBoard` function to render the initial game board.
