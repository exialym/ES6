/**
 * Created by exialym on 2016/6/8 0008.
 */
/*****************************2进制和8进制*****************/
Number('0b111')  // 7
Number('0o10')  // 8
/*****************************新方法和常量*****************/
//它们与传统的全局方法isFinite()和isNaN()的区别在于，
// 传统方法先调用Number()将非数值的值转为数值，再进行判断，
// 而这两个新方法只对数值有效，非数值一律返回false。
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.EPSILON// 2.220446049250313e-16
Number.EPSILON.toFixed(20)// '0.00000000000000022204'
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1// true
Number.MAX_SAFE_INTEGER === 9007199254740991// true
Number.isSafeInteger('a') // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(Infinity) // false
Number.isSafeInteger(-Infinity) // false
Number.isSafeInteger(3) // true
Number.isSafeInteger(1.2) // false
Number.isSafeInteger(9007199254740990) // true
Number.isSafeInteger(9007199254740992) // false
/*****************************指数*****************/
2 ** 2 // 4
a **= 2;
// 等同于 a = a * a;
/*****************************Math对象*****************/
Math.trunc()
Math.sign()
Math.cbrt()
Math.clz32()
Math.imul()
Math.fround()
Math.hypot()
Math.expm1()
Math.log1p()
Math.log10()
Math.log2()
Math.sinh(x)
Math.cosh(x)
Math.tanh(x)
Math.asinh(x)
Math.acosh(x)
Math.atanh(x)