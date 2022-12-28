function solution(s){
    let answer = "";
    for(let str of s){
        if(str === "A") answer += "#"
        else answer += str
    }
    return answer;
}

let str="BANANA";
console.log(solution(str));

function solution2(s){
    let answer = s; //string은 값이 복사됨. 얕은복사 ㄴㄴ
    answer = answer.replace(/A/g, "#");
    return answer;
}

console.log(solution2(str));