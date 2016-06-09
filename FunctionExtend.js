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
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
(function(...args) {}).length // 0
(function (a = 0, b, c) {}).length // 0
(function (a, b = 1, c) {}).length // 1


