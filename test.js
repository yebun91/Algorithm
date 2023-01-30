const [len, arr] = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (start, arr) => {
  let snakLen = start;
  let sortArr = arr.sort((a, b) => a - b);
  console.log(sortArr);

  for (let x of sortArr) {
    console.log(snakLen);

    if (snakLen >= x) {
      snakLen++;
    } else {
      break;
    }
  }

  return snakLen;
};

console.log(
  solution(
    len.toString().trim().split(" ")[1],
    arr.toString().trim().split(" ").map(Number)
  )
);

// https://pstudio411.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%B0%B1%EC%A4%80%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-nodejs-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
