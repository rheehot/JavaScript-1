function test(name){
    if (typeof name !== 'string') throw 'Error Test';
    console.log(name+"은 string 타입이 맞습니다.")
    return name;
}

function test2(name){
    console.log(name + "값의 예외처리를 정상적으로 마쳤습니다.")
}

var name;

// 에러가 발생하면, catch에서 끝내고
// 에러가 발생하지 않았다면 test2함수 실행됌 ( finally로 넘어간다는 말 )
try{
    name = test("한솔");
    name = test(123456);
} catch(e){
    console.log("error : " +e);
} finally {
    test2(name);
    // console.log("완료")
}