/*************************************************类修饰器********************/
// //无参数修饰器例子
// function testable(target) {
//   target.isTestable = true;
// }
// @testable
// class MyTestableClass {}
// console.log(MyTestableClass.isTestable) // true

// //多参数修饰器例子
// function mixins(...list) {
//   return function (target) {
//     Object.assign(target.prototype, ...list)
//   }
// }
// const Foo = {
//   foo() { console.log('foo') }
// };

// @mixins(Foo)
// class MyClass {}

// let obj = new MyClass();
// obj.foo() // 'foo'
/*************************************************方法修饰器********************/
function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false;
  return descriptor;
}
class Person {
	// constructor() {

	// }
	@readonly
	name() { return 'hakulamatata' }
}
var a = new Person();
a.name();

//一个可以输出日志的例子：
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  //获取到原来的方法
  var oldValue = descriptor.value;
  //把新定义的方法给描述符的value
  descriptor.value = function() {
  	//输出调用日志
    console.log(`Calling "${name}" with`, arguments);
    //返回原调用结果
    return oldValue.apply(null, arguments);
  };
  return descriptor;
}
const math = new Math();
math.add(2, 4);//Calling "add" with Arguments [2,4]
