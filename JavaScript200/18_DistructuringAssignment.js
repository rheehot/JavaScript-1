// 비 구조화 오버레이는 배열이나 객체의 값을 새로운 변수에 쉽게 할당
var obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

var { a, c } = obj;
console.log(a)
console.log(c)

console.log("------------------------")
var { a: newA = 10, f: newF = 5000 } = obj;
//default 값이 선언 되어있지 않으면 newF에 정해진 5가 들어가게된다.
console.log(newF)
// newA의 경우 a의 값이 정해져있기 때문에 10이라는 값이 저장 안됌
console.log(newA)

console.log("------------------------")
// 배열 비구조화 할당 방식은 튜플형태에서 배열 형태로 바꾸어 가능
var arr = [1, 2, 30, 44, 5];
var [b, c, ...test] = arr;
//...을 통해 나머지 부분 저장 가능
console.log(b)
console.log(c)
console.log(test) // 나머지 값 저장

console.log("------------------------")
var [a=10,f=9] = [1];
console.log(a)
console.log(f)
// 아래 소스코드는 무슨 의미에서 안되지..?
// console.log("a,f Swap")
// [a, f] = [f, a];
// console.log(a)
// console.log(f)

console.log("------------------------")
function getArr() {
    return [1,2,3,4,5,6];
}
[a, , , , , f] = getArr();
console.log(a)
console.log(f)