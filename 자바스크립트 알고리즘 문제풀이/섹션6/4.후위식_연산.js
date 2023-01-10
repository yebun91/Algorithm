function solution(s) {
  let answer;
  let stack = [];

  for (x of s) {
    if (isNaN(x)) {
      let a = stack.pop();
      let b = stack.pop();
      if (x === "+") {
        stack.push(b + a);
      } else if (x === "-") {
        stack.push(b - a);
      } else if (x === "*") {
        stack.push(b * a);
      } else if (x === "/") {
        stack.push(b / a);
      }
    } else {
      stack.push(Number(x));
    }
    console.log(stack);
  }
  answer = stack.pop();
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
