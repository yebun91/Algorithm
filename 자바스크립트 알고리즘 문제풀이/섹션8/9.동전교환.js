function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  const len = arr.length; // 3
  const DFS = (L, max) => {
    if (max > m) {
      return;
    }
    if (max === m) {
      answer = Math.min(answer, L);
      return;
    } else {
      for (let i = 0; i < len; i++) {
        DFS(L + 1, max + arr[i]);
      }
    }
  };
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
