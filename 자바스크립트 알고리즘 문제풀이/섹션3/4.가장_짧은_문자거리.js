function solution(s, t) {
  let answer = [];
  let len = s.length;
  let minNum = 0;

  for (let i = 0; i < len; i++) {
    if (s[i] === t) {
      minNum = 0;
      answer.push(minNum);
    } else {
      minNum++;
      answer.push(minNum);
    }
  }
  
  for(let i = len-1; i>=0; i--){
    if (s[i] === t) {
      minNum = 0;
    } else {
      minNum++;
      answer[i]=Math.min(answer[i], minNum);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
