const calculator = {
    plus: function(a, b){
        return a+b;
    },
    minus: (a,b) => {
        return a-b;
    },
    absoluteValue: (a) =>{
        return a>0?a:-a
    }
}

const plusResult = calculator.plus(10,5)
const minusResult = calculator.minus(5,10)
const absoluteResult = calculator.absoluteValue(-5)

console.log(plusResult,minusResult,absoluteResult)