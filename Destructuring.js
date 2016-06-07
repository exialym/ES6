/**
 * Created by exialym on 16/6/7.
 */
/*******************************************数组解构**********************/
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo) // 1
// console.log(bar) // 2
// console.log(baz) // 3
//
// let [ , , third] = ["foo", "bar", "baz"];
// console.log(third) // "baz"
//
// let [x, , y] = [1, 2, 3];
// console.log(x) // 1
// console.log(y) // 3
//
// let [head, ...tail] = [1, 2, 3, 4];
// console.log(head) // 1
// console.log(tail) // [2, 3, 4]
//
// let [x, y, ...z] = ['a'];
// console.log(x) // "a"
// console.log(y) // undefined
// console.log(z) // []
//
// let [a, [b], d] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4
//
// //不完全解构是可行的
// let [a, [b], d] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4
//
// //解构失败变量的值是undefined
// var [foo] = [];
// var [bar, foo] = [1];
// foo//undefined
//
// //默认值
// var [foo = true] = [];
// foo // true
//
//     [x, y = 'b'] = ['a']; // x='a', y='b'
// [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// function f() {
//     console.log('aaa');
// }
// //在有值时，默认值的函数不会执行
// let [x = f()] = [1];
/*******************************************对象解构**********************/
// var { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo); //"aaa"
// var { foo: otherName,bar } = { foo: "aaa", bar: "bbb" };
// console.log(otherName);//"aaa"
// console.log(bar);//"bbb"
// console.log(foo);//ReferenceError: Can't find variable: foo

// //嵌套赋值
// let obj = {};
// let arr = [];
//
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
//
// console.log(obj.prop) // 123
// console.log(arr[0]) // true
//
// //使用已声明的变量时要注意,像这样的代码会报错，因为JS引擎将{x}理解为一个代码块，从而发生语法错误。可以不将大括号写在行首，避免JS认为这是一个代码块。
// var x;
// {x} = {x: 1};// SyntaxError: syntax error
// // 正确的写法
// var x;
// ({x} = {x: 1});
// console.log(x);

// ({ log, sin, cos } = Math);
// console.log(sin);

/*******************************************字符串的解构赋值**********************/
// const [a, b, c, d, e] = 'hello';
// console.log(a); // "h"
// console.log(b); // "e"
// console.log(c); // "l"
// console.log(d); // "l"
// console.log(e); // "o"
// let {length : len} = 'hello';
// console.log(len);// 5
/*******************************************数值和布尔值的解构赋值**********************/
// let {toString: s} = 123;
// s === Number.prototype.toString // true
//
// let {toString: s} = true;
// s === Boolean.prototype.toString // true
/*******************************************函数参数的解构赋值**********************/
function move({x = 0, y = 0}) {
    console.log(x+"##"+y);
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // 报错

function move({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]

function move({x = 0, y = 0} = {}) {
    return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]
/*******************************************用途**********************/
// //交换变量的值
// [x, y] = [y, x];
//
// //从函数返回多个值
// function example() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// var { foo, bar } = example();
//
// //函数参数的定义
// // 参数是一组有次序的值
// function f([x, y, z]) { ... }
// f([1, 2, 3]);
//
// // 参数是一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});
//
// //提取JSON数据
// var jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };
//
// let { id, status, data: number } = jsonData;
//
// console.log(id, status, number);
// // 42, "OK", [867, 5309]
//
// //函数参数默认值
// jQuery.ajax = function (url, {
//   async = true,
//   beforeSend = function () {},
//   cache = true,
//   complete = function () {},
//   crossDomain = false,
//   global = true,
//   // ... more config
// }) {
//   // ... do stuff
// };