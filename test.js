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

// https://pstudio411.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%B0%B1%EC%A4%80%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-nodejs-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
