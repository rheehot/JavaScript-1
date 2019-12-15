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