/***********************************************ArrayBuffer*************/
// //生成了一段32字节的内存区域，每个字节的值默认都是0
// var buf = new ArrayBuffer(32);
// console.log(buf.byteLength); // 32
// //建立DataView视图
// var dataView = new DataView(buf);
// //以不带符号的8位整数格式，读取第一个元素
// console.log(dataView.getUint8(0)); // 0
// //TypedArray视图
// //它不是一个构造函数，而是一组构造函数，代表不同的数据格式
// //32位带符号整数视图
// var x1 = new Int32Array(buf);
// x1[0] = 1;
// //8位不带符号整数
// var x2 = new Uint8Array(buf);
// //由于两个视图对应的是同一段内存，一个视图修改底层内存，会影响到另一个视图
// x2[0] = 2;
// x2[1] = 1;
// console.log(x1[0]) // 258

// //直接分配内存生成底层的ArrayBuffer实例，并返回一个对应类型的视图
// var typedArray = new Uint8Array([0,1,2]);
// typedArray[0] = 5;
// console.log(typedArray) // [5, 1, 2]
// console.log(typedArray.length)// 3
/***********************************************ArrayBuffer.prototype.slice()*************/
// var buffer = new ArrayBuffer(8);
// //第一步是先分配一段新内存
// //第二步是将原来那个ArrayBuffer对象指定的部分拷贝过去
// var newBuffer = buffer.slice(0, 3);
/***********************************************ArrayBuffer.isView()*************/
// var buffer = new ArrayBuffer(8);
// ArrayBuffer.isView(buffer) // false

// var v = new Int32Array(buffer);
// ArrayBuffer.isView(v) // true
/***********************************************TypedArray构造函数*************/
// //构造函数TypedArray(buffer, byteOffset=0, length?)
// // 创建一个8字节的ArrayBuffer
// var b = new ArrayBuffer(8);
// // 创建一个指向b的Int32视图，开始于字节0，直到缓冲区的末尾
// var v1 = new Int32Array(b);
// // 创建一个指向b的Uint8视图，开始于字节2，直到缓冲区的末尾
// var v2 = new Uint8Array(b, 2);
// // 创建一个指向b的Int16视图，开始于字节2，长度为2
// var v3 = new Int16Array(b, 2, 2);
// var i16 = new Int16Array(b, 1);
// // Uncaught RangeError: start offset of Int16Array should be a multiple of 2

// //构造函数TypedArray(length)
// //生成一个8个成员的Float64Array数组64字节
// var f64a = new Float64Array(8);
// f64a[0] = 10;
// f64a[1] = 20;
// f64a[2] = f64a[0] + f64a[1];

// //构造函数TypedArray(typedArray)
// var x = new Int8Array([1, 1]);
// //y开辟了新的内存空间并复制了x的值，然后在新的ArrayBuffer上建立了视图
// //他们两个并不联动
// var y = new Int8Array(x);
// console.log(x[0]) // 1
// console.log(y[0]) // 1
// x[0] = 2;
// console.log(x[0]) // 2
// console.log(y[0]) // 1
// //如果想基于同一段内存，构造不同的视图
// //这里相当于把x视图读取的ArrayBuffer对象传了进去，调用的是第一个构造函数
// var z = new Int8Array(x.buffer);
// console.log(z[0]) // 2

// //构造函数TypedArray(arrayLikeObject)
// var typedArray = new Uint8Array([1, 2, 3, 4]);
// console.log(typedArray);//Uint8Array { '0': 1, '1': 2, '2': 3, '3': 4 }
// var normalArray = Array.prototype.slice.call(typedArray);
// console.log(normalArray);//[ 1, 2, 3, 4 ]
/***********************************************TypedArray数组方法*************/
//模仿concat
function concatenate(resultConstructor, ...arrays) {
  let totalLength = 0;
  for (let arr of arrays) {
    totalLength += arr.length;
  }
  let result = new resultConstructor(totalLength);
  let offset = 0;
  for (let arr of arrays) {
  	//这个方法把一段内容完全复制到另一段内存
  	//这里就是从result的offset开始完全复制arr
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}
concatenate(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4))
// Uint8Array [1, 2, 3, 4]

//具有遍历器接口
let ui8 = new Uint8Array([0, 1, 2]);
for (let byte of ui8) {
  console.log(byte);
}
// 0
// 1
// 2
