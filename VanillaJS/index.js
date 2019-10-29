const thorrInfo = {
    name : "Hansol",
    age : 25,
    gender : "Male",
    isStudents : true,
    favFood: [
        {
            name : "Rice",
            fatty : false
        },
        {
            name : "Burger",
            fatty : true
        }
    ]
}

// check thorrInfo's  Data
console.log(thorrInfo);

// check thorrInfo's Details Data
console.log(thorrInfo.age);

// change thorrInfo's age Data
thorrInfo.age = 26
console.log(thorrInfo.age)

// check thorrInfo's Data
console.log(thorrInfo)

// check thorrInfo's Details Array Data
console.log(thorrInfo.favFood)
console.log(thorrInfo.favFood[0])