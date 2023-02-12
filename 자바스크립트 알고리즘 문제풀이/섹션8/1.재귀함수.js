function solution(n) {
  let result = [];
  const DFS = (x) => {
    if (x === 0) {
      return;
    } else {
      DFS(x - 1);
      result.push(x);
    }
  };
  DFS(n);
  console.log(result);
}

solution(3);
