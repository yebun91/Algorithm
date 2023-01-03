function solution(num) {
  let answer = [];
  // for (x of num) {
  //   let rev = Number(x.toString().split("").reverse().join(""));
  //   if (isPrime(rev)) answer.push(rev);
  // }
  for (let x of num) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }

  return answer;
}
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
