module.exports = () => {
  let board = [[]];
  let count = 3900;
  let i = 0;

  while (count > 0) {
    if (board[i].length === 78) {
      board.push([]);
      i++;
    }

    board[i].push(coinToss());
    count--;
  }

  return board;
}

function coinToss() {
  return Math.floor(Math.random() * 10 + 1) > 8;
}
