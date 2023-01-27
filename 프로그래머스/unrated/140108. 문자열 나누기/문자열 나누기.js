function solution(s) {
  let answer = 0;
  let alpha = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      alpha = s[i];
      count++;
    } else {
      if (s[i] === alpha) {
        count++;
      } else {
        count--;
        if (count === 0) {
          answer++;
          console.log(s[i]);
        }
      }
    }
  }
  if (count > 0) answer++;

  return answer;
}