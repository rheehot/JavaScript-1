// let, const?
console.log(a) // let 으로 바꾸면 a 가 정의되지 않았기 때문에 여기서부터 짤
if(true){
    let a =10
    //var a =10
    if(true){
        let a = 20
        //var a = 20
        console.log(a)
    }
    console.log(a)
}
console.log(a)