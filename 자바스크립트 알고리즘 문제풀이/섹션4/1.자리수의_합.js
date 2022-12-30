function solution(n, arr) {
  let answer = 0;
  let maxNum = 0;
  // for (x of arr) {
  //   let str = x + "";
  //   let num = 0;
  //   for (y of str) {
  //     num += parseInt(y);
  //   }
  //   if (num >= maxNum) {
  //     maxNum = num;
  //     if (x > answer) {
  //       answer = x;
  //     }
  //   }
  // }

  for (x of arr) {
    let sum = 0;
    let tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum >= maxNum) {
      maxNum = sum;
      if (x > answer) {
        answer = x;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
