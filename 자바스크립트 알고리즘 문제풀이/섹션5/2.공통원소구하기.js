function solution(arr1, arr2) {
  let answer = [];
  // let obj = {};
  // for (x of a) {
  //   if (!obj[x]) {
  //     obj[x] = 1;
  //   } else {
  //     obj[x]++;
  //   }
  // }
  // for (y of b) {
  //   if (!obj[y]) {
  //     obj[y] = 1;
  //   } else {
  //     obj[y]++;
  //   }
  // }

  // Object.keys(obj).find((key) => {
  //   if (obj[key] > 1) {
  //     answer.push(Number(key));
  //   }
  // });

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  const n = arr1.length;

  while (p1 < n && p2 < n) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
