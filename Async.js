/***********************************************Thunk**************/
// var fs = require('fs');
// var Thunk = function(fn) {
//   return function (...args) {
//     return function (callback) {
//       return fn.call(this, ...args, callback);
//     }
//   };
// };
// var readFileThunk = Thunk(fs.readFile);
// readFileThunk("./import.js")(function(err,data){
// 	console.log(data);
// });

/***********************************************thunkify**************/
function thunkify(fn){
  return function(){
    var args = new Array(arguments.length);
    var ctx = this;
    for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }
    return function(done){
      var called;
      args.push(function(){
      	//这里利用闭包保存了一个called变量，来标志一个回调函数是否已经被执行过
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });
      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};
// var read = thunkify(fs.readFile);
// read('./import.js')(function(err, str){
//   console.log(str);
// });

// function f(a, b, callback){
//   var sum = a + b;
//   callback(sum);
//   callback(sum);
// }
// var ft = thunkify(f);
// var print = console.log.bind(console);
// ft(1, 2)(print);
// // 3
/***********************************************thunkify+Generator**************/
// var fs = require('fs');
// var readFile = thunkify(fs.readFile);
// var gen = function* (){
//   var r1 = yield readFile('./import.js');
//   console.log(r1.toString());
//   var r2 = yield readFile('./import.js');
//   console.log(r2.toString());
// };
// // //手动执行
// // var g = gen();
// // var r1 = g.next();
// // r1.value(function(err, data){
// //   if (err) throw err;
// //   var r2 = g.next(data);
// //   r2.value(function(err, data){
// //     if (err) throw err;
// //     g.next(data);
// //   });
// // });

// //自动执行
// function run(fn) {
//   //执行传入的Generator，获得遍历器对象
//   var gen = fn();
//   //要传入Trunk函数的回调函数
//   //在这里就相当于是readFile('./import.js')(next)
//   //首先要手动执行一下next(),此时调用gen.next(data)时无论data是什么值Generator都会忽略的
//   //这时result/value获得到的就是一个readFile('./import.js'),也就是一个trunk函数
//   //再把next传进去，就可以开始递归执行了
//   function next(err, data) {
//     var result = gen.next(data);
//     if (result.done) return;
//     result.value(next);
//   }
//   next();
// }
// run(gen);
/***********************************************promise+Generator**************/
// var fs = require('fs');
// //先把一个异步操作封装为一个Promise对象
// var readFile = function (fileName){
//   return new Promise(function (resolve, reject){
//     fs.readFile(fileName, function(error, data){
//       if (error) return reject(error);
//       resolve(data);
//     });
//   });
// };
// var gen = function* (){
//   //每次执行next返回的就是一个Promise对象
//   var f1 = yield readFile('./import.js');
//   console.log(f1.toString());
//   var f2 = yield readFile('./importC.js');
//   console.log(f2.toString());
// };

// //手动执行
// var g = gen();
// g.next().value.then(function(data){
//   g.next(data).value.then(function(data){
//     g.next(data);
//   });
// });

// //自动执行
// var run = function(gen) {
//   var g = gen();
//   function next(data){
//     var result = g.next(data);
//     if (result.done) return result.value;
//     result.value.then(function(data){
//       next(data);
//     });
//   }
//   next();
// }
// run(gen);
/***********************************************async**************/
// function timeout(data, ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve(data), ms);
//     return "hahaha"
//   });
// }
// async function asyncPrint(value, ms) {
//   var a = await timeout(value,ms).then(function(data) {
//   	console.log(data);
//   	return "hehehe"
//   });
//   console.log(a);
//   return 'async over'
// }
// asyncPrint('hello world', 5000).then(v => console.log(v));
// console.log('after async');
// //after async
// //hello world
// //hehehe
// //async over

async function* gen1() {
  yield 'a';
  yield 'b';
  return 2;
}

async function* gen2() {
  const result = yield* gen1();
}
(async function () {
  for await (const x of gen2()) {
    console.log(x);
  }
})();