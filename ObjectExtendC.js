'use strict';

require('babel-polyfill');

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
// const source = {
//   set foo(value) {
//     console.log(value);
//   }
// };
// const target1 = {};
// Object.assign(target1, source);
// Object.getOwnPropertyDescriptor(target1, 'foo')
// // { value: undefined,
// //   writable: true,
// //   enumerable: true,
// //   configurable: true }
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
// console.log(Object.values({ [Symbol()]: 123, foo: 'abc', a:{b:'hahaha'}}));
// //["abc",{b:"hahaha"}]

// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj));
// // [ ["foo", "bar"], ["baz", 42] ]

/*************************************解构赋值********************/
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// x // 1
// y // 2
// z // { a: 3, b: 4 }
/*************************************拓展运算符********************/
// var a = {q:1,r:3};
// var b = {c:2,v:4};
// let ab = { ...a, ...b };
// console.log(ab);
// // 等同于
// //let ab = Object.assign({}, a, b);
/*************************************get与set********************/
// var test = {
//   _age:0,
//   get age() {
//     return this._age;
//   },
//   set age(value) {
//     if (value > 100) 
//       this._age = new Date().getFullYear() - value;
//     else 
//       this._age = value;
//   }
// };
// test.age = 1994;
// console.log(test.age);
/*********************************Object.getOwnPropertyDescriptors()*********/
// const obj = {
//   foo: 123,
//   get bar() { return 'abc' }
// };
// console.log(Object.getOwnPropertyDescriptors(obj));
// // { foo:
// //    { value: 123,
// //      writable: true,
// //      enumerable: true,
// //      configurable: true },
// //   bar:
// //    { get: [Function: bar],
// //      set: undefined,
// //      enumerable: true,
// //      configurable: true } }
// //复制对象
// const target2 = {};
// Object.defineProperties(target2, Object.getOwnPropertyDescriptors(obj));
// console.log(Object.getOwnPropertyDescriptor(target2, 'bar'));

// //继承
// var superClass = {name:'LYM'};
// const child = Object.create(
//   superClass,
//   Object.getOwnPropertyDescriptors({
//     age: 23,
//   })
// );
// console.log(Object.getOwnPropertyDescriptors(child));
// // { age:
// //    { value: 23,
// //      writable: true,
// //      enumerable: true,
// //      configurable: true } }

//MixIn
var mix = function mix(object) {
  return {
    with: function _with() {
      for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
        mixins[_key] = arguments[_key];
      }

      return mixins.reduce(function (c, mixin) {
        return Object.create(c, Object.getOwnPropertyDescriptors(mixin));
      }, object);
    }
  };
};

// multiple mixins example
var a = { a: 'a' };
var b = { b: 'b' };
var c = { c: 'c' };
var d = mix(c).with(a, b);
console.log(Object.getOwnPropertyDescriptors(d));
