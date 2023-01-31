const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const solution = () => {
  let min = 999999;
  while (input.length !== 0) {
    const pop = input.pop();
    const shift = input.shift();
    min = Math.min(min, pop + shift);
  }
  return min;
};

console.log(solution());

// https://pstudio411.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%B0%B1%EC%A4%80%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-nodejs-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
