function solution(ingredient) {
  let answer = 0;
  let arr = [];

  for (x of ingredient) {
    arr.push(x);
    let len = arr.length;
    if (len >= 4) {
      if (JSON.stringify(arr.slice(len - 4, len)) === "[1,2,3,1]") {
        answer++;
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
      }
    }
  }

  return answer;
}