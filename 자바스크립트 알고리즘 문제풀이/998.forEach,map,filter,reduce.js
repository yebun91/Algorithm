// forEach : for반복문 대신 사용하는 뇨석
// function forEach(함수, this로사용할것){
//     for(let i=0; i<a.length; i++){
//         함수(a[i], i);
//     }
// }
a = [10, 11, 12, 13, 14, 15];

a.forEach(function(v, i){
    // v는 a배열의 요소 i는 요소의 인덱스값
    console.log(v, i, this);
}, [1, 2]);


// function map(predicate, thisArg){
//     let list=[];
//     for(let i=0; i<a.length; i++){
//         list.push(predicate(a[i],i))
//     }
//     return list;
// }

let answer = a.map(function(v,i){
    if(v%2 ===0) return v;
    // return v*v;
},[1,2]);
console.log(answer);

let answer2 = a.filter(function(v,i){
    return v%2 === 0; //계산 값이 true 이면 리턴됨.
},[1,2]);
console.log(answer2);

// function reduce(predicate, value){
//     let result = value;
//     for(let i=0; i<a.length; i++){
//         result = predicate(result, a[i])
//     }
//     return result;
// }

//return 값을 계속해서 누적시킴
let answer3 = a.reduce(function(acc,v){ 
    return acc + v;
},0);
console.log(answer3);