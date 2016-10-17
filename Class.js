/****************************************************************基本使用*************/
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
// console.log(typeof Point) // "function"
// console.log(Point === Point.prototype.constructor) // true
// //由此可见其实ES6的class就是换了一种定义对象的写法，本质上的实现和使用还是和ES5相同的
// var a = new Point(10,20);
// //类的方法都定义在prototype对象上面
// console.log(a.toString());//(10, 20)
// console.log(Point.prototype.toString.call(a));//(10, 20)
// //由于类的方法都定义在prototype对象上面
// //所以类的新方法可以添加在prototype对象上面
// //Object.assign方法可以很方便地一次向类添加多个方法。
// Object.assign(Point.prototype, {
// 	moveLeft(step){
// 		this.x -= step;
// 	},
// 	moveRight(step){
// 		this.x += step;
// 	}
// });
// a.moveLeft(1);
// console.log(a.toString());//(9, 20)
// //实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上
// console.log(a.hasOwnProperty('x')) // true
// console.log(a.hasOwnProperty('y')) // true
// console.log(a.hasOwnProperty('toString')) // false
// console.log(Object.getPrototypeOf(a).hasOwnProperty('toString')) // true
/****************************************************************constructor方法*************/
// class Foo {
//   constructor() {
//     return Object.create(null);
//   }
// }

// console.log(new Foo() instanceof Foo);
// // false
/****************************************************************Class表达式*************/
// //如果使用表达式的话，类名是变量名而不是class后面的名字
// const MyClass = class Me {
//   getClassName() {
//     return Me.name;
//   }
// };
// let inst = new MyClass();
// inst.getClassName() // Me
// Me.name // ReferenceError: Me is not defined
// //使用表达式可以写出立即实例化的匿名类
// let person = new class {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     console.log(this.name);
//   }
// }('张三');
// person.sayName(); // "张三"
/****************************************************************Class的继承*************/
class ColorPoint extends Point {
  constructor(x, y, color) {
  	//子类必须在constructor方法中调用super方法，否则新建实例时会报错
  	//这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工
  	//如果不调用super方法，子类就得不到this对象
    super(x, y); // 调用父类的constructor(x, y)
    //只有调用super之后，才可以使用this关键字，否则会报错
    this.color = color;
  }
  toString() {
    return this.color + ' point:' + super.toString(); // 调用父类的toString()
  }
}
// let cp = new ColorPoint(25, 8, 'green');
// console.log(cp instanceof ColorPoint) // true
// console.log(cp instanceof Point) // true
// console.log(cp.toString());//green point:(25, 8)

// //Class继承的内部实现
// class A {
// }

// class B {
// }
// // B的实例继承A的实例
// Object.setPrototypeOf(B.prototype, A.prototype);
// // B继承A的静态属性
// Object.setPrototypeOf(B, A);
// //Object.setPrototypeOf的实现
// Object.setPrototypeOf = function (obj, proto) {
//   obj.__proto__ = proto;
//   return obj;
// }
/****************************************************************父类与子类的原型的关系*************/
// class A {
// }
// class B extends A {
// }
// console.log(B.__proto__ === A) // true
// console.log(B.prototype.__proto__ === A.prototype) // true

// var p1 = new Point(2, 3);
// var p2 = new ColorPoint(2, 3, 'red');
// //通过实例的这个属性可以访问到实例的原型
// console.log(p2.__proto__.toString.call(p2));//red point:(2, 3)
// //通过实例的原型的这个属性可以访问到父类
// console.log(p2.__proto__.__proto__.toString.call(p2));//(2, 3)
/****************************************************************原生构造函数的继承*************/
// //用ES5中的方法来继承Array，行为是不正常的
// function MyArray() {
//   Array.apply(this, arguments);
// }
// MyArray.prototype = Object.create(Array.prototype, {
//   constructor: {
//     value: MyArray,
//     writable: true,
//     configurable: true,
//     enumerable: true
//   }
// });
// var colors = new MyArray();
// colors[0] = "red";
// console.log(colors.length)  // 0
// colors.length = 0;
// console.log(colors[0])  // "red"

// //ES6中的继承就比较正常
// class MyArray extends Array {
//   constructor(...args) {
//     super(...args);
//   }
// }
// var arr = new MyArray();
// arr[0] = 12;
// console.log(arr.length) // 1
// arr.length = 0;
// console.log(arr[0]) // undefined

// //带版本控制的数组
// class VersionedArray extends Array {
//   constructor() {
//     super();
//     this.history = [[]];
//   }
//   commit() {
//     this.history.push(this.slice());
//   }
//   revert() {
//     this.splice(0, this.length, ...this.history[this.history.length - 1]);
//   }
// }
// var x = new VersionedArray();
// x.push(1);
// x.push(2);
// console.log(x) // [1, 2]
// console.log(x.history) // [[]]
// x.commit();
// console.log(x.history) // [[], [1, 2]]
// x.push(3);
// console.log(x) // [1, 2, 3]
// x.revert();
// console.log(x) // [1, 2]
/****************************************************Class的取值函数（getter）和存值函数（setter）*************/
// class CustomHTMLElement {
//   constructor(element) {
//     this.element = element;
//   }

//   get html() {
//     return this.element.innerHTML;
//   }

//   set html(value) {
//     this.element.innerHTML = value;
//   }
// }
// var logoEle = new CustomHTMLElement(document.getElementById("logo"));
// console.log(logoEle.html);
// logoEle.html = "oh no";
/****************************************************Class的取值函数（getter）和存值函数（setter）*************/
// class Foo {
//   constructor(...args) {
//     this.args = args;
//   }
//   * [Symbol.iterator]() {
//     for (let arg of this.args) {
//       yield arg;
//     }
//   }
// }
// for (let x of new Foo('hello', 'world')) {
//   console.log(x);
// }
// // hello
// // world

/****************************************************Class的静态方法*************/
// class Foo {
//   static classMethod() {
//     return 'hello';
//   }
// }
// console.log(Foo.classMethod()) // 'hello'
// var foo = new Foo();
// foo.classMethod()
// // TypeError: foo.classMethod is not a function
/****************************************************Class的静态属性*************/
// // 以下两种写法都无效
// class Foo {
//   // 报错
//   //prop: 2
//   //static prop: 2
// }
// console.log(Foo.prop) // undefined
// Foo.prop = 1;
// console.log(Foo.prop) // 1

/****************************************************new.target属性*************/
// function Person(name) {
//   if (new.target === Person) {
//     this.name = name;
//   } else {
//     throw new Error('必须使用new生成实例');
//   }
// }
// var person = new Person('张三'); // 正确
// var notAPerson = Person.call(person, '张三');  // 报错

// //子类继承父类时，new.target会返回子类。
// class Shape {
//   constructor() {
//     if (new.target === Shape) {
//       throw new Error('本类不能实例化');
//     }
//   }
// }
// class Rectangle extends Shape {
//   constructor(length, width) {
//     super();
//     this.length = length;
//     this.width = width;
//   }
//   to() {
//   	console.log(this.length+'&'+this.width);
//   }
// }
// var y = new Rectangle(3, 4);  // 正确
// y.to();
// var x = new Shape();  // 报错
/****************************************************Mixin模式的实现*************/
function mix(...mixins) {
  class Mix {}
  //将每个类的实例和原型中的属性拷贝到新的类里
  for (let mixin of mixins) {
    copyProperties(Mix, mixin);
    copyProperties(Mix.prototype, mixin.prototype);
  }
  return Mix;
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== "constructor"
      && key !== "prototype"
      && key !== "name"
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}
//使用时
class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}
