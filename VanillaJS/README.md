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