function solution(n, k) {
  let answer = 0;
  let nArray = Array.from({ length: n }, (v, i) => i + 1);

  while (nArray.length) {
    for (let i = 1; i < k; i++) {
      nArray.push(nArray.shift());
    }
    nArray.shift();
    if (nArray.length === 1) {
      answer = nArray.shift();
    }
  }

  return answer;
}

console.log(solution(8, 3));
