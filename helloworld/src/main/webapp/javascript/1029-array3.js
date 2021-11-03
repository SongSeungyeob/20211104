// array3.js (Array.map , Arrays.filter)

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
console.log(users);

const newUsers = users.map(function (val, ind, ary) {
    let newObj = {}             // object type만 선언
    newObj.uid = val.id;        // 필드값들을 추가.
    newObj.uname = val.name;
    newObj.score = val.point;
    newObj.idx = ind;
    return newObj;
})
console.log(newUsers);

// filter = 조건을 만족하는 데이터들만 골라내는 역할.
// filter = return 되는 값이 true일 때만 반환.
const filterUsers = newUsers.filter(function (val, ind) {
    return val.idx;
});
console.clear();
console.log(filterUsers);

// // reduce : 가지고 온 데이터들에 대해서 반복적으로 누적값을 구하는 것.
// // return되는 값은 그 다음 요소의 초기값으로 설정이 된다.
// let sum = filterUsers.reduce(function (prevObj, curObj) {
//     console.log(prevObj, curObj);
//     // console.log(prevObj, curObj.score);
//     /*
//     1. 가장 처음에 console.log(prevObj, curObj.score) 는 
//        초기값인 0이 prevObj로, curObj는 첫 번째 요소의 score가 출력이 된다.
//     2. 두 번째는, 초기값으로 110이 적용되고 계산이 이어진다 ~
//     */
//     // return curObj;
//     return prevObj + curObj.score;
//     /*
//     가장 처음에 return은 0 + 110 = 110 이 return 이 된다.
//     그리고 이 110이라는 값은, 그 다음 요소의 초기값 역할이 된다.
//     */
// }, 0);
// // 두번째 paramter = 초기값의 역할.
// // 만약, 초기값의 역할인 두 번째 parameter가 없을 경우에는 첫 번째 데이터가 초기값으로
// // default로 설정이 된다.
// console.log(`합계 : ${sum}`);

// let resultAry = [];
// let sum2 = filterUsers.reduce(function (prevObj, curObj) {
//     console.log(prevObj, curObj);
//     resultAry.push(curObj.score);
//     return resultAry;
// }, resultAry);
// console.log(`합계 : ${sum2}`);