function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(v) {
    if (n < v) {
      let temp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) {
          temp += i;
        }
      }
      console.log(ch);
      if (temp.length > 0) {
        answer.push(temp);
      }

      return;
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
