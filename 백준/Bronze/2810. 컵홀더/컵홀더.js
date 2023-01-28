const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
const solution = (s) => {
  const m = Number(s[0]);
  const sit = [...s[1]];

  let cupHolder = 0;
  let LL = 0;

  for (let x of sit) {
    if (x === "L") LL++;
  }
  LL = LL / 2;
  cupHolder = sit.length + 1 - LL;
  cupHolder = Math.min(m, cupHolder);
  return cupHolder;
};

console.log(solution(input));