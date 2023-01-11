function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    console.log(stack);
    if (s[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
      if (s[i - 1] === "(") {
        //레이저인 경우
        answer += stack.length;
      } else {
        //막대기의 끝인 경우
        answer += 1;
      }
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
// let a = "((())()()(()))";
console.log(solution(a));
