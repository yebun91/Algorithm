function solution(board, moves) {
  let answer = 0;
  let stack = [];
  for (x of moves) {
    for (let j = 0; j < 5; j++) {
      if (board[j][x - 1] !== 0) {
        if (board[j][x - 1] === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(board[j][x - 1]);
        }
        board[j][x - 1] = 0;
        break;
      }
    }
  }
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

// let b = [1, 5, 3, 5, 1, 2, 1, 4];
let b = [2, 3, 4, 1, 2, 3, 1, 5];
console.log(solution(a, b));
