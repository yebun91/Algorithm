function solution(need, plan) {
  let answer = "YES";
  let needArr = [...need];
  for (x of plan) {
    if (needArr[0] === x) needArr.shift();
  }
  if (needArr.length !== 0) answer = "NO";

  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
