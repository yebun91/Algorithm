function solution(s) {
  let answer;
  let sh = {};
  let max = 0;
  for (x of s) {
    if (sh[x]) {
      sh[x]++;
    } else {
      sh[x] = 1;
    }
  }
  Object.keys(sh).find((key) => {
    if (sh[key] > max) {
      max = sh[key];
      answer = key;
    }
  });

  // let sH = new Map();
  // for (let x of s) {
  //   if (sH.has(x)) sH.set(x, sH.get(x) + 1); //sH.has(x) sH 에 x라는 키가 있는지
  //   else sH.set(x, 1);
  // }
  // let max = Number.MIN_SAFE_INTEGER;
  // for (let [key, val] of sH) {
  //   if (val > max) {
  //     max = val;
  //     answer = key;
  //   }
  // }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
