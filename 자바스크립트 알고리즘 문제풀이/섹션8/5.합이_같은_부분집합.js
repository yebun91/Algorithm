function solution(arr) {
  const allSum = arr.reduce((a, b) => a + b, 0);
  const n = arr.length;

  function DFS(L, sum) {
    if (L === n) {
      if (allSum - sum === sum) return "YES";
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return "NO";
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
