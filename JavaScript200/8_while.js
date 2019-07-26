var hometown = [
    {name:'최', city:"부산"},
    {name:'작가',place:"나무",city:"책"},
    {name:"그만",place:"없는데",city:"없어"}
]

var isHometown = function(h,name) {
    console.log(`"함수가 실행되었습니다. ${h.city} 도시에서 ${name}을 찾습니다."`)

    if (h.name === name) {
        console.log(`${h.name}의 고향은 ${h.city} ${h.place}입니다.}`);
        return true;
    }
    return false;
}

var h;
while (h = hometown.shift()){
    if (!h.name ||!h.place || !h.city) continue;
    var result = isHometown(h, '한솔');
    if (result) break;
}

var i = 0;
var names = ["최","없음","그만","집가"]
var cities = ["부산","벗슴","책","나무"]
do {
    hometown[i] = {name: names[i], city:cities[i]};
    i++;
} while (i < 4);

console.log(hometown)