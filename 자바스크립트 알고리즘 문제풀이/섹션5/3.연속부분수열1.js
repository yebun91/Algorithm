function solution(m, arr) {
  let answer = 0;
  // let left = 0;
  // let rigth = 1;
  // let sum = arr[left];
  // while (rigth < arr.length) {
  //   if (sum + arr[rigth] === 6) {
  //     console.log(left, rigth);
  //     answer++;
  //     left++;
  //     rigth++;
  //   } else if (sum + arr[rigth] > 6) {
  //     left++;
  //     sum -= arr[left];
  //   } else {
  //     rigth++;
  //     sum += arr[rigth];
  //   }
  // }
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
