const fs = require('fs');
let [N, ...list] = fs.readFileSync('dev/stdin').toString().trim().split(/\s+/).map(Number);

const solution = () => {
  let result = 0;
  let money = list.shift();

  for (let i = N - 1; i >= 0; i--) {
    if (money >= list[i]) {
      result += parseInt(money / list[i]);
      money = money % list[i];
    }
    if (money === 0) break;
  }
  console.log(result);
};

solution();