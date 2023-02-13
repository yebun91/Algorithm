function solution(m, ps, pt) {
  // m : 제한시간,  ps : 점수, pt : 시간
  let answer = Number.MIN_SAFE_INTEGER;
  let len = ps.length;

  function DFS(L, sumPs, sumPt) {
    if (sumPt > m) return;
    if (L === len) {
      answer = Math.max(answer, sumPs);
    } else {
      DFS(L + 1, sumPs + ps[L], sumPt + pt[L]);
      DFS(L + 1, sumPs, sumPt);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
