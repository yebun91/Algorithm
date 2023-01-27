function solution(today, terms, privacies) {
  let answer = [];
  const todayArray = today.split(".").map(Number);
  let termsArray = {};
  let privaciesArray = [];

  for (let x of terms) {
    const month = x.split(" ");
    termsArray[month[0]] = month[1];
  }
  for (let x of privacies) {
    let lists = x.substring(0, 10).split(".").map(Number);
    let insert = [];
    insert.push(x.charAt(x.length - 1), lists);
    privaciesArray.push(insert);
  }

  for (let i = 0; i < privaciesArray.length; i++) {
    let Validity = privaciesArray[i][1];
    if (12 < Number(termsArray[privaciesArray[i][0]]) + privaciesArray[i][1][1]) {
      Validity[1] = Number(termsArray[privaciesArray[i][0]]) + privaciesArray[i][1][1] - 12;
      Validity[0]++;
      while (Validity[1] > 12) {
        Validity[0]++;
        Validity[1] = Validity[1] - 12;
      }
      
    } else {
      Validity[1] = Number(termsArray[privaciesArray[i][0]]) + privaciesArray[i][1][1];
    }
    for (let j = 0; j < 3; j++) {
      if (todayArray[j] > Validity[j]) {
        answer.push(i + 1);
        break;
      } else if (todayArray[j] < Validity[j]) {
        break;
      } else if (j === 2 && (todayArray[j] = Validity[j])) {
        answer.push(i + 1);
        break;
      }
    }
  }

  return answer;
}