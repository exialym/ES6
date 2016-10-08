"use strict";

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
(function (a) {}).length // 1
(function () {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
}).length // 0
(function (a, b) {
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
}).length // 2
(function () {}).length // 0
(function () {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments[1];
  var c = arguments[2];
}).length // 0
(function (a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var c = arguments[2];
}).length; // 1
