function solution(arr) {
  let answer = 0;
  let o = 0;
  for (x of arr) {
    if (x === 1) {
      o++;
      answer += o;
    } else {
      o = 0;
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
