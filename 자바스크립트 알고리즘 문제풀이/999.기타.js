const maxNum = Number.MAX_SAFE_INTEGER; //안정적인 아주 큰 숫자
console.log(maxNum);

let arr = [5, 7, 1, 3, 2, 9, 11];
const maxNum2 = Math.min(...arr); //최소값 구하기
console.log(maxNum2);

let addNum = arr.reduce((a, b) => a + b, 0); //모든 값 더하기
console.log(addNum);

Math.ceil, Math.floor, Math.round;
// 올림 내림 반올림

"good".substring(1, 2); //문자열 자르기

"good".indexOf("d"); //문자 위치 찾기

Array.from("ddd"); //["d", "d", "d"]

Array.from([1, 2, 3], (x) => x + x); //[2, 4, 6]

Array.from({ length: 5 }, () => 1); // [1, 1, 1, 1, 1]

Math.max(11, 23, 44); // 44

"abcd".split("").reverse().join(""); //dcba 문자열 뒤집기
