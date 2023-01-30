const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function (){
    let n = parseInt(input[0]);
    let list = input[1].split(' ').map((el) => parseInt(el));
    solution(n, list);
    process.exit();
});




const solution = (n, list) => {
  let answer = 0;
  let arrow = new Array(1000000).fill(0);
  for (let i of list) {
    if (arrow[i]) {
      arrow[i]--;
      arrow[i - 1]++;
    } else {
      answer++;
      arrow[i - 1]++;
    }
  }
  console.log(answer);
};

