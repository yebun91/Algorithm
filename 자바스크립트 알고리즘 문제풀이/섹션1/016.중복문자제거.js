function solution(s) {
  let answer = "";
  // const sList = [...s];
  // const set = new Set(sList);
  // for(x of set){
  //   answer += x
  // }

  for(let i=0; i<s.length; i++){
    if(i === s.indexOf(s[i])) answer += s[i]
  }
  
  return answer;
}
console.log(solution("ksekkset"));
