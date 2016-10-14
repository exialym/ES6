// function* helloWorldGenerator() {
// 	for (var i = 5; i >= 0; i--) {
// 		yield i;
// 	}
// 	return 'finished';
// }
// var hw = helloWorldGenerator();
// console.log(hw.next());//{ value: 0, done: false }
// console.log(hw.next());//{ value: 1314, done: false }
// console.log(hw.next());//{ value: 5201314, done: true }
// console.log(hw.next());//{ value: undefined, done: true }
/**************************与Iterator接口的关系*****************/
// var myIterable = {};
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// console.log([...myIterable]); // [1, 2, 3]

/**************************使用next的参数定义yield的返回值*****************/
// function* foo(x) {
//   var y = 2 * (yield (x + 1));
//   var z = yield (y / 3);
//   return (x + y + z);
// }

// var a = foo(5);
// console.log(a.next()) // Object{value:6, done:false}
// console.log(a.next()) // Object{value:NaN, done:false}
// console.log(a.next()) // Object{value:NaN, done:true}

// var b = foo(5);
// //这句next调用后，函数停在了yield (x + 1)这里。
// console.log(b.next()) // { value:6, done:false }
// //执行这句next时指定了参数，就意味着将yield (x + 1)的返回值设置为了12
// //继续执行时就会执行var y = 2 * 12;
// console.log(b.next(12)) // { value:8, done:false }
// console.log(b.next(13)) // { value:42, done:true }
/**************************for...of遍历Generator*****************/
// function *foo() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return 6;
// }

// for (let v of foo()) {
//   console.log(v);
// }
// // 1 2 3 4 5
/**************************利用Generator使任何对象可以使用for of遍历*****************/
// function* objectEntries() {
//   let propKeys = Object.keys(this);

//   for (let propKey of propKeys) {
//     yield [propKey, this[propKey]];
//   }
// }

// let jane = { first: 'Jane', last: 'Doe' };

// jane[Symbol.iterator] = objectEntries;

// for (let [key, value] of jane) {
//   console.log(`${key}: ${value}`);
// }
// // first: Jane
// // last: Doe
/**************************Generator.prototype.throw()*****************/
// var g = function* () {
//   try {
//     yield '如果不先执行一次next就直接调用throw抛出的错误是不会被内部捕获到的，因为抛出错误时函数其实并没有进到这个try里。';
//   } catch (e) {
//     console.log('内部捕获1', e);
//   }
// };

// var i = g();
// try {
// 	console.log(i.throw('cant catch inside'));
// } catch (e) {
//   console.log('外部捕获1', e);
// }
// //一旦Generator执行过程中抛出错误，且没有被内部捕获，就不会再执行下去了。
// //如果此后还调用next方法，将返回一个value属性等于undefined、done属性等于true的对象
// //即JavaScript引擎认为这个Generator已经运行结束了。
// console.log(i.next());
// //外部捕获1 cant catch
// //Object { value: undefined, done: true }


// var g = function* () {
//   try {
//     yield '如果不先执行一次next就直接调用throw抛出的错误是不会被内部捕获到的，因为抛出错误时函数其实并没有进到这个try里。';
//   } catch (e) {
//     console.log('内部捕获1', e);
//   }
//   try {
//     yield 'throw方法会顺便执行一次next';
//   } catch (e) {
//     console.log('内部捕获2', e);
//   }
//   return '这次的错误没有在内部捕获，就会传到外部';
// };

// var i = g();
// // try {
// // 	console.log(i.throw('cant catch inside'));
// // } catch (e) {
// //   console.log('外部捕获1', e);
// // }
// console.log(i.next());

// try {
//   console.log(i.throw('a'));
//   console.log(i.throw('b'));
//   console.log(i.throw('c'));
// } catch (e) {
//   console.log('外部捕获2', e);
// }
// // Object { value: "如果不先执行一次next就直接调用throw抛出的错误是不会被内部捕获…", done: false }
// //内部捕获1 
// //Object { value: "throw方法会顺便执行一次next", done: false }
// //内部捕获2 b
// //Object { value: "这次的错误没有在内部捕获，就会传到外部", done: true }
// //外部捕获2 c

/**************************Generator.prototype.return()*****************/
// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// var g = gen();

// console.log(g.next())        // { value: 1, done: false }
// console.log(g.return('foo')) // { value: "foo", done: true }
// console.log(g.next())        // { value: undefined, done: true }

