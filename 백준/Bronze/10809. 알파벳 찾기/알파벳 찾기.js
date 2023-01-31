const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = () => {
  let obj = {};
  for (let i = 97; i <= 122; i++) {
    obj[String.fromCharCode(i)] = -1;
  }
  for (let i = 0; i < input.length; i++) {
    if (obj[input[i]] === -1) obj[input[i]] = i;
  }

  let result = "";
  for (const [key, value] of Object.entries(obj)) {
    result += `${value} `;
  }
  return result;
};

console.log(solution());