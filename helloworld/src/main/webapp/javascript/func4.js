// func4.js

const persons = [
    {
        name: '송승엽',
        eng : 80,
        math : 90,
        grade : 'A'
    },
    {
        name: '홍길동',
        eng: 85,
        math: 95,
        grade : 'A+'
    },
    {
        name: '최예담',
        eng: 90,
        math: 88,
        grade : 'B'
    }
];

function makeTr(obj) {
    let str = '';
    str += '<tr>';
    str += '<td> ' + obj.name + '</td>';
    str += '<td> ' + obj.eng + '</td>';
    str += '<td> ' + obj.math + '</td>';
    str += '</tr>';

    let str2 = '<tr>';
    for(let field in obj) {
        str2 += '<td>' + obj[field] + '</td>';
    }
    str2 += '</tr>';
    return str2;
}

function makeHead(obj) {
    let tr = '<tr>';
    for(let field in obj) {
        tr += '<th>' + field + '</th>'
    }
    tr += '</tr>';
    return tr;
}

let str = '<table border="1"><tbody>';
str += makeHead(persons[0]);
for(let i = 0 ; i < persons.length; i++) {
    str += makeTr(persons[i]);
}
str += '</tbody></table>';
document.write(str);