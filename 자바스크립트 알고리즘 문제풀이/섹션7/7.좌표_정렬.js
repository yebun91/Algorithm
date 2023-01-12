function solution(arr) {
  let answer = arr;
  // for (let i = 0; i < answer.length; i++) {
  //   for (let j = i + 1; j < answer.length; j++) {
  //     if (answer[j][0] < answer[i][0]) {
  //       [answer[i], answer[j]] = [answer[j], answer[i]]; //오올 자스 최신문법~!
  //     } else if (answer[j][0] === answer[i][0]) {
  //       if (answer[j][1] < answer[i][1]) {
  //         [answer[i], answer[j]] = [answer[j], answer[i]];
  //       }
  //     }
  //   }
  // }

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
