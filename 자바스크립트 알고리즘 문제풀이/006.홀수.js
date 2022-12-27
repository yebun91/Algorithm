function solution(arr){
    let sumNum = 0;
    let minNum = Number.MAX_SAFE_INTEGER;
    for(let num of arr){
        if(num % 2 !== 0){
            sumNum += num;
            if(minNum > num) minNum = num;
        }
    }
    let answer = [sumNum, minNum];
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));