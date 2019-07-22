// 자바스크립트에서는 변수의 형태가 어떤 형태인지 결정하지 않아도 된다.
// 이를 동적 바인딩(Dynamic Binding)이라 합니다.
// string 변수
var name = "Hansol"
//int 형 변수
var number = 200
// bool 타입 변수
var isTrue = true
// 비어있는 변수 생성
var nothing = null
// 정의되지 않은 것 생성
var empty = undefined
// 리스트 생성
var list = []
// ref가 뭐지?..
var ref = {}
// 함수 변수?
var func = function(){}

// 1. null 과 undefined 의 차이?
console.log(nothing,empty)
console.log(typeof(nothing),typeof(empty))
console.log("undefined은 등록되어 있지 않기 때문에 초기화 조차 되지 않은 형태?")
console.log("null은 의미없는 값이 저장되어 있는 것")
// 2. ref 변수에 담긴 것이 무엇인가?
console.log(ref)
console.log(typeof(ref))
console.log("객체를 저장한 것이다.")