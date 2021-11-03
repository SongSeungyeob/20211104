// array5.js
/* 
 * 요소(tag)생성 : document.createElement('element'); 
                   - element에 태그명 ex) 'li', 'ul' ...
 * 상위요소 > 하위요소 : 상위요소.appendChild(하위요소);
 */

function User(id, name, point) {
    this.name = name;
    this.id = id;
    this.point = point;
}

const users = [
    new User('user1', '사용자1', 90),
    new User('user2', '사용자2', 110),
    new User('user3', '사용자3', 200),
    new User('user4', '사용자4', 30),
];

let data = ['name', 'id', 'point'];

function createListbyUL() {
    let ulTag, liTag;

    for (let user of users) {
        ulTag = document.createElement('ul');
        for (let i = 0; i < 3; i++) {
            liTag = document.createElement('li');
            liTag.innerHTML = user[data[i]];
            ulTag.appendChild(liTag);
        }
        document.getElementById('show').appendChild(ulTag);
    }
}

function createListbyTable() {
    let tableTag, headTag, bodyTag, trTag, thTag, tdTag;
    tableTag = document.createElement('table');
    tableTag.style.border = "3px solid red";
    tableTag.style.textAlign = "center";
    tableTag.style.borderCollapse = "collapse";
    headTag = document.createElement('thead');
    trTag = document.createElement('tr');
    
    tableTag.appendChild(headTag);
    headTag.appendChild(trTag);
    for (let i = 0; i < 3; i++) {
        thTag = document.createElement('th');
        thTag.innerHTML = data[i];
        thTag.style.border = "2px solid black";
        trTag.appendChild(thTag);
    }

    bodyTag = document.createElement('tbody');
    tableTag.appendChild(bodyTag);
    for (let user of users) {
        trTag = document.createElement('tr');
        for (let i = 0; i < 3; i++) {
            tdTag = document.createElement('td');
            tdTag.innerHTML = user[data[i]];
            tdTag.style.border = "1px solid black";
            tdTag.style.width = "250px";
            trTag.appendChild(tdTag);
        }
        bodyTag.appendChild(trTag);
    }
    document.getElementById('show').appendChild(tableTag);
    console.log(tableTag);
}

document.write('<div id="show"></div>');
document.write('<button onclick="createListbyUL()">List 형식으로 생성</button>')
document.write('<button onclick="createListbyTable()">Table 형식으로 생성</button>');
