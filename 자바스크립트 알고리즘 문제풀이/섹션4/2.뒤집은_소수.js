function solution(num) {
  let answer = [];
  // for (x of num) {
  //   let rev = x.toString().split("").reverse().join("");
  //   const number = isPrime(parseInt(rev));
  //   if (number) answer.push(parseInt(rev));
  // }
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  function isPrime(num) {
    if (num === 1) return false;
    if (num === 2) {
      return true;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
        return false;
      }
    }
    // 나눠진 수가 없다면 해당 수는 소수이므로 return true
    return true;
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
