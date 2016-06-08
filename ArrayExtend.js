/**
 * Created by exialym on 2016/6/8 0008.
 */
/*****************************Array.from()*****************/
// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
//
// // ES5的写法
// var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
//
// // ES6的写法
// let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
//
// Array.from('hello')
// // ['h', 'e', 'l', 'l', 'o']
//
// let namesSet = new Set(['a', 'b'])
// Array.from(namesSet) // ['a', 'b']
// //第二个参数
// Array.from(arrayLike, x => x * x);
// // 等同于
// Array.from(arrayLike).map(x => x * x);
//
// Array.from([1, 2, 3], (x) => x * x)
// //Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。
// //因为它能正确处理各种Unicode字符，
// //可以避免JavaScript将大于\uFFFF的Unicode字符，算作两个字符的bug。
// function countSymbols(string) {
//     return Array.from(string).length;
// }
/*****************************Array.of()*****************/
// Array.of() // []
// Array.of(undefined) // [undefined]
// Array.of(1) // [1]
// Array.of(1, 2) // [1, 2]
/*****************************copyWithin()*****************/
// [1, 2, 3, 4, 5].copyWithin(0, 3)
// // [4, 5, 3, 4, 5]
// // 将3号位复制到0号位
// [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// // [4, 2, 3, 4, 5]
/*****************************find()和findIndex()*****************/
// [1, 5, 10, 15].find(function(value, index, arr) {
//     return value > 9;
// }) // 10
// [1, 5, 10, 15].findIndex(function(value, index, arr) {
//     return value > 9;
// }) // 2
/*****************************fill()*****************/
// ['a', 'b', 'c'].fill(7)
// // [7, 7, 7]
// new Array(3).fill(7)
// // [7, 7, 7]
// ['a', 'b', 'c'].fill(7, 1, 2)
// // ['a', 7, 'c']
/*****************************entries()，keys()和values()*****************/
// for (let index of ['a', 'b'].keys()) {
//     console.log(index);
// }
// // 0
// // 1
//
// for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
// }
// // 'a'
// // 'b'
//
// for (let [index, elem] of ['a', 'b'].entries()) {
//     console.log(index, elem);
// }
// // 0 "a"
// // 1 "b"
/*****************************includes()*****************/
// [1, 2, 3].includes(2);     // true
// [1, 2, 3].includes(4);     // false
// [1, 2, NaN].includes(NaN); // true
// [1, 2, 3].includes(3, 3);  // false
// [NaN].indexOf(NaN)// -1
// [NaN].includes(NaN)// true


