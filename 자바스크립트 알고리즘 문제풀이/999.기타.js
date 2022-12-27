const maxNum = Number.MAX_SAFE_INTEGER; //안정적인 아주 큰 숫자
console.log(maxNum);

let arr=[5, 7, 1, 3, 2, 9, 11];
const maxNum2 = Math.min(...arr); //최소값 구하기
console.log(maxNum2);

let addNum = arr.reduce((a,b) => a+b, 0) //모든 값 더하기
console.log(addNum);

