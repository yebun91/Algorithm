function solution(s) {
  let answer = "YES";
  let stack = [];

  if (s[0] === ")") {
    answer = "NO";
  } else {
    for (x of s) {
      if (x === "(") stack.push(x);
      else stack.pop();
    }
    if (stack.length !== 0) answer = "NO";
  }

  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
