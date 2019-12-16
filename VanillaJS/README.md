# 바닐라 자바스크립트 공부

### 왜 바닐라 자바스크립트를 공부해야 하는지 알 수 있는 사이트
http://vanilla-js.com/
- 예쁘고 아름답진 않지만, 모든 JavaScript에 기본이 된다.

### Step 0. Select Editor
- visual stduio code
https://code.visualstudio.com/download

### Step 1. Hello World
- Create index File
    1. index.html

    ./index.html
    ``` html
    <!DOCTYPE html>
    <html>
        <head>
            <title>Something</title>
            <link rel="stylesheet" href="index.css" />
        </head>
        <body>
            <h1>This is Working</h1>
            <script src="index.js"></script></script>
        </body>
    </html>
    ```
    2. index.css

    ./index.css
    ``` css
    body{
        background-color:powderblue;
    }
    ```
    3. index.js

    ./index.js
    ``` js
        alert('Test Message');
    ```

### Step 2. Variable (변수)
- What is Variable?

    ./index.js
    ``` js
    a = 112; 
    b = a - 5;
    alert(b);
    ```
- 보다 정확한 표현 방법

    ./index.js
    ``` js
    let a = 112;
    let b = a - 5;
    alert(b);
    ```
- 변수의 type은 만들때 한번만 사용한다.

### Step 3. More Variable. let, const, var (더 다양한 변수들)
- const : constant. means stable, not change.

    ./index.js
    ``` js
    const a = 112;
    let b = a - 5;
    a = 10; // Uncaught TypeError : Assignment to constant variable. at index.js:3
    alert(a);
    ```
- let : value is can change.

    ./index.js
    ```js
    let a = 112;
    let b = a - 5;
    a = 10;
    alert(a); //alert(10)
    ```
- var : value is can change. It's replaced let and const.

    ./index.js
    ``` js
    var a = 112;
    var b = a - 5;
    a = 10;
    alert(a); //alert(10)
    ```
- 변수가 바뀌어도 된다 : let, 변수가 바뀌면 안된다 : const

### Step 4. Data Types on JS
- console.log : console.log명령을 통해 결과를 확인할 것인데 이는 각 브라우저(Chrome, Internet Explorer 등등..)에서 F12를 눌러 Console 탭을 눌러서 이동 내용을 확인한다.
- comment : maens note. code explanation.

    ./index.js 
    ``` js
    // to do : finish this
    /*
        this is many line comment
        - do study javascript
        - make my blog
        - commit message & push git
        - test code
    */
    const test = "nothing";
    ```
- String : some text save with " ", must in "<<here>>"

    ./index.js
    ``` js
    const stringTest = "hansol_choi";
    console.log(typeof stringTest);
    const stringTest2 = hansol_choi; //Uncaught ReferenceError: hansol_choi is not defined at index.js:2
    /*hansol_choi 라고 문자를 입력했지만, 이것은 변수 취급을 받게 되고 프로그램은 이를 찾지 못하고 Error를 발생 시키게 된다.*/
    ```
- Boolean : only have true & false

    ./index.js
    ``` js
    const boolTest = true;
    const boolTest2 = false;
    console.log(typeof boolTest, typeof boolTest2);
    console.log(boolTest, boolTest2);
    ```
- Number : int, float
    - int : 1,2,3 .. 100, ..., 10000
    - float : 10.131, 3.141597
    ./index.js
    ``` js
    const value = 10; // int
    const value2 = 3.141592; // float
    console.log(typeof value, typeof value2);
    console.log(value, value2);
    ```

### Step 5. Organizing Data with Arrays
- Array : Data Save Storage, like a list

    ./index.js
    ``` js
    // not use array
    const mon = "mon";
    const tue = "tue";
    const wen = "wen";
    const tur = "tur";
    const fri = "fri";
    const sat = "sat";
    const sun = "sun";
    // use array
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    // save another data type is okay
    const saveAnotherData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 10,3.141592];
    console.log(daysOfWeek);
    console.log(daysOfWeek[0]);
    console.log(saveAnotherData);
    ```
    <a href="https://ibb.co/m8R2r83"><img src="https://i.ibb.co/TLw7DLs/It-s-Okay.png" alt="It-s-Okay" border="0" /></a>

### Step 6. Organizing Data with Objects
- Object : Data Save Storage, Differ to Array is Object have key and value. key is naming to value. Key can fetch a value, this is value's codename.

    ./index.js  
    ``` js
   // Create Object
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
     
    ```


※ [ ] : bracket , { } : curly bracket

[Bracket Wikipedia](https://en.wikipedia.org/wiki/Bracket)

※ JavaScirpt 가 문제라도 HTML/CSS 에는 문제가 없다.

### Step 7. What is Function?
함수는 자주 사용되는 코드를 조각화해서 편하게 사용하기 위해 만든다고 이해하면 편하다.
붕어빵을 매번 모양을 만들어서 하는 것보다 판을 만들어서 찍어내는게 빠른 것 처럼.
```javascript
function sayHello(){
    console.log('hello!');
}

sayHello()
```

|Built-In Function vs User Define Function|
|---|
|ex) console.log("Hello") vs function sayHello() { ~~~ } |

