// var s = new Set();
// [2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));
// for (let i of s) {
//   console.log(i);
// }// 2 3 5 4

// // 初始化
// var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
// [...set]// [1, 2, 3, 4, 5]

// // 初始化
// function divs () {
//   return [...document.querySelectorAll('div')];
// }
// var set = new Set(divs());

/*************************************************遍历******/
// let set = new Set(['red', 'green', 'blue']);
// for (let item of set.keys()) {
//   console.log(item);
// }
// // red
// // green
// // blue
// for (let item of set.values()) {
//   console.log(item);
// }
// // red
// // green
// // blue
// for (let item of set.entries()) {
//   console.log(item);
// }
// // ["red", "red"]
// // ["green", "green"]
// // ["blue", "blue"]
// //Set结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法
// //所以直接用for of就可以循环它
// for (let x of set) {
//   console.log(x);
// }
// set.forEach((value, key) => console.log("Color:"+value));
/*************************************************集合操作******/

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}