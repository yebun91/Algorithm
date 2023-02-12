const [N, S, ...arr] = require("fs")
  .readFileSync("input.txt")
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

// https://pstudio411.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%B0%B1%EC%A4%80%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-nodejs-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
