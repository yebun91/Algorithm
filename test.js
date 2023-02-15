const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((x) => +x));

const solution = () => {
  const recursion = (L, input, len, ch) => {
    if (L === len) {
      let temp = "";
      for (let i = 1; i <= len; i++) {
        if (ch[i] === 1) {
          temp += input[i] + " ";
        }
      }
      console.log(temp);
      return;
    } else {
      ch[L] = 1;
      recursion(L + 1, input, len, ch);
      ch[L] = 0;
      recursion(L + 1, input, len, ch);
    }
  };
  for (let x of input) {
    if (x.length === 1 && x[0] === 0) {
      break;
    } else {
      console.log(x);
      const len = x.length;
      let ch = Array.from({ length: len }, () => 0);
      recursion(0, x, len, ch);
      console.log();
    }
  }
};

solution();

// https://pstudio411.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%B0%B1%EC%A4%80%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-nodejs-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
