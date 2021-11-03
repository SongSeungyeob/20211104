const obj = {
    name: 'Hong',
    age: 23,
    score: 90,
    getScore: function () {
        return this.score;
    }
};
console.log(obj.getScore());

function Student(name, math, eng) {
    this.name = name;
    this.math = math;
    this.eng = eng;
    this.getMathScore = function() {
        return this.math;
    }
    this.getEngScore = function() {
        return this.eng;
    }
    this.getName = function () {
        return this.name;
    }
}

const s1 = new Student('홍길동', 80, 70);
let result = s1.getMathScore();
console.log(result);
console.log(s1.getName() + " , " + s1.getEngScore() + " , " + s1.getMathScore());


console.log(result);
class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    showColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getInfoByDom() {
        // let tr = document.createElement('tr');
        // let td = document.createElement('td');
        // td.innerHTML = this.name;
        // let td2 = document.createElement('td');
        // td2.innerHTML = this.color;
        // tr.append(td, td2);
        return this.getRowByTr();
    }
    getRowByTr() {
        let tr = document.createElement('tr');
        tr.appendChild(this.getNameByTd());
        tr.appendChild(this.getColorByTd());
        return tr;
    }
    getNameByTd() {
        let td = document.createElement('td');
        td.innerHTML = this.name;
        return td;
    }
    getColorByTd() {
        let td = document.createElement('td');
        td.innerHTML = this.color;
        return td;
    }
}

const sonata = new Car('쏘나타', '흰색');
const avante = new Car('아반떼', '검은색');
let color = sonata.showColor();
console.log(color);

sonata.setColor('검은색');
color = sonata.showColor();
console.log(color);

document.write('<table border="1" id="tb1"</table>');
document.getElementById("tb1").appendChild(sonata.getInfoByDom());
document.getElementById("tb1").appendChild(avante.getInfoByDom());