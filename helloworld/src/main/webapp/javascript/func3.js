// func3.js

function multiply() {
    //3단.
    for(let i = 1; i <= 9; i++) {
        document.write('<p>3 * ' + i + ' = ' + (3 * i) + '</p>');
    }
}

function multiplyTable() {
    document.write('<table border="1">');
    for(let i = 1; i <= 9; i++) {
        document.write('<tr>');
        document.write('<td> 3 </td>');
        document.write('<td> * </td>');
        document.write('<td> ' + i + '</td>');
        document.write('<td> = </td>');
        document.write('<td> ' + (3 * i) + '</td>');
        document.write('</tr>');
    }
    document.write('</table>');
}

function multiplyWithReturn(num) {
    let str;
    str = '<table border="1">';
    for(let i = 1; i <= 9; i++) {
        str += '<tr>';
        str += '<td>' + num + '</td>';
        str += '<td> * </td>';
        str += '<td> ' + i + '</td>';
        str += '<td> = </td>';
        str += '<td> ' + (num * i) + '</td>';
        str += '</tr>';
    }
    return str += '</table>';
}
document.write(multiplyWithReturn(6));