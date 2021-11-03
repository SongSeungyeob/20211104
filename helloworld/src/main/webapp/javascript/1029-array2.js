// array2.js
const numbers = [3, 34, 28, 12, 5];

let sum = 0;
numbers.forEach(function (val, ind, ary) {
    if (val > 10) {
        sum += val;
    }
    // document.write(`<h1>${val}</h1>`);
});

console.log(`합계 : ${sum}`);

function User(id, name, point) {
    /* 함수 이름명 앞글자를 대문자로 쓰는 이유는
       생성자를 구현하는 함수라는 것을 의미하기 위해서.
      */
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
console.log(users);

let str = '<h1>회원 리스트</h1>';
str += '<table border="1">';
str += '<tbody>';
users.forEach(callBackFnc);
str += '</tbody></table>';
// document.write(str);
// 함수에 함수명() 이렇게 되있는 것은 그 함수를 바로 실행시키라는 것을 의미한다.
// 함수명만 적어버리면 바로 실행시키는 것이 아니다.

// users.forEach(function (val, ind, ary) {
//     str += '<tr><td>' + val.id + '</td><td>' + val.name + '</td><td>' + val.point + '</td></tr>';
// });

function callBackFnc(val, ind, ary) {
 str += '<tr><td>' + val.id + '</td><td>' + val.name + '</td><td>' + val.point + '</td></tr>';
}

document.write('<button onclick="createList()">생성</button>');
document.write('<div id="show"></div>');

function createList() {
    let fruits = ['Apple', 'Banana', 'Cherry'];
    let ulTag, liTag;

    ulTag = document.createElement('ul');
    for (let fruit of fruits) {
        liTag = document.createElement('li');
        liTag.innerHTML = fruit;
        liTag.id = fruit.toLowerCase();
        ulTag.appendChild(liTag);
    }
    // liTag = document.createElement('li');
    // liTag.innerHTML = 'Apple';
    // liTag.id = 'apple';
    // ulTag.appendChild(liTag);   // 부모 요소에 하위요소를 붙인다.

    // liTag = document.createElement('li');
    // liTag.innerHTML = "Banana";
    // liTag.id = 'banana';
    // ulTag.appendChild(liTag);

    // liTag = document.createElement('li');
    // liTag.innerHTML = "Cherry";
    // liTag.id = 'cherry';
    // ulTag.appendChild(liTag);

    // document.getElementById("show").appendChild(ulTag);
    console.log(ulTag);
}

function showList() {
    let str = '<h1>회원 리스트</h1>';
    str += '<table border="1">';
    str += '<tbody>';
    users.forEach(callBackFnc);
    str += '</tbody></table>';
    document.write(str);
}




