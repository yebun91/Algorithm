function solution(str1, str2) {
  let answer = "YES";
  if (str1 === "" && str2 === "") return answer;
  if (str1.length !== str2.length) return "NO";

  let strObject1 = {};
  for (alphabat of str1) {
    strObject1[alphabat] ? (strObject1[alphabat] += 1) : (strObject1[alphabat] = 1);
  }
  for (alphabat of str2) {
    if (!strObject1[alphabat]) {
      return "NO";
    } else {
      strObject1[alphabat] -= 1;
    }
  }
  return answer;
}

// let a = "AbaAeCe";
// let b = "baeeACA";
let a = "abaCC";
let b = "CaaAb";
console.log(solution(a, b));
