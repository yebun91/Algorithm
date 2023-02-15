const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...arr] = require("fs").readFileSync(path).toString().trim().split(/\s+/);
const solution = () => {
  let result = 0;

  const checkIsPrimeNumber = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };

  for (let x of arr) {
    const num = Number(x);
    if (num === 0 || num === 1) {
      continue;
    } else if (checkIsPrimeNumber(Number(x))) {
      result++;
    }
  }

  console.log(result);
};

solution();