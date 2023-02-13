const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const num = require("fs").readFileSync(path).toString().trim();

const solution = () => {
  let number = Number(num);
  let result = 0;

  if (number === 1 || number === 3) return -1;

  while (number > 0) {
    if (number % 2 === 1 || number % 5 === 0) {
      result++;
      number -= 5;
    } else if (number % 2 === 0) {
      result++;
      number -= 2;
    }
  }
  return result;
};

console.log(solution());