//211029-array3.js(Array.map, Array.filter)

function User(id, name, point) { //U 대문자가 생성자를 의미
    this.name = name;
    this.id = id;
    this.point = point;
}

const users = [new User('user1', '사용자', 90),
    new User('user2', '사용자2', 110),
    new User('user3', '사용자3', 200),
    new User('user4', '사용자4', 30)
];

console.log(users);

const newUsers = users.map(function (val, ind, ary) {
    let newObj = {};
    newObj.uid = val.id;
    newObj.uname = val.name;
    newObj.score = val.point;
    newObj.idx = ind;
    // return val.id +'-' + val.name;
    return newObj;
})

console.log(newUsers);

const filterUsers = newUsers.filter(function (val, ind) {
    return val.idx; // true or false 
    // return val.idx > 1; // 참이면 리턴  
}); //return 하는 값이 참이면 

console.clear(); //츨력한거 지움
console.log(filterUsers);

//------------------------------------다음주에 다시----------------------------------
let sum = filterUsers.reduce(function (initVal, obj, ind) {
    // if(ind != 0) {
    //     // console.log(initVal, obj, ind);
    //     console.log(initVal[ind - 1].uid, obj.uid);
    // }
    console.log(initVal, obj, ind);
    initVal.push(obj);
    return initVal;
}, [])
console.log(sum); //첫번째 

let ret = function sum(num1, num2) {
    return num1 + num2;
}

ret = (num1, num2) => {
    return num1 + num2;
}
// 함수를 위와 같이 간략하게 사용하기 위함.
// 위와 같이 사용도 되고, 더 간략하게 아래와 같이도 된다.

ret = (num1, num2) => num1 + num2;
// 함수 내용이 한줄인 경우, { } 괄호도 생략이 가능하고, 'return'도 생략이 가능하다.
// Method의 매개값으로 들어가는 함수 = callback함수.

let trueOrFalse = [45, 4, 9, 16, 25].every(function(val, ind, ary) {
    // method 'every()' = 전체 요소들에 대해서 true / false 를 return 하는 함수.
    // 즉, 배열 안의 모든 요소가 주어진 판별 함수를 통과할 수 있는지 없는지를 판단.
    return val > 10;
});
console.log(trueOrFalse);

trueOrFalse = [45, 4, 9, 16, 25].some(function(val, ind, ary) {
    // method 'sum' = 요소들 중, 어느 하나라도 주어진 조건을 만족하는지 판단하는 Method.
    // 즉, 배열 안의 모든 요소 중 어느 하나라도 주어진 판별 함수를 통과할 수 있는지 없는지를 판단.
    return val > 10;
});
console.log(trueOrFalse);

const fruits = ['Apple','Orange','Apple','Mango'];
console.log(fruits.indexOf('Apple', 1));
// method 'indexOf' = 요소들 중, 찾고자 하는 데이터가 몇 번 Index 있는지 return.
// 없을 경우, -1을 return 하며, 두 번째 매개변수를 지정함으로써, 두 번째 매개변수 부터 찾겠다 도 가능하다.

console.log(fruits.includes('Apple'));
// method 'includes' =  요소들 중, 찾고자 하는 데이터를 가지고 있는지 없는지 true/false 를 return.

console.log(fruits.find(function(val, ind, ary) {
    return val == 'Apple';
}));
// method 'find' = 요소들 중, 찾고자 하는 데이터가 있으면 그 데이터를 그대로 return.

console.log(fruits.findIndex(function(val, ind, ary) {
    return val == 'Apple';
}));
// method 'findIndex' = 요소들 중, 찾고자 하는 데이터가 있는 Index번호를 return.
// indexOf와는 다르게, findIndex에는 매개변수로 callBackFunction이 들어와야 한다.

console.log(Array.from('ABCD'));
// method 'from' = 문자열을 Array Type으로 바꿔주는 method.

console.log('ABCD'.split(""));
console.log('A,B,C,D'.split(","));
// method 'split' = 문자열을 split의 매개변수를 기준으로 ArrayType으로 바꿔주는 method.

console.log(fruits.keys());
for(let x of fruits.keys()) {
    console.log(x);
}
// method 'keys' = key값만을 가지고 오는 method. 배열에서 key값은 Index번호.

let user1 = new User('user1', '사용자1', 90);
for(let x of user1.keys()) {
    console.log(x);
}
// 위의 코드는 실행이 안된다. 왜냐하면 object에는 keys라는method가 없기 때문에.

