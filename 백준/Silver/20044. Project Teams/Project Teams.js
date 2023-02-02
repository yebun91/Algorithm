let [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const solution = () => {
  arr.sort((a, b) => a - b);
  let min = 999999;
  while (arr.length !== 0) {
    const pop = arr.pop();
    const shift = arr.shift();
    min = Math.min(min, pop + shift);
  }
  return min;
};

console.log(solution());