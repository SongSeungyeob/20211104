// func2.js

let str = '<h1>Hello</h1>';
str += '<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>';
document.write(str);
let li = document.querySelector('ul>li');
console.log(li);
// li.remove();
li.style.color = 'red';
li.style.backgroundColor = 'yellow';

console.log(this.document.body);

let obj = {
    key: 'value',
    key1 : 'value1',
    key2 : {
        key3: 'value3',
        key4: 'value4',
        key5: {
            key6: 'value6',
            key7: {
                key8: 'value8'
            }
        }
    }
}

console.log(obj.key);
console.log(obj.key2.key3);
console.log(obj.key2.key5.key6);
console.log(obj.key2['key5']['key6']);
