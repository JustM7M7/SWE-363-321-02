let turn = "X";
let gameEnded = false;
// when we click on a cell add the letter
let board = document.getElementsByClassName("board")[0];

board.addEventListener("click", cellClicked);
// navigate using the keyboard
document.addEventListener("keydown", function (event) {
  // check focus on the board
  const isNumber = isFinite(event.key);
  if (isNumber) {
    console.log(event.key);
    let cell = document.getElementById(`${event.key}`);
    console.log(cell);
    cellClicked({ target: cell });
  }
});

function cellClicked(event) {
  let cell = event.target;
  // Check if the cell is already filled or if the game has ended or it is draw
  if (!cell.innerText && !gameEnded) {
    cell.innerText = turn;
    // Check for a win after each move
    if (checkWin()) {
      announceWinner(turn);
      gameEnded = true;
    } else if (checkDraw()) {
      announceDraw();
      gameEnded = true;
    } else {
      turn = turn === "X" ? "O" : "X";
      // Change title
      let turnLetter = document.querySelector("#turn span");
      turnLetter.innerText = turn;
    }
  }
}
function checkWin() {
  let cells = document.querySelectorAll(".cell");
  // they are 8 winning combinations
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combo of winningCombos) {
    // Desctructure the combo
    const [a, b, c] = combo;
    if (
      cells[a].innerText &&
      cells[a].innerText === cells[b].innerText &&
      cells[a].innerText === cells[c].innerText
    ) {
      return true;
    }
  }
  return false;
}
function announceWinner(winner) {
  let turnElement = document.querySelector("#turn");
  turnElement.innerText = `Player ${winner} wins!`;
}
function checkDraw() {
  let cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    if (!cell.innerText) {
      return false;
    }
  }
  // All cells are filled, and there is no winner, so it's a draw
  return true;
}

function announceDraw() {
  let turnElement = document.querySelector("#turn");
  turnElement.innerText = "It's a draw!";
}
