const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = (s) => {
  let I = 0;
  let Z = 0;
  let alpha = "";
  for (let x of s) {
    if (alpha !== x) {
      alpha = x;
      if (x === "1") I++;
      else Z++;
    }
  }

  return Math.min(I, Z);
};

console.log(solution(input));