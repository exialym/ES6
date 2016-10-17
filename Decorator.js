//无参数修饰器例子
function testable(target) {
  target.isTestable = true;
}
@testable
class MyTestableClass {}
console.log(MyTestableClass.isTestable) // true

//多参数修饰器例子
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}
const Foo = {
  foo() { console.log('foo') }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo() // 'foo'