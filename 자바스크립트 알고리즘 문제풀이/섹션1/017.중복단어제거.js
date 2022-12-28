function solution(s) {
  let answer = [];
  // const set = new Set(s);
  // for(let x of set) answer.push(x)

  answer = s.filter((v, i) => { //v는 벨류, i는 인덱스
    if(i === s.indexOf(v)){
      return true; //참인 요소만 모아서 배열로 만듦.
    }
  });
  
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
