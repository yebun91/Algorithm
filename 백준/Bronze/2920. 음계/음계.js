const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = () => {
  const sortArr = [...input].sort((a, b) => a - b);
  const backArr = [...input].sort((a, b) => b - a);
  if (JSON.stringify(input) === JSON.stringify(sortArr)) return "ascending";
  else if (JSON.stringify(input) === JSON.stringify(backArr))
    return "descending";
  else return "mixed";
};

console.log(solution());