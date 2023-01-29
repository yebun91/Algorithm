const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (n, list) => {
  const len = Number(n);
  let result = 0;
  const sortList = input[1].split(' ').map(Number).sort((a,b)=>a-b);
  for (let i = 0; i < len; i++) {
    result += sortList[i] * (len - i);
  }
  console.log(result);
};

solution(input[0], input[1]);