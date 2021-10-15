function push(arr, num) {
    arr[arr.length] = num;
    return arr;
}
function pop(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
}
/**
 * If you are absolutely sure that #root element DOES exist in your DOM,
 * you can show TS your confidence with a ! operator.
 */
var el = document.getElementById('root');
el.innerHTML += "<h1>START</h1>";
var arrNum = [];
arrNum = push(arrNum, 10);
arrNum = push(arrNum, 9);
el.innerHTML += "<h2>PUSH 10 then 9</h2>";
arrNum.map(function (item) { return el.innerHTML += "<div>" + item + "</div>"; });
arrNum = pop(arrNum);
el.innerHTML += "<h2>POP 1</h2>";
arrNum.map(function (item) { return el.innerHTML += "<div>" + item + "</div>"; });
