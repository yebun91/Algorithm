function solution(n) {
  // 자기가 자기 자신을 호출하는 것 = 재귀함수
  function DFS(L) {
    if (L === 0) return; // 함수 종료
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

solution(3);
