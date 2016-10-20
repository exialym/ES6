let a = SIMD.Float32x4(1, 2, 3, 4);
let b = SIMD.Float32x4(5, 6, 7, 8);
let c = SIMD.Float32x4.add(a, b); // Float32x4[6, 8, 10, 12]
console.log(c);


//abs
var a = SIMD.Float32x4(-1, -2, 0, NaN);
SIMD.Float32x4.abs(a)// Float32x4[1, 2, 0, NaN]

//neg
var b = SIMD.Float64x2(NaN, Infinity);
SIMD.Float64x2.neg(b)// Float64x2[NaN, -Infinity]


//add,如果两个值相加发生溢出，溢出的二进制位会被丢弃
var a = SIMD.Float32x4(1.0, 2.0, 3.0, 4.0);
var b = SIMD.Float32x4(5.0, 10.0, 15.0, 20.0);
var c = SIMD.Float32x4.add(a, b);
// Float32x4[6.0, 12.0, 18.0, 24.0]

//addSaturate,如果两个值相加发生溢出，返回该数据类型的最大值。
var c = SIMD.Int16x8(32765, 32766, 32767, 32767, 1, 1, 1, 1);
var d = SIMD.Int16x8(1, 1, 1, 5000, 1, 1, 1, 1);
SIMD.Int16x8.addSaturate(c, d);
// Int16x8[32766, 32767, 32767, 32767, 2, 2, 2, 2]

//sub,如果两个值相减发生溢出，溢出的二进制位会被丢弃;
var a = SIMD.Uint16x8(5, 1, 1, 1, 1, 1, 1, 1);
var b = SIMD.Uint16x8(10, 1, 1, 1, 1, 1, 1, 1);
SIMD.Uint16x8.subSaturate(a, b)
// Uint16x8[0, 0, 0, 0, 0, 0, 0, 0]

//subSaturate,如果两个值相减发生溢出，返回该数据类型的最小值。
var c = SIMD.Int16x8(-100, 0, 0, 0, 0, 0, 0, 0);
var d = SIMD.Int16x8(32767, 0, 0, 0, 0, 0, 0, 0);
SIMD.Int16x8.subSaturate(c, d)
// Int16x8[-32768, 0, 0, 0, 0, 0, 0, 0, 0]

//mul
var a = SIMD.Float32x4(-1, -2, 3, 4);
var b = SIMD.Float32x4(3, 3, 3, 3);
SIMD.Float32x4.mul(a, b)
// Float32x4[-3, -6, 9, 12]

//div
var a = SIMD.Float32x4(2, 2, 2, 2);
var b = SIMD.Float32x4(4, 4, 4, 4);
SIMD.Float32x4.div(a, b)
// Float32x4[0.5, 0.5, 0.5, 0.5]

//sqrt
var b = SIMD.Float64x2(4, 8);
SIMD.Float64x2.sqrt(b)
// Float64x2[2, 2.8284271247461903]

//reciprocalApproximation(),求出每个通道的倒数（1 / x）
//float only
var a = SIMD.Float32x4(1, 2, 3, 4);
SIMD.Float32x4.reciprocalApproximation(a);
// Float32x4[1, 0.5, 0.3333333432674408, 0.25]

//reciprocalSqrtApproximation,求出每个通道的平方根的倒数（1 / (x^0.5)）
//float only
var a = SIMD.Float32x4(1, 2, 3, 4);
SIMD.Float32x4.reciprocalSqrtApproximation(a)
// Float32x4[1, 0.7071067690849304, 0.5773502588272095, 0.5]

//shiftLeftByScalar(),将每个通道的值左移指定的位数
//如果左移后，新的值超出了当前数据类型的位数，溢出的部分会被丢弃
//int only
var ix4 = SIMD.Int32x4(1, 2, 3, 4);
var jx4 = SIMD.Int32x4.shiftLeftByScalar(ix4, 32);
// Int32x4[0, 0, 0, 0]

//shiftRightByScalar(),将每个通道的值右移指定的位数
//如果原来通道的值是带符号的值，则符号位保持不变，不受右移影响
//如果是不带符号位的值，则右移后头部会补0。
//int only
var a = SIMD.Int32x4(1, 2, 4, -8);
SIMD.Int32x4.shiftRightByScalar(a, 1);
// Int32x4[0, 1, 2, -4]

