'use strict';

var _Object$values;

require('babel-polyfill');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
// let obj2 = {
// 	a:23,
// 	b:true,
// 	c:'aa'
// }
// console.log(Object.keys(obj2));

/*************************************__proto__********************/
// // es6的写法
// var obj = {
//   method: function() {}
// };
// obj.__proto__ = someOtherObj;
// //or
// Object.getPrototypeOf({ __proto__: null })
// // null

// // es5的写法
// var obj = Object.create(someOtherObj);
// obj.method = function() {};
/*************************************Object.setPrototypeOf********************/
// let proto = {};
// let obj = { x: 10 };
// Object.setPrototypeOf(obj, proto);

// proto.y = 20;
// proto.z = 40;

// obj.x // 10
// obj.y // 20
// obj.z // 40

/*************************************Object.getPrototypeOf********************/
// function Rectangle() {
// }

// var rec = new Rectangle();

// Object.getPrototypeOf(rec) === Rectangle.prototype
// // true

// Object.setPrototypeOf(rec, Object.prototype);
// Object.getPrototypeOf(rec) === Rectangle.prototype
// // false

/*************************************Object.values()，Object.entries()********************/
console.log(Object.values((_Object$values = {}, _defineProperty(_Object$values, Symbol(), 123), _defineProperty(_Object$values, 'foo', 'abc'), _defineProperty(_Object$values, 'a', { b: 'hahaha' }), _Object$values)));
//["abc",{b:"hahaha"}]

var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj));
// [ ["foo", "bar"], ["baz", 42] ]
