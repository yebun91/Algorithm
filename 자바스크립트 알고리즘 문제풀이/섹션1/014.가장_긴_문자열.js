function solution(s) {
  let answer = "";
  for(x of s){
    if(answer.length < x.length) answer = x;
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
