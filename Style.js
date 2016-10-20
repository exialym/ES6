'use strict';
/***************************************let取代var****************/
// if (true) {
//   let x = 'hello x';
//   var y = 'hello y'
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(y);//hello y
// // console.log(x);//报错
// // console.log(i);//报错
// if(true) {
//   console.log(z); // ReferenceError
//   let z = 'hello local';
// }
/***************************************全局常量和线程安全****************/
// // bad
// var a = 1, b = 2, c = 3;
// // good
// const a = 1;
// const b = 2;
// const c = 3;
// // best
// const [a, b, c] = [1, 2, 3];
//所有的函数都应该设置为常量
// const sum = function(...args) {
// 	return [...args].reduce((a,b)=> a+b ,0);
// }
// console.log(sum(1,2,3));
/***************************************字符串****************/
// // bad
// const a = "foobar";
// const b = 'foo' + a + 'bar';

// // acceptable
// const c = `foobar`;

// // good
// const a = 'foobar';
// const b = `foo${a}bar`;
// const c = 'foobar';
// console.log(a);//foobar
// console.log(b);//foofoobarbar
// console.log(c);//foobar

/***************************************解构赋值****************/
// const arr = [1, 2, 3, 4];
// // bad
// const first = arr[0];
// const second = arr[1];
// // good
// const [first, second] = arr;

// // bad
// function getFullName(user) {
//   const firstName = user.firstName;
//   const lastName = user.lastName;
// }
// // good
// function getFullName(obj) {
//   const { firstName, lastName } = obj;
// }
// // best
// function getFullName({ firstName, lastName }) {
// }

// // bad
// function processInput(input) {
//   return [left, right, top, bottom];
// }
// // good
// function processInput(input) {
//   return { left, right, top, bottom };
// }
// const { left, right } = processInput(input);
/***************************************对象****************/
// // bad
// const a = { k1: v1, k2: v2, };
// const b = {
//   k1: v1,
//   k2: v2
// };
// // good
// const a = { k1: v1, k2: v2 };
// const b = {
//   k1: v1,
//   k2: v2,
// };


// // bad
// const a = {};
// a.x = 3;
// // if reshape unavoidable
// const a = {};
// Object.assign(a, { x: 3 });
// // good
// const a = { x: null };
// a.x = 3;


// // bad
// const obj = {
//   id: 5,
//   name: 'San Francisco',
// };
// obj[getKey('enabled')] = true;
// // good
// const obj = {
//   id: 5,
//   name: 'San Francisco',
//   [getKey('enabled')]: true,
// };


// var ref = 'some value';
// // bad
// const atom = {
//   ref: ref,
//   value: 1,
//   addValue: function (value) {
//     return atom.value + value;
//   },
// };
// // good
// const atom = {
//   ref,
//   value: 1,
//   addValue(value) {
//     return atom.value + value;
//   },
// };
/***************************************数组****************/
// // bad
// const len = items.length;
// const itemsCopy = [];
// let i;
// for (i = 0; i < len; i++) {
//   itemsCopy[i] = items[i];
// }
// // good
// const itemsCopy = [...items];
/***************************************函数****************/
// (() => {
//   console.log('Welcome to the Internet.');
// })();

// [1, 2, 3].map(x => x * x);

// // bad
// const self = this;
// const boundMethod = function(...params) {
//   return method.apply(self, params);
// }
// // acceptable
// const boundMethod = method.bind(this);
// // best
// const boundMethod = (...params) => method.apply(this, params);

// // bad
// function divide(a, b, option = false ) {
// }
// // good
// function divide(a, b, { option = false } = {}) {
// }

// // bad
// function concatenateAll() {
//   const args = Array.prototype.slice.call(arguments);
//   return args.join('');
// }
// // good
// function concatenateAll(...args) {
//   return args.join('');
// }
/***************************************Map****************/
// let map = new Map(arr);
// for (let key of map.keys()) {
//   console.log(key);
// }
// for (let value of map.values()) {
//   console.log(value);
// }
// for (let item of map.entries()) {
//   console.log(item[0], item[1]);
// }
/***************************************Class****************/
// // bad
// function Queue(contents = []) {
//   this._queue = [...contents];
// }
// Queue.prototype.pop = function() {
//   const value = this._queue[0];
//   this._queue.splice(0, 1);
//   return value;
// }
// // good
// class Queue {
//   constructor(contents = []) {
//     this._queue = [...contents];
//   }
//   pop() {
//     const value = this._queue[0];
//     this._queue.splice(0, 1);
//     return value;
//   }
// }


// // bad
// const inherits = require('inherits');
// function PeekableQueue(contents) {
//   Queue.apply(this, contents);
// }
// inherits(PeekableQueue, Queue);
// PeekableQueue.prototype.peek = function() {
//   return this._queue[0];
// }
// // good
// class PeekableQueue extends Queue {
//   peek() {
//     return this._queue[0];
//   }
// }

/***************************************Module****************/
// bad
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;
// good
import { func1, func2 } from 'moduleA';


import React from 'react';
const Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});
export default Breadcrumbs
