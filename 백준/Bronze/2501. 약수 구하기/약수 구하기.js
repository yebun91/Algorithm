const input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (n, k) => {
  let result = [];
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
      count++;
      if (count >= k) break;
    }
  }
  if (result[k - 1]) {
    return result[k - 1];
  } else {
    return 0;
  }
};

console.log(solution(input[0], input[1]));