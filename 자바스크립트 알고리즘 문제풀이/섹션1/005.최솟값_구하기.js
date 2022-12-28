function solution(arr){         
    let answer = arr[0];
    for(num of arr){
        if(answer > num) answer = num;
    }
    return answer;
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

function solution2(arr){         
    let answer = Math.min(...arr);
    console.log(Math.max(...arr))
    return answer;
}

console.log(solution2(arr));

function solution3(arr){         
    let answer = Math.min.apply(null, arr);
    return answer;
}
console.log(solution3(arr));