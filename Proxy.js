/********************************************Proxy***************************/
// var obj = new Proxy({}, {
//   get: function (target, key, receiver) {
//     console.log(`getting ${key}!`);
//     return Reflect.get(target, key, receiver);
//   },
//   set: function (target, key, value, receiver) {
//     console.log(`setting ${key}!`);
//     return Reflect.set(target, key, value, receiver);
//   }
// });
// obj.count = 1
// //  setting count!
// ++obj.count
// //  getting count!
// //  setting count!
/*利用Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。***************************/
// var pipe = (function () {
//   return function (value) {
//     var funcStack = [];
//     var obj = {
//     	double : n => n * 2,
// 		pow    : n => n * n,
// 		reverseInt : n => n.toString().split("").reverse().join("") | 0
//     }
//     var oproxy = new Proxy(obj , {
//       //在获取属性时会被这个方法拦截下来
//       //如果不是表示结束的get，就把这个函数放到栈里等待执行
//       //如果是get，就利用reduce依次执行每个函数。
//       //这里要注意的是每次都要把这个对象返回
//       get : function (pipeObject, fnName) {
//         if (fnName === 'get') {
//           return funcStack.reduce(function (val, fn) {
//             return fn(val);
//           },value);
//         }
//         funcStack.push(obj[fnName]);
//         return oproxy;
//       }
//     });
//     return oproxy;
//   }
// }());
// console.log(pipe(3).double.pow.reverseInt.get); // 63
/*利用Proxy实现一个生成各种DOM节点的通用函数***************************/
// const dom = new Proxy({}, {
//   get(target, property) {
//     return function(attrs = {}, ...children) {
//       const el = document.createElement(property);
//       for (let prop of Object.keys(attrs)) {
//         el.setAttribute(prop, attrs[prop]);
//       }
//       for (let child of children) {
//         if (typeof child === 'string') {
//           child = document.createTextNode(child);
//         }
//         el.appendChild(child);
//       }
//       return el;
//     }
//   }
// });

// const el = dom.div({},
//   'Hello, my name is ',
//   dom.a({href: '//example.com'}, 'Mark'),
//   '. I like:',
//   dom.ul({},
//     dom.li({}, 'The web'),
//     dom.li({}, 'Food'),
//     dom.li({}, '…actually that\'s it')
//   )
// );

// document.body.appendChild(el);
/**************利用set拦截赋值操作********/
// let validator = {
//   set: function(obj, prop, value) {
//     if (prop === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError('The age is not an integer');
//       }
//       if (value > 200) {
//         throw new RangeError('The age seems invalid');
//       }
//     }
//     obj[prop] = value;
//   }
// };

// let person = new Proxy({}, validator);

// person.age = 100;
// person.name = "a";
// console.log(person.age);
// console.log(person.name);
// person.age=300;//RangeError: The age seems invalid

/**************apply方法拦截函数的调用、call和apply操作。********/
// var twice = {
//   apply (target, ctx, args) {
//     return Reflect.apply(...arguments) * 2;
//   }
// };
// function sum (left, right) {
//   return left + right;
// };
// var proxy = new Proxy(sum, twice);
// console.log(proxy(1, 2)) // 6
// console.log(proxy.call(null, 5, 6)) // 22
// console.log(proxy.apply(null, [7, 8])) // 30
/**************has********/
// var handler = {
//   has (target, key) {
//     if (key[0] === '_') {
//       return false;
//     }
//     return key in target;
//   }
// };
// var target = { _prop: 'foo', prop: 'foo_' };
// var proxy = new Proxy(target, handler);
// console.log('_prop' in proxy); // false
// console.log(proxy.hasOwnProperty('_prop')); // true
// for (let a in proxy) {
//   console.log(proxy[a]);
// }
// //foo 
// //foo_

/**************construct********/
// var p = new Proxy(function() {}, {
//   construct: function(target, args) {
//     console.log('called: ' + args.join(', '));
//     return { value: args[0] * 10 };
//   }
// });

// console.log(new p(1,2).value);
// // "called: 1,2"
// // 10
/**************deleteProperty********/
var handler = {
  deleteProperty (target, key) {
    if (key[0] === '_') {
      throw new Error(`Invalid attempt to delete private "${key}" property`);
    }
  }
};

var target = { _prop: 'foo' };
var proxy = new Proxy(target, handler);
delete proxy._prop
// Error: Invalid attempt to delete private "_prop" property