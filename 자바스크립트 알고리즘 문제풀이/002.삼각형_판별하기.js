function solution(a, b, c){
    let sumNum = a+b+c;
    let maxNum;
    let answer = "NO";

    if(a>b)maxNum = a;
    else maxNum = b;
    if(maxNum<c) maxNum = c;
    if((sumNum - maxNum) > maxNum) answer = "YES"
     
    return answer;
}

console.log(solution(13, 33, 17));