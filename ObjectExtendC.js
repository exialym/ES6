'use strict';

/*************************************属性的简洁表示法*******************/

// var foo = 'bar';
// var baz = {foo};
// baz // {foo: "bar"}
// // 等同于
// var baz = {foo: foo};


// function f(x, y) {
//   return {x, y};
// }
// // 等同于
// function f(x, y) {
//   return {x: x, y: y};
// }
// f(1, 2) // Object {x: 1, y: 2}

// var o = {
//   method() {
//     return "Hello!";
//   }
// };
// // 等同于
// var o = {
//   method: function() {
//     return "Hello!";
//   }
// };
/*************************************属性名表达式*******************/
// let propKey = 'foo';
// let obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123
// };

// let obj1 = {
//   ['h'+'ello']() {
//     return 'hi';
//   }
// };
// obj1.hello() // hi

/*************************************Object.is()*******************/
// +0 === -0 //true
// NaN === NaN // false

// Object.is(+0, -0) // false
// Object.is(NaN, NaN) // true

/*************************************Object.assign()*******************/
// var v1 = 'abc';
// var v2 = true;
// var v3 = 10;

// var obj = Object.assign({}, v1, v2, v3);
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }
// var target = { a: 0 }
// var source = { a: { b: 'hello' } }
// console.log(Object.assign(source, target));
// // { a: { b: 'hello' } }
/*************************************属性的可枚举性********************/
var obj2 = {
	a: 23,
	b: true,
	c: 'aa'
};
console.log(Object.keys(obj2));