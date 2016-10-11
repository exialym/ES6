'use strict';

require('babel-polyfill');

// // 没有参数的情况
// var s1 = Symbol();
// var s2 = Symbol();
// s1 === s2; // false
// s1.toString(); // "Symbol()"
// s2.toString(); // "Symbol()"

// // 有参数的情况
// var s1 = Symbol("foo");
// var s2 = Symbol("foo");
// s1 === s2; // false
// console.log(s1); // "Symbol(foo)"
// console.log(s2); // "Symbol(foo)"

/***********************************应用：消除魔术字符串********************/
// const shapeType = {
//   triangle: Symbol()
// };
// function getArea(shape, options) {
//   var area = 0;
//   switch (shape) {
//     case shapeType.triangle:
//       area = .5 * options.width * options.height;
//       break;
//   }
//   return area;
// }
// console.log(getArea(shapeType.triangle, { width: 100, height: 100 }));

/***********************************Symbol属性名的遍历********************/
// var obj = {};
// var a = Symbol('a');
// var b = Symbol('b');

// obj[a] = 'Hello';
// obj[b] = 'World';

// var objectSymbols = Object.getOwnPropertySymbols(obj);

// console.log(objectSymbols);
// // [Symbol(a), Symbol(b)]

// let obj1 = {
//   [Symbol('my_key')]: 1,
//   enum: 2,
//   nonEnum: 3
// };

// console.log(Reflect.ownKeys(obj1));
// // [Symbol(my_key), 'enum', 'nonEnum']

var s1 = Symbol('foo');
var s2 = Symbol('foo');
var s3 = Symbol.for('foo');
var s4 = Symbol.for('foo');

console.log(s1 === s2); // false
console.log(s1 === s3); // false
console.log(s2 === s3); // false
console.log(s3 === s4); // true

console.log(Symbol.keyFor(s1));
console.log(Symbol.keyFor(s3));
