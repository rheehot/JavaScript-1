for (var i=0; i<5;i++){
    console.log((i+1)+"번째 문장입니다.");
}

var hometown = [
    {name : "한솔", place:"경상도", city:"부산"},
    {name : "또르", place:"전라도"},
    {name : "소르", place:"강원도", city:"동해"},
    {name : "최한", place:"경기도", city:"일산"}
]

for (var i=0; i < hometown.length; i++){
    var h = hometown[i];
    //if (!h == !h.city) continue;

    console.log(i + "번째 실행입니다.");

    if (h.name == "한솔"){
        console.log(h.name + " 의 고향은"+h.place+' '+h.city+"입니다.");
        break;
    }
}