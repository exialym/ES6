/**
 * Created by exialym on 2016/6/6 0006.
 */

/*******************************************暂时性死区**********************/
// var tmp = 123;
// if (true) {
//     tmp = 'abc'; // ReferenceError
//     let tmp;
// }
/*******************************************暂时性死区**********************/
// if (true) {
//     // TDZ开始
//     tmp = 'abc'; // ReferenceError
//     console.log(tmp); // ReferenceError
//
//     let tmp; // TDZ结束
//     console.log(tmp); // undefined
//
//     tmp = 123;
//     console.log(tmp); // 123
// }
/*******************************************暂时性死区**********************/
// function bar(x = y, y = 2) {
//     return [x, y];
// }
// bar();
/*******************************************不允许重复声明**********************/
// // 报错
// function () {
//     let a = 10;
//     var a = 1;
// }
//
// // 报错
// function () {
//     let a = 10;
//     let a = 1;
// }
/*******************************************没有块级作用域的尴尬**********************/
// var tmp = new Date();
//
// function f() {
//     console.log(tmp);
//     if (false) {
//         var tmp = "hello world";
//     }
// }
//
// f(); // undefined
/*******************************************使用let模仿块级作用域**********************/
// function f1() {
//     let n = 5;
//     if (true) {
//         let n = 10;
//     }
//     console.log(n); // 5
// }
/*******************************************函数声明只在块级作用域内有效**********************/
// function f() { console.log('I am outside!'); }
// (function () {
//     if(false) {
//         // 重复声明一次函数f
//         function f() { console.log('I am inside!'); }
//     }
//
//     f();
// }());
/*******************************************const定义常量**********************/
// //对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址，const只保证对象名指向的地址不变，不保证地址的数据不变。
// const foo = {};
// foo.prop = 123;
//
// foo.prop
// // 123
//
// foo = {}; // TypeError: "foo" is read-only
// const a = [];
// a.push("Hello"); // 可执行
// a.length = 0;    // 可执行
// a = ["Dave"];    // 报错
/*******************************************真正冻结对象**********************/
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach( (key, value) => {
        if ( typeof obj[key] === 'object' ) {
            constantize( obj[key] );
        }
    });
};
