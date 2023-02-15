const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split(/\s+/).map(Number);
input.shift();
const solution = () => {
  let zero = 0;
  let result = 0;

  while (input.length > 0) {
    const pop = input.pop();
    if (pop === 0) {
      zero++;
    } else if (zero === 0) {
      result += pop;
    } else {
      zero--;
    }
  }

  console.log(result);
};

solution();