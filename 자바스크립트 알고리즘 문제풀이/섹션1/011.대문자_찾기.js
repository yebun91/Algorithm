function solution(s) {
  let answer = 0;
  for (let str of s) {
    if (str.charCodeAt() < 91 && str.charCodeAt() > 64) answer++;
  }
  // for(let str of s){
  //   if(str === str.toUpperCase()) answer++;
  // }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
