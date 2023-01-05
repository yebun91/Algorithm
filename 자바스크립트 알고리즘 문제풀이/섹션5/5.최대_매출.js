function solution(k, arr) {
  //슬라이딩 윈도우
  let answer = 0;
  // let left = 0;
  // let max = 0;
  // for (let rigth = 0; rigth < arr.length; rigth++) {
  //   max += arr[rigth];
  //   if (rigth > k - 1) {
  //     max -= arr[left++];
  //     answer = Math.max(answer, max);
  //   }
  // }
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i]; // 첫번째 k개 윈도우

  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum); // 내꺼랑 많이 다르지 않넹
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
