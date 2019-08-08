const symbol = Symbol();
const hello = Symbol('hello');

console.log(hello,symbol)
console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
    name : 'jay'
};
user[nationility] = 'korean';
console.log(user[nationility])
for(let key in user){
    console.log(key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user))
console.log(JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]])
console.log(user[symbolProperties[1]])
console.log(user[symbolProperties[3]])

// Symbol은 함수 호출 시 값을 전달할 수 있는 디버깅 용도. 고유 Symbol값은 존재하지 않음
// Symbol 키 존재 for-in 루프를 통해 호출
