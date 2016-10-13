// //初始化
// var m = new Map();
// var o = {};
// var s = {};
// m.set(o, 'content');
// m.set(s, 'other');
// console.log(m.get(o)) // "content"
// console.log(m.get(s)) // "other"

// //初始化
// var map = new Map([
//   ['name', '张三'],
//   ['title', 'Author']
// ]);
// map.size // 2
// map.has('name') // true
// map.get('name') // "张三"
// map.has('title') // true
// map.get('title') // "Author"
/////////////////////////////////////链式调用
// let map = new Map()
//   .set(1, 'a')
//   .set(2, 'b')
//   .set(3, 'c');
// console.log(map);
// //遍历
// console.log([...map.keys()]);
// // [1, 2, 3]

// console.log([...map.values()]);
// // ['one', 'two', 'three']

// console.log([...map.entries()]);
// // [[1,'one'], [2, 'two'], [3, 'three']]

// console.log([...map]);
// // [[1,'one'], [2, 'two'], [3, 'three']]

/***********************************************WeakMap******************/
let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();

myWeakmap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement);
  logoData.timesClicked++;
  myWeakmap.set(myElement, logoData);
  console.log(myWeakmap.get(myElement).timesClicked);
}, false);