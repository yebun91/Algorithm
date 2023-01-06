function solution(s, t) {
  let answer = 0;
  let strObject = {};
  for (alphabat of t) {
    strObject[alphabat] ? (strObject[alphabat] += 1) : (strObject[alphabat] = 1);
  }
  let left = 0;
  let max = "";
  for (let rigth = t.length; rigth < s.length + 1; rigth++) {
    max = s.substring(left, rigth);
    if (isAnagram(max, strObject)) {
      answer++;
    }
    left++;
  }
  return answer;
}

function isAnagram(str, strObject) {
  const copy = Object.assign({}, strObject);
  for (alphabat of str) {
    if (!copy[alphabat]) {
      return false;
    } else {
      copy[alphabat] -= 1;
    }
  }
  return true;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
