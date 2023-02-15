const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split(" ").map(Number);
const solution = (n, k) => {
  let answer = [];
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (j === k) {
        answer.push(arr.shift());
      } else {
        arr.push(arr.shift());
      }
    }
  }

  console.log("<" + answer.join(", ") + ">");
};

solution(input[0], input[1]);