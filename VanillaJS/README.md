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
    ``` css
    body{
        background-color:powderblue;
    }
    ```
    3. index.js
    ``` js
        alert('Test Message');
    ```

### Step 2. Variable (변수)
- What is Variable?
    ``` js
    a = 112; 
    b = a - 5;
    alert(b);
    ```
- 보다 정확한 표현 방법
    ``` js
    let a = 112;
    let b = a - 5;
    alert(b);
    ```
- 변수의 type은 만들때 한번만 사용한다.

### Step 3. More Variable. let, const, var (더 다양한 변수들)
- const : constant. means stable, not change.
    ``` js
    const a = 112;
    let b = a - 5;
    a = 10; // Uncaught TypeError : Assignment to constant variable. at index.js:3
    alert(a);
    ```
- let : value is can change.
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