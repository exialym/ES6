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
function add() {
  var sum = 0;

  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      sum += val;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
}
console.log(add(2, 5, 3)); // 10
