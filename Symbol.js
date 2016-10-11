//'use strict';
// require('babel-polyfill');
// var module = require('./Symbol_Module.js');
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
// console.log(arr1[Symbol.isConcatSpreadable]); // undefined
// console.log(['a', 'b'].concat(arr1, 'e')); // ['a', 'b', 'c', 'd', 'e']
// arr1[Symbol.isConcatSpreadable] = false;
// console.log(arr1[Symbol.isConcatSpreadable]); // false
// console.log(['a', 'b'].concat(arr1, 'e')); // ['a', 'b', ['c', 'd'], 'e']

// let obj = {length: 2, 0: 'c', 1: 'd'};
// console.log(obj[Symbol.isConcatSpreadable]); // false
// console.log(['a', 'b'].concat(obj, 'e')); // ['a', 'b', obj, 'e']
// obj[Symbol.isConcatSpreadable] = true;
// console.log(obj[Symbol.isConcatSpreadable]); // true
// console.log(['a', 'b'].concat(obj, 'e')); // ['a', 'b', 'c', 'd', 'e']

// class A1 extends Array {
//   constructor(args) {
//     super(args);
//     this[Symbol.isConcatSpreadable] = true;
//   }
// }
// class A2 extends Array {
//   constructor(args) {
//     super(args);
//     this[Symbol.isConcatSpreadable] = false;
//   }
// }
// let a1 = new A1();
// a1[0] = 3;
// a1[1] = 4;
// let a2 = new A2();
// a2[0] = 5;
// a2[1] = 6;
// console.log([1, 2].concat(a1).concat(a2));
// // [1, 2, 3, 4, [5, 6]]

/***********************************Symbol.species********************/
// class MyArray extends Array {
//   // Overwrite species to the parent Array constructor
//   static get [Symbol.species]() { return Array; }
// }
// var a = new MyArray(1,2,3);
// var mapped = a.concat();

// console.log(mapped instanceof MyArray); // false
// console.log(mapped instanceof Array);   // true

/***********************************Symbol.match********************/
// class MyMatcher {
//   [Symbol.match](string) {
//     return 'hello world'.indexOf(string);
//   }
// }
// console.log('e'.match(new MyMatcher())); // 1

// var re = /foo/;
// console.log("foo".match(re));//[ "foo" ]
// re[Symbol.match] = false;
// console.log("foo".match(re));

/***********************************Symbol.replace********************/
// var str = "abc";
// class Obj {
//   [Symbol.replace](s,replaceStr) {
// 		console.log("hhaah");
// 		return "balalala";
// 	}
// }
// console.log(str.replace(new Obj(),"b")); //"balalala"

/***********************************Symbol.search********************/
// class MySearch {
//   constructor(value) {
//     this.value = value;
//   }
//   [Symbol.search](string) {
//     return string.indexOf(this.value);
//   }
// }
// console.log('foobar'.search(new MySearch('foo'))); // 0

/***********************************Symbol.iterator********************/
// var myIterable = {};
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };
// console.log([...myIterable]); // [1, 2, 3]

/***********************************Symbol.toPrimitive********************/
// let obj = {
//   [Symbol.toPrimitive](hint) {
//     switch (hint) {
//       case 'number':
//         return 123;
//       case 'string':
//         return 'str';
//       case 'default':
//         return 'hahaha';
//       default:
//         throw new Error();
//      }
//    }
// };
// console.log(2 * obj) // 246
// console.log(3 + obj) // '3default'
// console.log(obj == 'hahaha') // true
// console.log(obj == 123) // true
// console.log(String(obj)) // 'str'


/***********************************Symbol.toPrimitive********************/
// console.log({[Symbol.toStringTag]: 'Foo'}.toString());
// // "[object Foo]"

// class Collection {
//   get [Symbol.toStringTag]() {
//     return 'xxx';
//   }
// }
// var x = new Collection();
// console.log(Object.prototype.toString.call(x)); // "[object xxx]"

/***********************************Symbol.unscopables********************/
console.log(Object.keys(Array.prototype[Symbol.unscopables]));
// ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'keys']
var obj = { 
  foo: 1, 
  bar: 2 
};

obj[Symbol.unscopables] = { 
  foo: false, 
  bar: true 
};

with(obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
// 有unscopables时
class MyClass {
  foo() { return 1; }
  get [Symbol.unscopables]() {
    return { foo: true };
  }
}

var foo = function () { return 2; };

with (MyClass.prototype) {
  foo(); // 2
}
