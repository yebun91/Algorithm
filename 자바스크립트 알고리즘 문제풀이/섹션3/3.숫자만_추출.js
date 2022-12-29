function solution(str) {
  let answer = "";
  // answer = str.toLowerCase().replace(/[^0-9]/g, "");
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
