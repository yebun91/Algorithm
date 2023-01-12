function solution(arr) {
  let answer = arr;
  // answer.sort((a, b) => Number(a) - Number(b));
  for (let i = 0; i < answer.length; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j] < answer[i]) {
        [answer[i], answer[j]] = [answer[j], answer[i]]; //오올 자스 최신문법~!
      }
    }
  }
  //선택 정렬
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
