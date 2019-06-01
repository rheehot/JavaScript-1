{
    let a = 1
    a = 2
    console.log(a)
    const PI = 3.141592
    // PI = 3.14, 먼저 선언해둔 상수변수에는 값을 할당 하지 못함
    // const THOR, 상수 변수는 선언시 값을 할당 해야한다.
    // THOR = "GOOD BOY" // 그래서 이 아래 부분은 다 무쓸모
    // console.log(THOR)
    console.log(PI)
}

let cArray = []
for (let i=0;i<10;i++){
    if ( i < 4) {
    cArray.push(i)
    } else {
        break
    }
}
console.log(cArray)
for (let a in cArray){
    console.log(a)
}

let test_num = 0
test: for(let i=0;i<10;i++){
    if (i == 5){
        continue test;
        // 바로 test 부분을 실행하기 때문에 i가 5일때 test_num에 카운팅 하는 부분을 넘어간다.
    }
    console.log(i)
    test_num++;
}
console.log("카운팅 되는 횟수 : ",test_num) //9가 찍힘 ㅎ..

// 왐마 이건 또 되네 신기하네..
const OBJ = {
    prop1 : 1,
    prop2 : 2
}
OBJ.prop1 = 3
console.log(OBJ.prop1)

