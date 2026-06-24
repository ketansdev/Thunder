const board = document.getElementById("board");
const status = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
let turn = "X";
let totalInsert = 0;
let isWinner = false;

let arr = ["", "", "", "", "", "", "", "", ""];
// 012, 345, 678
// 036, 147, 258
// 048 246

function checkWinner(player) {
  console.log(player);
  if (arr[0] == player && arr[1] == player && arr[2] == player) return true;
  else if (arr[3] == player && arr[4] == player && arr[5] == player)
    return true;
  else if (arr[6] == player && arr[7] == player && arr[8] == player)
    return true;
  else if (arr[0] == player && arr[3] == player && arr[6] == player)
    return true;
  else if (arr[1] == player && arr[4] == player && arr[7] == player)
    return true;
  else if (arr[2] == player && arr[5] == player && arr[8] == player)
    return true;
  else if (arr[0] == player && arr[4] == player && arr[8] == player)
    return true;
  else if (arr[2] == player && arr[4] == player && arr[6] == player)
    return true;
  else return false;
}

board.addEventListener("click", (e) => {
  if (isWinner || arr[e.target.id] !== "") {
    return;
  }
  let box = e.target;
  box.textContent = turn;
  const index = box.id;
  arr[index] = turn;
  totalInsert++;

  if (checkWinner(turn)) {
    isWinner = true;
    status.textContent = `Player ${turn} won 🏆 the Game`;
    return;
  }

  if (totalInsert == 9) {
    status.textContent = `Game is Draw`;
    return;
  }

  turn === "X" ? (turn = "0") : (turn = "X");
  status.textContent = `🏆 Player ${turn}'s turn`;
});

resetBtn.addEventListener("click", () => {
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).textContent = "";
    arr[i] = "";
  }
  status.textContent = `🏆 Player X's turn`;
  totalInsert = 0;
  isWinner = false;
});
