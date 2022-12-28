function solution(s) {
  let answer = 0;
  for (str of s) {
    if (str.charCodeAt(0) < 91 && str.charCodeAt(0) > 64) answer++;
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
