const fs = require("fs");
let [N, ...list] = fs.readFileSync("test.txt").toString().trim().split(/\s+/).map(Number);

const solution = (l) => {
  console.log(N, list);

  let answer = 0;
  let arrow = new Array(100000000).fill(0);
  for (let i of l) {
    if (arrow[i]) {
      arrow[i]--;
      arrow[i - 1]++;
    } else {
      answer++;
      arrow[i - 1]++;
    }
  }
  return answer;
};

console.log(solution(list));

// https://pstudio411.tistory.com/entry/%EB%B0%B1%EC%A4%80-%EB%B0%B1%EC%A4%80%EC%9D%84-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%9C-nodejs-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
