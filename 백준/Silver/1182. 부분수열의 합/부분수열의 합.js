const [N, S, ...arr] = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

const solution = () => {
  let result = 0;
  // N: 수열의 길이, S: 합이 되고자 하는 값, arr: 수열
  const DFS = (L, sum) => {
    // L: 트리 레벨, sum: 더한 값
    if (L === N) return;
    sum += arr[L];
    if (sum === S) result++;
    DFS(L + 1, sum);
    DFS(L + 1, sum - arr[L]);
  };
  DFS(0, 0);
  return result;
};

console.log(solution());