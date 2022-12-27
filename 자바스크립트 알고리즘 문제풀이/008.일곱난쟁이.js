function solution(arr){
    let result = arr;
    let addNum = result.reduce((a,b) => a+b, 0)

    for(let i=0; i<arr.length-1; i++){
        for(let j=1; j<arr.length; j++){
            if(addNum-(arr[j]+arr[i]) === 100 ){
                result.splice(j, 1);
                result.splice(i, 1);
            }
        }
    }
    
    return result;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));