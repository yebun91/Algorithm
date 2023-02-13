function solution(n, m) {
  // 1부터 n 번까지 번호가 적힌 구슬
  // 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법 출력
  let answer = [];
  let ch = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push(ch.slice()); // 복사
      return;
    } else {
      for (let i = 0; i <= n; i++) {
        ch[L] = i;
        DFS(L + 1);
      }
    }
  };
  DFS(0);

  return answer;
}

console.log(solution(4, 3));
