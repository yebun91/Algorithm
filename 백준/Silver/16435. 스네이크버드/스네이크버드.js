const [len, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (start, arr) => {
  let snakLen = start;
  let sortArr = arr.sort((a, b) => a - b);

  for (let x of sortArr) {
    if (snakLen >= x) {
      snakLen++;
    } else {
      break;
    }
  }

  return snakLen;
};

console.log(
  solution(
    len.toString().trim().split(" ")[1],
    arr.toString().trim().split(" ").map(Number)
  )
);