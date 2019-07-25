function hasValue(p){
    console.log(v)
    if(p){
        var v = 'blue'
        console.log(v)
    }else{
        var v = 'red'
        console.log(v)
    }
    console.log(v)
}

function hasValue2(p){
    console.log(v)
    if(p){
        let v = 'blue'
        console.log(v)
    }else{
        let v = 'red'
        console.log(v)
    }
    console.log(v)
}

console.log("ver1")
hasValue(10)
console.log("ver2")
hasValue2(10)