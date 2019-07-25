// let을 소개한데유.. 
let a = 1
function f () {
  // console.log(a, b, c), b와 c 가 정의되지 않아서 안됌!
	let b = 2
	// console.log(a, b, c), c가 정의 되지 않아서 안됌
	if (true) {
		let c = 3
		console.log(a, b, c)
	}
	// console.log(a, b, c), c가 이전 내부에서 선언되었기 떄문에 외부로 나오게 되면 소멸됌
}
f()

for (let i = 0; i < 5; i++) {
    console.log(i)
  }
  // console.log(i), 여기의 i도 지역을 벗어 났기 떄문에 안됌!