//有try...finally情况下的return
// function* numbers () {
//   yield 1;
//   try {
//     yield 2;
//     yield 3;
//   } finally {
//     yield 4;
//     yield 5;
//   }
//   yield 6;
// }
// var g = numbers()
// console.log(g.next()) // { done: false, value: 1 }
// console.log(g.next()) // { done: false, value: 2 }
// console.log(g.return(7)) // { done: false, value: 4 }
// console.log(g.next()) // { done: false, value: 5 }
// console.log(g.next()) // { done: true, value: 7 }
/*************************************************************yield*语句*****************/
// function* foo() {
//   yield 'a';
//   yield 'b';
//   return "Generator 的返回值";
// }
// function* bar() {
//   yield 'x';
//   console.log(foo());//Generator对象
//   console.log(yield foo());//undefined 普通的yield获取不到foo的返回值
//   console.log((yield* foo())+'in');//Generator 的返回值in yield*获取的到foo的返回值，这个返回值在yield里不会再被遍历到
//   yield 'y';
// }
// for (let v of bar()){
//   console.log(v);
// }
// //x
// //Generator {  }
// //Generator {  }
// //undefined
// //a
// //b
// //Generator 的返回值in
// //y

// function* gen(){
//   yield* ["a", "b", "c"];
//   yield ["a", "b", "c"];
//   yield* 'hello';
// }

// for (var i of gen()) {
// 	console.log(i);
// }
// /*
// a
// b
// c
// Array [ "a", "b", "c" ]
// h
// e
// l
// l
// o
// */
/*************************************************************利用yield*语句取出嵌套数组*****************/
// function* iterTree(tree) {
//   if (Array.isArray(tree)) {
//     for(let i=0; i < tree.length; i++) {
//       yield* iterTree(tree[i]);
//     }
//   } else {
//     yield tree;
//   }
// }

// const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

// for(let x of iterTree(tree)) {
//   console.log(x);
// }
// // a
// // b
// // c
// // d
// // e
/*************************************************************使用yield*语句遍历完全二叉树*****************/// 下面是二叉树的构造函数，
// // 三个参数分别是左树、当前节点和右树
// function Tree(left, label, right) {
//   this.left = left;
//   this.label = label;
//   this.right = right;
// }
// // 下面生成二叉树
// function make(array) {
//   // 判断是否为叶节点
//   if (array.length == 1) return new Tree(null, array[0], null);
//   return new Tree(make(array[0]), array[1], make(array[2]));
// }
// let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// // 普通遍历二叉树
// var res = [];
// function re(root) {
// 	if (root) {
// 		re(root.left);
// 		res.push(root.label);
// 		re(root.right);
// 	}
// }
// re(tree);
// console.log(res);

// // 下面是中序（inorder）遍历函数。
// // 由于返回的是一个遍历器，所以要用generator函数。
// // 函数体内采用递归算法，所以左树和右树要用yield*遍历
// function* inorder(t) {
//   if (t) {
//     yield* inorder(t.left);
//     yield t.label;
//     yield* inorder(t.right);
//   }
// }

// // 遍历二叉树
// var result = [];
// for (let node of inorder(tree)) {
//   result.push(node);
// }

// console.log(result);
// // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

/**************************Generator函数的this********************************/
// function* g() {
// 	this.a = 1;
// 	console.log("done");
// }
// g.prototype.hello = function () {
//   return 'hi!';
// };
// let obj = g();
// obj.next();
// console.log(obj instanceof g) // true
// console.log(obj.hello()) // 'hi!'
// console.log(obj.a) // 'undefined'

//使this和遍历器都可以使用
// function* F() {
//   this.a = 1;
//   yield this.b = 2;
//   yield this.c = 3;
// }
// var f = F.call(F.prototype);
// console.log(f.next());  // Object {value: 2, done: false}
// console.log(f.next());  // Object {value: 3, done: false}
// console.log(f.next());  // Object {value: undefined, done: true}
// console.log(f.a) // 1
// console.log(f.b) // 2
// console.log(f.c) // 3

//包一层以便使用new命令
// function* gen() {
//   this.a = 1;
//   yield this.b = 2;
//   yield this.c = 3;
// }
// function F() {
//   return gen.call(gen.prototype);
// }
// var f = new F();
// console.log(f.next());  // Object {value: 2, done: false}
// console.log(f.next());  // Object {value: 3, done: false}
// console.log(f.next());  // Object {value: undefined, done: true}
// console.log(f.a) // 1
// console.log(f.b) // 2
// console.log(f.c) // 3
/**************************Generator与状态机********************************/
// var clock = function*() {
//   while (true) {
//     console.log('Tick!');
//     yield;
//     console.log('Tock!');
//     yield;
//   }
// };
// var li = clock();
// li.next();//Tick
// li.next();//Tock
// li.next();//Tick
// li.next();//Tock
/**************************异步操作的同步化表达*******************************/
function* main() {
	//同步方式编写逻辑
	var result = yield request("http://some.url");
	var resp = JSON.parse(result);
	console.log(resp.value);
}

function request(url) {
	makeAjaxCall(url, function(response){
		//数据返回后将数据作为yield的返回值传到Generator里
		it.next(response);
	});
}
//初始化
var it = main();
//发起Ajax请求
it.next();