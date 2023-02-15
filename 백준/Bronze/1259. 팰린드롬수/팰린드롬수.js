const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((x) => +x));

const solution = () => {
  for (let x of input) {
    if (x[0] === 0) {
      break;
    }
    const str = x + "";
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }

    if (str === result) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
};

solution();