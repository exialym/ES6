/**
 * Created by exialym on 2016/6/8 0008.
 */
/*******************************************基本用法**********************/
// function log(x, y = 'World') {
//     console.log(x, y);
// }
// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello
/*******************************************解构赋值的默认值和函数的默认值**********************/
// function foo({x, y = 5}) {
// console.log(x, y);
// }
// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
// foo() // TypeError: Cannot read property 'x' of undefined
// function foo({x, y = 5}={}) {
//     console.log(x, y);
// }
// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
// foo() // undefined, 5
/*******************************************默认参数位置**********************/
// function f(x, y = 5, z) {
//     return [x, y, z];
// }
//
// f() // [undefined, 5, undefined]
// f(1) // [1, 5, undefined]
// f(1, ,2) // 报错
// f(1, undefined, 2) // [1, 5, 2]
/*******************************************length属性**********************/
// (function (a) {}).length // 1
// (function (a = 5) {}).length // 0
// (function (a, b, c = 5) {}).length // 2
// (function(...args) {}).length // 0
// (function (a = 0, b, c) {}).length // 0
// (function (a, b = 1, c) {}).length // 1
/**********************************************作用域*********************/
// var x1 = 1;
// function f1(x1, y1 = x1) {
//   console.log(y1);
// }
// f1(2) // 2

// let x2 = 1;
// function f2(y2 = x2) {
//   let x2 = 2;
//   console.log(y2);
// }
// f2() // 1

// function f3(y3 = x3) {
//   let x3 = 2;
//   console.log(y3);
// }
// f3() // ReferenceError: x is not defined

// var x4 = 1;
// function f4(x4 = x4) {
//   console.log(x4);
// }
// f4(); // ReferenceError: x is not defined

// let foo = 'outer';
// function bar(func = x => foo) {
//   let foo = 'inner';
//   console.log(func()); // outer
// }
// bar();

// var x = 1;
// function foo(x, y = function() { x = 2; }) {
//   x = 3;
//   y();
//   console.log(x);
// }
// foo() // 2


// function throwIfMissing() {
//   throw new Error('Missing parameter');
// }
// function foo1(mustBeProvided = throwIfMissing()) {
//   return mustBeProvided;
// }
// foo1();

/**********************************************rest参数*********************/
// function add(...values) {
//   let sum = 0;
//   for (var val of values) {
//     sum += val;
//   }
//   return sum;
// }
// console.log(add(2, 5, 3)); // 10
/**********************************************扩展运算符*********************/
// function push(array, ...items) {
//   array.push(...items);
//   return array
// }
// console.log(push([1,3],2,4,5,6,4));

// function f(v, w, x, y, z) { 
// 	console.log(v+","+w+","+x+","+y+","+z);
// }
// var args = [0, 1];
// f(-1, ...args, 2, ...[3]);

// // ES5的写法
// Math.max.apply(null, [14, 3, 77])
// // ES6的写法
// Math.max(...[14, 3, 77])


// var arr1 = ['a', 'b'];
// var arr2 = ['c'];
// var arr3 = ['d', 'e'];
// // ES6的合并数组
// [...arr1, ...arr2, ...arr3];

// //与解构赋值结合使用
// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]

// const [first, ...rest] = [];
// first // undefined
// rest  // []:

// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []

// //正确返回字符串长度的函数
// function length(str) {
//   return [...str].length;
// }
// length('x\uD83D\uDE80y') // 3

// //任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。
// var nodeList = document.querySelectorAll('div');
// var array = [...nodeList];


/**********************************************name*********************/
// function foo() {};
// foo.bind({}).name // "bound foo"
// (function(){}).bind({}).name // "bound "
// var func1 = function () {};
// func1.name // "func1"
/**********************************************使用箭头定义函数*********************/
// var f1 = v => v;
// //等同于
// var f1 = function(v) { return v; };

// var f2 = () => 5;
// // 等同于
// var f2 = function () { return 5 };

// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) { return num1 + num2; };

// //由于{}代表着代码块，要直接返回对象的函数要使用({})的形式。
// var getTempItem = id => ({ id: id, name: "Temp" });

// //与变量解构同时使用
// const full = ({ first, last }) => first + ' ' + last;
// // 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }

// //比较巧妙的写法
// const numbers = (...nums) => nums;
// numbers(1, 2, 3, 4, 5)
// // [1,2,3,4,5]
// const headAndTail = (head, ...tail) => [head, tail];
// headAndTail(1, 2, 3, 4, 5)
// // [1,[2,3,4,5]]

var s2 = 0;
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}
var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2in: ', timer.s2), 3100);
setTimeout(() => console.log('s2out: ', s2), 3100);
// s1: 3
// s2: 0

