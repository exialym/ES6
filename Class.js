/****************************************************************基本使用*************/
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   toString() {
//     return '(' + this.x + ', ' + this.y + ')';
//   }
// }
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