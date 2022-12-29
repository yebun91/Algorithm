function solution(s) {
  let answer = "YES";
  let str = s.toLowerCase();
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) return "NO";
  }

  // if (str !== str.split("").reverse().join("")) answer = "NO";
  return answer;
}
console.log();

let str = "goooG";
console.log(solution(str));
