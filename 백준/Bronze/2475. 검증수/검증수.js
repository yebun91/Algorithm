const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = () => {
  let sum = 0;
  for (let x of input) {
    sum += x * x;
  }
  return sum % 10;
};

console.log(solution());