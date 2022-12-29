function solution(arr) {
  let answer = 0;
  let maxNum = 0;
  for (let x of arr) {
    if (x > maxNum) {
      answer++;
      maxNum = x;
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
