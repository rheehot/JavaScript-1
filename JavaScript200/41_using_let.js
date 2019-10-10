let testScopeValue; // 1. 먼저 let으로 변수를 선언한다.
if (true) {
    console.log(testScopeValue); // undefined, 2. 정의되지 않는 값이 나옴
    testScopeValue = 'test value'; // 3. 스코프 내부에서 외부에 선언된 let 변수에 대해서 값을 넣을 수 있다.
} 
console.log(testScopeValue); // test value, 4. 3의 내용을 출력가능하다.
testScopeValue = 'local area'; // 5. 외부에서 값을 변경할 수도 있다.
console.log(testScopeValue); // local area 6. 결과를 확인 가능하다.

if (true) {
    var functionScopeValue = 'global';
    // let blockScopeValue = 'local';
} // 위 문구는 항상 참이기 때문에 바로 실행되고 각 변수에 우측 항의 값이 저장된다.

console.log(functionScopeValue); // global 이 출력된다.
// console.log(blockScopeValue); //blockScopeValue is not defined

// let 은 지역변수 개념으로 함수나 { } 스코프 안에 있는 곳에서만 효과가 있다.

let funcTest;

function test(value){
    value = "test가 성공적입니다.";
    return value;
}
console.log(funcTest)
test(funcTest); // 값이 들어가게 하고 싶다면 return 을 통해 돌아온 값을 funcTest 에 저장하면 된다.
console.log(funcTest);
test(funcTest)

let funcTest2 = {test : ""}; 

// test 2 함수에서는 test 함수와 동일하게 진행되지만 return 을 선언하지 않았다. 그럼에도 불구하고 값이 저장되는 것을 볼 수 있음
// 따라서 객체안에 저장하는 것을 확연하게 알 수 있음
function test2(value){
    value.test = " test2가 성공적으로 수행되었습니다."
}

test2(funcTest2);
console.log(funcTest2); // funcTest Object에 test라는 키값에 value 가 "test2가 성공적으로 수행되었습니다." 가 들어간다.
