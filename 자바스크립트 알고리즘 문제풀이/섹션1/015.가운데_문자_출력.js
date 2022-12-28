function solution(s) {
  let answer;
  const num = Math.floor(s.length / 2)
  if(s.length % 2 === 0){
    // answer = `${s[num-1]}${s[num]}`
    answer = s.substring(num-1, num+1)
  }else{
    // answer = s[num];
    answer = s.substring(num, num+1)
  }
  return answer;
}
console.log(solution("good"));
