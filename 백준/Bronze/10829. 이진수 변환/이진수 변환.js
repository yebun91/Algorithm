const input = require("fs").readFileSync('/dev/stdin').toString().trim();

const solution = () => {
  let result = "";
  const DFS = (L) => {
    if (L === 0) return;
    else {
      DFS(Math.floor(L / 2));
      result += L % 2;
    }
  };
  DFS(Number(input));
  return result;
};

console.log(solution());