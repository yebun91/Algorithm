function solution(n, k) {
  let answer = 0;
  let nArray = Array.from({ length: n }, (v, i) => i + 1);

  while (nArray.length) {
    for (let i = 0; i < k - 1; i++) {
      nArray.push(nArray.shift()); // 1,2 왕자를 맨 뒤로 추가함
    }
    nArray.shift(); // 3왕자를 빼냄
    if (nArray.length === 1) {
      answer = nArray.pop();
    }
  }

  return answer;
}

console.log(solution(8, 3));
