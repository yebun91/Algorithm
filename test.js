const input = require("fs")
  .readFileSync("input.txt")
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

// https://pstudio411.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%B0%B1%EC%A4%80%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-nodejs-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
