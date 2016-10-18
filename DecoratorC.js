'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _desc2, _value2, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

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
function readonly(target, name, descriptor) {
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
var Person = (_class = function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: 'name',
    value: function name() {
      return 'hakulamatata';
    }
  }]);

  return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, 'name', [readonly], Object.getOwnPropertyDescriptor(_class.prototype, 'name'), _class.prototype)), _class);

var a = new Person();
a.name();

//一个可以输出日志的例子：
var Math = (_class2 = function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, [{
    key: 'add',
    value: function add(a, b) {
      return a + b;
    }
  }]);

  return Math;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'add', [log], Object.getOwnPropertyDescriptor(_class2.prototype, 'add'), _class2.prototype)), _class2);


function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function () {
    console.log('Calling "' + name + '" with', arguments);
    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

var math = new Math();

// passed parameters should get logged now
math.add(2, 4);
