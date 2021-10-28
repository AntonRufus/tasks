function ticTacToe(playingBoard) {
  /* [ //          //     winning conditions
        [0, 1, 2], //     [0][0], [0][1], [0][2]
        [3, 4, 5], //     [1][0], [1][1], [1][2]
        [6, 7, 8], //     [2][0], [2][1], [2][2]
        [0, 3, 6], //     [0][0], [1][0], [2][0]
        [1, 4, 7], //     [0][1], [1][1], [2][1]
        [2, 5, 8], //     [0][2], [1][2], [2][2]
        [0, 4, 8], //     [0][0], [1][1], [2][2]
        [2, 4, 6]  //     [0][2], [1][1], [2][0]
    ]; */ //       //     winning conditions

  function isWinner(board, player) {
    if (
      (board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
      (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
      (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||
      (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
      (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
      (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||
      (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
      (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    ) {
      return true; // player won
    } else {
      return false; // player lost
    }
  }

  function isFinished(board) {
    let finished = false; // board is finished

    board.forEach((mainArrayElement) => {
      mainArrayElement.forEach((childArrayElement) => {
        if (childArrayElement === 0) {
          finished = true; // board is not yet finished
        }
      });
    });

    return finished;
  }

  if (isWinner(playingBoard, 1)) { return 1; } // player X won
  if (isWinner(playingBoard, 2)) { return 2; } // player 0 won
  if (isFinished(playingBoard)) { return -1; } // game is not finished

  return 0; // cat's game (i.e. a draw)
}

console.log('-1 if the board is not yet finished (there are empty spots): ', ticTacToe([[0, 1, 0],[1, 2, 2],[2, 1, 1]]));
console.log('1 if "X" won: ', ticTacToe([[1, 1, 1],[1, 2, 2],[2, 1, 1]]));
console.log('2 if "O" won: ', ticTacToe([[1, 1, 2],[1, 2, 2],[2, 1, 1]]));
console.log("0 if it's a cat's game (i.e. a draw): ", ticTacToe([[2, 1, 2],[1, 2, 2],[1, 2, 1]]));
