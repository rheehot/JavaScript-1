let sum = 0
for (let i = 1; i<=10;i++){
    sum += i
}
console.log(sum) 
// 어짜피.. i는 지역개념이라 안나오니까

{
    let a = 2
    if (a > 5){
        let b = a * 3
        console.log(b)
    } else{
        let b = a / 2
        console.log(b)
    }
    //console.log(b), 여기는 어짜피 출력 안됌
}

// Math.random ?
{
    for(let i=0; i<=10; i++){
        console.log(Math.random())
    }
}
// 위의 함수 결과 값 , 매번 달라짐
/*
0.8103028847806619
0.2575070356206206
0.8721102857255141
0.1631490846285253
0.9060980162772454
0.33663279941515145
0.9852004414094284
0.3477362334358636
0.7770399320277277
0.2102870541789037
0.002914542110729279
*/

// Math.random()함수는 위의 결과값처럼 0보다 크고 1보다 작은 값에서만 나오니까
if (Math.random()<0.5){
    let j = 0
    console.log(j)
} else{
    let j = 1
    console.log(j)
}
