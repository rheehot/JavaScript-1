var value = 0
var obj = {
  value: 1,
  setValue: function () {
    this.value = 2;
    (() => {
      this.value = 3
    })(); //마지막 ()을 통해 함수가 실행 되어야 3으로 변경됨, () 부분이 사라지면, 함수를 실행 시키지 않은 셈
  }
}
console.log("obj value 초기 값 : ",obj.value)
obj.setValue()
console.log("외부의 value 값 : ",value)
console.log("setValue로 변경된 값 : ",obj.value)