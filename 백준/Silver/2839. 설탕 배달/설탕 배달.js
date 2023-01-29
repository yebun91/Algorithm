let input = require('fs').readFileSync('/dev/stdin');

const solution = (s) => {
  let count = 0;
  let input = Number(s);

  while (true) {
    if (input % 5 === 0) {
      console.log(input / 5 + count);
      break;
    }

    if (0 > input) {
      console.log(-1);
      break;
    }

    count++;
    input -= 3;
  }
};

solution(input);

