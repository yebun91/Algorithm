const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map((v) => v.split(' ').map(Number));

const solution = (s) => {
  const a = s[0].sort((a, b) => {
    return a - b;
  });
  const b = s[1].sort((a, b) => {
    return b - a;
  });

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
};

console.log(solution(input));
