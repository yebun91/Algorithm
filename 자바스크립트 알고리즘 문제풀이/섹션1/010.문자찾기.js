function solution(s, t){
    let a = {};
    for(let str of s){
        if(a[str]) a[str]++;
        else a[str] = 1;
    }
    return a[t];
}

let str="COMPUTERPROGRAMMINGS";
console.log(solution(str, 'R'));

function solution2(s, t){
    let answer = s.split(t) // 와우 똑또캐!
    return answer.length-1;
}

console.log(solution2(str, 'S'));