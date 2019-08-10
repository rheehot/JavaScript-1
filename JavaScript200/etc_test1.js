function test(name){
    if (typeof name !== 'string') throw 'Error Test';
    console.log(name+"은 string 타입이 맞습니다.")
}

try{
    test("한솔");
    test(123456);
} catch(e){
    console.log("error : " +e);
} finally {
    console.log("완료")
}