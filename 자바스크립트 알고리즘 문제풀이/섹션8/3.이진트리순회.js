function solution(n) {
  let answer = "";
  function DFS(L) {
    if (L > 7) {
      return;
    } else {
      // 전위 순회
      // answer += `${L} `;
      DFS(L * 2);
      // 중위 순회
      // answer += `${L} `;
      DFS(L * 2 + 1);
      // 후위 순회
      answer += `${L} `;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
