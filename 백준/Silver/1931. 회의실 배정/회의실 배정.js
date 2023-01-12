const fs = require("fs");
// 백준 제출 할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';
// VSC 테스트 할 때 주석 제거
// const readFileSyncAddress = "input.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");

// 인풋 처리
[n, ...arr] = input;
n = Number(n);
arr = arr.map((i) => i.split(" ").map((v) => Number(v)));
solution(n, arr);

// 문제 풀이
function solution(n, meeting) {
  let answer = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  
  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }
  console.log(answer);
}
