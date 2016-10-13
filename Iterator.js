/***********************************遍历器的真容****************************************/
// let arr = ['a', 'b', 'c'];
// let iter = arr[Symbol.iterator]();

// console.log(iter.next()); // { value: 'a', done: false }
// console.log(iter.next()); // { value: 'b', done: false }
// console.log(iter.next()); // { value: 'c', done: false }
// console.log(iter.next()); // { value: undefined, done: true }

/***********************************自己实现遍历器****************************************/
// //链表节点本身
// function Node(value) {
//   this.value = value;
//   this.next = null;
// }
// //链表节点的遍历方法，定义在Symbol.iterator上
// Node.prototype[Symbol.iterator] = function() {
// 	//遍历方法必须返回一个遍历器对象
// 	//这个对象唯一强制的条件就是具有一个符合要求的next方法
//   var iterator = {
//     next: next
//   };
//   var current = this;
//   //对于这个next方法，必须返回一个具有done属性和value属性的对象
//   function next() {
//     if (current) {
//       var value = current.value;
//       current = current.next;
//       return {
//         done: false,
//         value: value
//       };
//     } else {
//       return {
//         done: true
//       };
//     }
//   }
//   return iterator;
// }
// var one = new Node(1);
// var two = new Node(2);
// var three = new Node(3);

// one.next = two;
// two.next = three;

// for (var i of one){
//   console.log(i);
// }
// // 1
// // 2
// // 3

/***********************************yield后是可遍历数据结构时会调用遍历器****************************************/
// let generator = function* () {
//   yield 1;
//   yield* [2,3,4];
//   yield 5;
// };

// var iterator = generator();
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: 4, done: false }
// console.log(iterator.next()); // { value: 5, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }
// for (var i of generator()) {
// 	console.log(i);
// }



/************************************部署return方法，FF测试不成功****************/
// var str = new String('abcdefghijklmn');
// str[Symbol.iterator] = function() {
// 	var index = 0;
// 	var _length = this.length;
// 	return {
// 		next: function(){
// 			if (index<_length)
// 				return {value:str[index++]+'1',done:false};
// 			else 
// 				return {done:true};
// 		},
// 		return: function() {
// 			console.log('somthing wrong');
// 			return { done: true };
// 		}
// 	}
// }
// for (var i of str) {
// 	console.log(i);
// 	if (i==='l1')
// 		break;
// }
/************************************Set****************/
// var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
// for (var e of engines) {
//   console.log(e);
// }
// // Gecko
// // Trident
// // Webkit
/************************************Map****************/
// var es6 = new Map();
// es6.set("edition", 6);
// es6.set("committee", "TC39");
// es6.set("standard", "ECMA-262");
// for (var [name, value] of es6) {
//   console.log(name + ": " + value);
// }
// // edition: 6
// // committee: TC39
// // standard: ECMA-262
/************************************没有部署遍历器的类数组对象****************/
let arrayLike = { length: 2, 0: 'a', 1: 'b' };
// 正确
for (let x of Array.from(arrayLike)) {
  console.log(x);
}