customize sayHello Function
```javascript
function sayHello(name, age){
    console.log('Hello!', name);
    console.log('Your age is', age);
}
sayHello("Thorr", 25);
```

Hello! Thorr

Your age is 25

### Step 8. More Functional Function
함수는 어떤 기능을 하는 것이기 때문에 값을 돌려주는 절차가 있고, 그 절차를 return 이라고 한다. 어떠한 변수를 통해 기능을 동작시키고 그것을 동작시키는 절차로 주로 동작한다.

\`<이 내부에 작성되는 문자열은 그대로 작성되고 ${변수명}으로 작성된 것은 변수에 담긴 내용이 표헌되며 \n 같은 예약어들이 동작된다. >\`
```javascript
function sayHello(name, age){
    return `Hello ${name}!\nYour age is ${age}`
}

const myText = sayHello("Thorr", 25)

console.log(myText)
```

함수의 활용은 여기에서 그치지 않고 객체 안에 함수를 넣을 수도 있다.
```javascript
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
```
각각의 결과가 15, -5, 5로 나온다.

### Step 9. JS DOM Functions
JS 파일에서 html의 DOM 구조를 바꿀 수 있다. 
기존의 This is Working의 내용이 Hi! From JS FILE 로 바뀐 것을 확인할 수 있는 실습이다.
```javascript
const title = document.getElementById("title");
title.innerHTML = "Hi! From JS FILE"
```
<a href="https://ibb.co/yqQx5xt"><img src="https://i.ibb.co/TtgNRN6/image.png" alt="image" border="0" /></a>

### Step 10. Modifying the DOM with JS
DOM 구조 내부에 다양한 것들이 존재하고 이것들에 대해 접근할 수 있는 많은 함수들이 document 안에 담겨있다. 매우 많기 때문에 간단한 것들을 실습하고, 나머지의 것들은 찾아서 사용할 필요가 있어 보인다.
index.htm 구조
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css" />
    </head>
    <body>
        <h1 id="title">This is Working</h1>
        <p id="test">
                
        </p>
        <script src="./index.js"></script>
    </body>
</html>
```
index.js 구조 
```javascript
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS FILE"
document.title = 'wow'
document.getElementById("test").innerHTML = "insert text in index.js"
```
위의 소스를 보면 이해하겠지만, html 내부에서 사용된 내용은 없고, js 파일 안에서 변경시킨 내용이 반영되있음을 알 수 있다.
<a href="https://ibb.co/WkSptzx"><img src="https://i.ibb.co/1rHJ6Xv/image.png" alt="image" border="0" /></a>

### Step 11. Event and Event Handler
Event 라고 하는 것은 어떠한 행위로 인해 발생하는 것을 의미한다.
Event Handler는 Event 발생을 감지하고, 그로 인해 수행하는 역할을 하는 역할이다.
```javascript
const title = document.querySelector("#title");
let status = 0; // 전역에다 변수 하나를 선언하고 이를 통해 값을 제어하게 만듬

function handleClick(event){
    status += 1;
    // 클릭시 홀수로 바뀌니 홀수 일때는 파랑, 한번 더 클릭시에는 하얀색으로 되게끔 
    if(status % 2 == 1){
        title.style.color = "blue";
    } else {
        title.style.color = "white";
    }
}

title.addEventListener("click", handleClick);   
```
이렇게 작성한 뒤 title을 클릭해서 어떻게 바뀌는 지 확인하자.

### Step 12. JS Function practice with classList, toggle


**classList**
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css" />
    </head>
    <body>
        <h1 id="title" class="btn">This is Working</h1>
        <script src="./index.js"></script>
    </body>
</html>
```
```css
body{
    background-color:powderblue;
}

h1 {
    color:#34495e;
    transition: color 0.5s ease-in-out;
}

.btn {
    cursor: pointer;
}
.clicked{
    color: #7f8c8d;
}
```
transition : color 0.5s ease-in-out 부분은 애니메이션 효과를 주기 위함이다.
``` javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick);
}

init();
```
위의 실습을 통해서 클래스의 이름이 중복되어 삭제되는 일이 없고, 이를 통해서 클릭시 색이 계속해서 변하는 페이지를 만들었다.

바로 위의 자바스크립트 코드는 매우 긴데 이를 아주 짧게 동작시키는 방법이 있다. 아래 소스로 바꾸어 실행해보자.
```javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();
```
위의 기능과 동일하게 동작한다. 그렇다면 toggle의 매커니즘은 classList의 add와 remove를 사용하는 방법과 같다는 것이다.