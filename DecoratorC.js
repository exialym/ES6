'use strict';

var _class, _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//无参数修饰器例子
function testable(target) {
  target.isTestable = true;
}

var MyTestableClass = testable(_class = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class;

console.log(MyTestableClass.isTestable); // true

//多参数修饰器例子
function mixins() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return function (target) {
    Object.assign.apply(Object, [target.prototype].concat(list));
  };
}
var Foo = {
  foo: function foo() {
    console.log('foo');
  }
};

var MyClass = (_dec = mixins(Foo), _dec(_class2 = function MyClass() {
  _classCallCheck(this, MyClass);
}) || _class2);


var obj = new MyClass();
obj.foo(); // 'foo'
