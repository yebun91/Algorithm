let [n, ...arr] = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const solution = () => {
  arr.sort();
  let result = 0;

  while (allSum(arr) != 0) {
    let check = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] % 2 !== 0 || arr[i] === 0 || arr[i] === 1) {
        if (arr[i] === 0) {
          continue;
        } else {
          arr[i]--;
          result++;
        }
        check = 1;
      }
    }
    if (check === 0) {
      for (let i = 0; i < n; i++) {
        arr[i] = arr[i] / 2;
      }
      result++;
    }
  }

  return result;
};

const allSum = (arr) => {
  let s = 0;
  for (let x of arr) {
    s += x;
  }
  return s;
};

console.log(solution());