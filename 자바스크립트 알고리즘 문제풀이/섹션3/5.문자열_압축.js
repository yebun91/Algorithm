function solution(s) {
  let answer = "";
  let count = 1;
  for (x of s) {
    if (answer[answer.length - 1] === x) {
      count++;
    } else {
      if (count > 1) {
        answer += count + x;
        count = 1;
      } else {
        answer += x;
      }
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
