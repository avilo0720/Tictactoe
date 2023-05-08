let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;
  if (cell.textContent !== "") {
    return;
  }
  cell.textContent = currentPlayer;
  checkForWin();
  switchPlayers();
}

function checkForWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    const cell1 = cells[a];
    const cell2 = cells[b];
    const cell3 = cells[c];
    if (cell1.textContent === "" || cell2.textContent === "" || cell3.textContent === "") {
      continue;
    }
    if (cell1.textContent === cell2.textContent && cell2.textContent === cell3.textContent) {
      alert(`${currentPlayer} wins!`);
      resetBoard();
      return;
    }
  }
  if (checkForDraw()) {
    alert("It's a draw!");
    resetBoard();
  }
}

function switchPlayers() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForDraw() {
  return [...cells].every(cell => cell.textContent !== "");
}

function resetBoard() {
  cells.forEach(cell => {
    cell.textContent = "";
  });
}
