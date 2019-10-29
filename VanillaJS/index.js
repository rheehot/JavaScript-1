const string_test = "hansol_choi";
console.log(typeof string_test); //string
//const string_test2 = hansol_choi; //Uncaught ReferenceError: hansol_choi is not defined at index.js:2
    /*hansol_choi 라고 문자를 입력했지만, 이것은 변수 취급을 받게 되고 프로그램은 이를 찾지 못하고 Error를 발생 시키게 된다.*/
const bool_test = true;
const bool_test2 = false;
console.log(typeof bool_test, typeof bool_test2); // boolean boolean
console.log(bool_test, bool_test2); // true false
const value = 10; // int
const value2 = 3.141592; // float
console.log(typeof value, typeof value2); // number number
console.log(value, value2); // 10 3.141592