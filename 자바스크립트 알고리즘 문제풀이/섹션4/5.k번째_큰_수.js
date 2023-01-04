function solution(n, k, card) {
  let answer;
  let set = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j) {
        for (let k = 0; k < n; k++) {
          if (k != j && k != i) {
            set.add(card[i] + card[j] + card[k]);
          }
        }
      }
    }
  }
  let arr = Array.from(set).sort((a, b) => b - a);
  answer = arr[k - 1];
  return answer;
  // 아니 똑같네;;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
