function checkNumber(val) {
    if (typeof val !== 'number' ) throw '유효하지 않은 값입니다.';
    console.log("숫자형 타입입니다.")
}

try{
    checkNumber(100);
    checkNumber("Wrong Type");
} catch (e) {
    console.log(`에러발생 ${e}`);
} finally {
    console.log('완료');
}