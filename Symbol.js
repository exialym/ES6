import 'babel-polyfill';

// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();
s1 === s2; // false
s1.toString(); // "Symbol()"
s2.toString(); // "Symbol()"

// 有参数的情况
var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2; // false
console.log(s1); // "Symbol(foo)"
console.log(s2); // "Symbol(foo)"