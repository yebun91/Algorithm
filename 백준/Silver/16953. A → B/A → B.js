const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [a, b] = input[0].split(' ');
let A = +a;
let B = +b;

const solution = (A, B) => {
  let result = 0;

  while (A !== B) {
    if (A > B) return -1;
    if (getLastNumber(B) === 1) {
      B = removeLastNumber(B);
    } else {
      B /= 2;
    }
    result++;
  }
  return result+1;
};

const getLastNumber = (number) =>
  Number(String(number).split("")[String(number).split("").length - 1]);
const removeLastNumber = (number) => {
  const strNumber = String(number).split("");
  strNumber.pop();
  return +strNumber.join("");
};

console.log(solution(A, B));