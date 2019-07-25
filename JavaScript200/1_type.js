var x = 5; // 숫자형
var y = 'five'; // 문자형
var isTrue = true; // Boolean 형
var empty = null; // null
var noting; // undefined
var sym = Symbol('me'); 
// Symbol ES6에서 추가된 원시 자료형,변경 불가능한 자료형, 참조형의 키로 사용 가능
console.log(sym)
var item = {
    price : 5000,
    count : 10
};

var fruits = ['apple','orange','banana'];
var addFruit = function (fruit) {
    fruits.push(fruit);
} // 함수
addFruit('watermelon');
console.log(fruits);