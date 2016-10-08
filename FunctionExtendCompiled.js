'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

//正确返回字符串长度的函数
function length(str) {
  return [].concat(_toConsumableArray(str)).length;
}
length('x\uD83D\uDE80y'); // 3

//任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。
var nodeList = document.querySelectorAll('div');
var array = [].concat(_toConsumableArray(nodeList));
