// hoisting
if (true){
    let a = 10 
    if (true){
        console.log(10) // 여기는 10이 찍히겠고
        const a = 20
    }
    console.log(a) // 두번째로 여기는 20이 찍히겠지, 왜...왜지?
}
console.log(a)  // 우선 내 생각대로라면 여기는 안찍혀야하고

/*
< 출력된 값 >
10
10 , 여기가 지역 개념이라 안 바뀐건가?... 
다음 부분은 안찍힘  
*/