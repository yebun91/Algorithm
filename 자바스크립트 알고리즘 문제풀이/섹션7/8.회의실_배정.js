function solution(meeting) {
  let answer = 0;
  // [x, y] y순으로 정렬함.
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let time = 0;
  for (let x of meeting) {
    if (x[0] >= time) {
      answer++;
      time = x[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
// let arr = [
//   [3, 3],
//   [1, 3],
//   [2, 3],
// ];
// let arr = [
//   [1, 4],
//   [3, 5],
//   [0, 6],
//   [5, 7],
//   [3, 8],
//   [5, 9],
//   [6, 10],
//   [8, 11],
//   [8, 12],
//   [2, 13],
//   [12, 14],
// ];
console.log(solution(arr));
