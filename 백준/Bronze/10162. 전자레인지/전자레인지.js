const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
    let answer = "";
    let temp = Number(input);
    
    const a = 300;
    const b = 60;
    const c = 10;
    
    answer += `${parseInt(temp/a)} `;
    temp = temp % a;
    answer += `${parseInt(temp/b)} `;
    temp = temp % b;
    answer += parseInt(temp/c);
    temp = temp % c;
    
    if(temp) answer = "-1";
    return answer;
}
console.log(solution(input));