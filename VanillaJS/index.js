const title = document.querySelector("#title");

const BASE_COLOR = "#rgb(52,73,94)";
const OTHER_COLOR = "#000";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
        console.log(title.style.color)
    }else{
        title.style.color = BASE_COLOR;
        console.log(title.style.color)
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();