'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// require('babel-polyfill');
// var _module = require('./Symbol_Module.js');
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

/***********************************Symbol.for()，Symbol.keyFor()********************/
// var s1 = Symbol('foo');
// var s2 = Symbol('foo');
// var s3 = Symbol.for('foo');
// var s4 = Symbol.for('foo');

// console.log(s1 === s2); // false
// console.log(s1 === s3); // false
// console.log(s2 === s3); // false
// console.log(s3 === s4); // true

// console.log(Symbol.keyFor(s1));//undefined
// console.log(Symbol.keyFor(s3));//foo

/***********************************实例：模块的 Singleton 模式********************/
//console.log(FOO_KEY);
//console.log(module.foo);

/***********************************Symbol.hasInstance********************/
// class MyArray {  
//   static [Symbol.hasInstance](instance) {
//     return Array.isArray(instance);
//   }
// }
// console.log([] instanceof MyArray); // true

/***********************************Symbol.isConcatSpreadable********************/
// let arr1 = ['c', 'd'];
// arr1[Symbol.isConcatSpreadable] = false;
// console.log(arr1[Symbol.isConcatSpreadable]); // undefined
// console.log(['a', 'b'].concat(arr1, 'e')); // ['a', 'b', 'c', 'd', 'e']

// let obj = {length: 2, 0: 'c', 1: 'd'};
// console.log(obj[Symbol.isConcatSpreadable]); // undefined
// console.log(['a', 'b'].concat(obj, 'e')); // ['a', 'b', obj, 'e']

// obj[Symbol.isConcatSpreadable] = true;
// console.log(obj[Symbol.isConcatSpreadable]); // undefined
// console.log(['a', 'b'].concat(obj, 'e')); // ['a', 'b', 'c', 'd', 'e']

var A1 = function (_Array) {
  _inherits(A1, _Array);

  function A1(args) {
    _classCallCheck(this, A1);

    var _this = _possibleConstructorReturn(this, (A1.__proto__ || Object.getPrototypeOf(A1)).call(this, args));

    _this[Symbol.isConcatSpreadable] = true;
    return _this;
  }

  return A1;
}(Array);

var A2 = function (_Array2) {
  _inherits(A2, _Array2);

  function A2(args) {
    _classCallCheck(this, A2);

    var _this2 = _possibleConstructorReturn(this, (A2.__proto__ || Object.getPrototypeOf(A2)).call(this, args));

    _this2[Symbol.isConcatSpreadable] = false;
    return _this2;
  }

  return A2;
}(Array);

var a1 = new A1();
a1[0] = 3;
a1[1] = 4;
var a2 = new A2();
a2[0] = 5;
a2[1] = 6;
console.log([1, 2].concat(a1).concat(a2));
// [1, 2, 3, 4, [5, 6]]
