/****************************************************使用格式*********************************************/
// var promise = new Promise(function(resolve, reject) {
//   someAsyncOperate(function(data,error){
//     if (!error){
//       //异步操作成功时，将结果传到resolve函数中
//       //这个函数是JS中已经定义好的，负责将promise的状态由Pending改为Resolved
//       //至于具体怎么处理data则会在后面具体配置
//       resolve(data);
//     } else {
//       //负责将promise的状态由Pending改为Rejected
//       reject(error);
//     }
//   });
// });
// promise.then(function(value) {
//   //这个方法就是配置成功时怎么处理数据，value就是你传入resolve的参数
// }, function(error) {
//   //失败时同理
// });
/****************************************************同步异步顺序例子*********************************************/
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
//   });
// }
// //在这句话执行后200毫秒，异步操作就执行完了
// //但是由于当前脚本中还有同步操作未执行
// //这个回调函数很久以后才执行
// timeout(200).then((value) => {
//   console.log(value);
// });

// //还有异步操作的情况
// setTimeout(function(){
//   console.log("Other done!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// }, 100);
// //谁先完成谁先执行

// //还有同步操作的情况
// var i = 999999;
// while (i>0) {
//   console.log("hahaha"+i);
//   i--;
// }
// //两个异步会在所有hahaha之后才输出
/****************************************************异步加载图片例子*********************************************/
// function loadImageAsync(url) {
//   return new Promise(function(resolve, reject) {
//     var image = new Image();

//     image.onload = function() {
//       resolve(image);
//     };

//     image.onerror = function() {
//       reject(new Error('Could not load image at ' + url));
//     };

//     image.src = url;
//   });
// }
// loadImageAsync("http://car3.autoimg.cn/cardfs/product/g23/M03/AF/90/u_autohomecar__wKgFXFeGAuWAL38MAAXs-8pjxYg386.jpg").then(function(imageNode){
//   document.body.appendChild(imageNode);
// });

/****************************************************一个异步操作的结果是返回另一个异步操作*********************************************/
// //P2和P1是两个异步操作，P2要依赖P1的结果
// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("P1 Result"), 3000)
// })

// var p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     //将p1这个promise对象作为resolve的参数
//     //这时p1的状态就会传递给p2
//     //p1的状态决定了p2的状态
//     //如果p1的状态是Pending，那么p2的回调函数就会等待p1的状态改变
//     //如果p1的状态已经是Resolved或者Rejected，那么p2的回调函数将会立刻执行
//     resolve(p1);
//     console.log("P2 has done, waiting for P1")
//   }, 1000)
// })

// p2.then(result => {
//   console.log("P2 received P1:"+result)
// })
// //P2 has done, waiting for P1
// //P2 received P1:P1 Result
/****************************************************promise的状态*********************************************/
// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("P1 Result"), 1000)
// })
// console.log(p1);//Promise { <state>: "pending" }
// setTimeout(() => console.log(p1), 3000)//Promise { <state>: "fulfilled", <value>: "P1 Result" }

/****************************************************promise then方法的链式调用*********************************************/
// //P2和P1是两个异步操作，P2要依赖P1的结果
// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("P1 Result"), 500)
// });

// p1
// .then(function(value){
//   console.log(value);//P1 Result
//   var p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("P2 Result："+value), 1000)
//   })
//   //这里返回的是一个新的promise对象
//   //那么下面的then就会等待这个新的promise执行完成后再根据状态执行
//   //就相当于在这个返回的promise对象上调用then
//   return p2;
// })
// .then(function(value){
//   console.log(value);//P2 Result：P1 Result
//   //这里返回的是一个非promise类型
//   //那么这个返回值可以在下一个then中获取到
//   return "All Good";
// })
// .then(function(value){
//   console.log(value);//All Good
// });

/****************************************************Promise.prototype.catch()*********************************************/
// // 写法一
// var promise = new Promise(function(resolve, reject) {
//   try {
//     throw new Error('test1');
//   } catch(e) {
//     reject(e);
//   }
// });
// promise.catch(function(error) {
//   console.log(error);
// });

// // 写法二
// promise = new Promise(function(resolve, reject) {
//   reject(new Error('test2'));
// });
// promise.catch(function(error) {
//   console.log(error);
// });
// //如果Promise状态已经变成Resolved，再抛出错误是无效的。
// var promise = new Promise(function(resolve, reject) {
//   resolve('ok');
//   throw new Error('test');
// });
// promise
//   .then(function(value) { console.log(value) })
//   .catch(function(error) { console.log(error) });
// // ok

// //catch放在最后处理发生的所有错误
// var promise = new Promise(function(resolve, reject) {
//   resolve("ok1");
//   setTimeout(function() { throw new Error('test') }, 0)
// });
// promise
// .then(value => { 
//   console.log(value);
//   return "ok2" 
// })
// .then(value => {
//   console.log(value);
// })
// .catch(function(value) { console.log(value) });
// // ok
// // Error: test
/****************************************************Promise.all()*********************************************/
// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Result"), 1000);
// })
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Result"), 500);
// })
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Result"), 3000);
// })
// var all = Promise.all([p1, p2, p3]);
// all
// .then((results)=>{
//   console.log("All Done");
//   for (var i of results) {
//     console.log(i);
//   }
// })
// .catch(error => console.log(error));
/****************************************************Promise.race()*********************************************/
// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Result"), 1000);
// })
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Result"), 500);
// })
// var timeout = new Promise((resolve, reject) => {
//   //setTimeout(() => reject("Time Out"), 3000);
//   setTimeout(() => reject("Time Out"), 3000);
// })
// var race = Promise.race([p1, p2, timeout]);
// race
// .then((result)=>{
//   console.log(result);
// })
// .catch(error => console.log(error));
// //P2 Result
/****************************************************Promise.resolve()*********************************************/
// //参数是一个thenable对象
// let thenable = {
//   then: function(resolve, reject) {
//     resolve(42);
//   }
// };
// let p1 = Promise.resolve(thenable);
// p1.then(function(value) {
//   console.log(value);  // 42
// });
// //参数不是具有then方法的对象，或根本就不是对象
// var p = Promise.resolve('Hello');
// p.then(function (s){
//   console.log(s)
// });
// // Hello

// //不带参数的
// //需要注意的是，立即resolve的Promise对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。
// setTimeout(function () {
//   console.log('three');
// }, 0);
// Promise.resolve().then(function () {
//   console.log('two');
// });
// console.log('one');
// // one
// // two
// // three
/****************************************************Generator函数与Promise的结合*********************************************/
function getFoo () {
  return new Promise(function (resolve, reject){
    resolve('foo');
  });
}

var g = function* () {
  try {
    var foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
};

function run (generator) {
  var it = generator();

  function go(result) {

    if (result.done) return result.value;
    //第一次执行next时返回的value是getFoo()返回的Promise对象
    //通过then方法取到异步执行的结果
    //使用next的参数将结果作为yield语句的返回值
    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }
  go(it.next());
}
run(g);

