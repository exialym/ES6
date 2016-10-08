'use strict';

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
// function f1(x1) {
//   var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x1;

//   console.log(y1);
// }
// f1(2); // 2

// var x2 = 1;
// function f2() {
//   var y2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x2;
//   return function () {
//     var x2 = 2;
//     console.log(y2);
//   }();
// }
// f2(); // 1

// function f3() {
//   var y3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x3;
//   return function () {
//     var x3 = 2;
//     console.log(y3);
//   }();
// }
// f3(); // ReferenceError: x is not defined

// var x4 = 1;
// function f4() {
//   var x4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x4;

//   console.log(x4);
// }
// f4(); // ReferenceError: x is not defined

// var foo = 'outer';
// function bar() {
//   var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (x) {
//     return foo;
//   };

//   var foo = 'inner';
//   console.log(func()); // outer
// }
// bar();

// var x = 1;
// function foo(x) {
//   var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
//     x = 2;
//   };

//   x = 3;
//   y();
//   console.log(x);
// }
// foo(); // 2


function throwIfMissing() {
  throw new Error('Missing parameter');
}
function foo1() {
  var mustBeProvided = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : throwIfMissing();

  return mustBeProvided;
}
foo1();
