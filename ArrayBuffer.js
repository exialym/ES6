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
// console.log(f64a.BYTES_PER_ELEMENT)//8
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
// //模仿concat
// function concatenate(resultConstructor, ...arrays) {
//   let totalLength = 0;
//   for (let arr of arrays) {
//     totalLength += arr.length;
//   }
//   let result = new resultConstructor(totalLength);
//   let offset = 0;
//   for (let arr of arrays) {
//   	//这个方法把一段内容完全复制到另一段内存
//   	//这里就是从result的offset开始完全复制arr
//     result.set(arr, offset);
//     offset += arr.length;
//   }
//   return result;
// }
// concatenate(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4))
// // Uint8Array [1, 2, 3, 4]

// //具有遍历器接口
// let ui8 = new Uint8Array([0, 1, 2]);
// for (let byte of ui8) {
//   console.log(byte);
// }
// // 0
// // 1
// // 2
/***********************************************字节序*************/
// //建立一个4字节的ArrayBuffer
// //这个buffer中可以放一个32位整数，也可以放两个16位整数
// var buffer = new ArrayBuffer(4);
// //建立一个32位整数的视图
// var int32View = new Int32Array(buffer);
// //所有个人电脑几乎都是小端字节序
// //TypedArray数组内部也采用小端字节序读写数据
// //存进去的值将是：0100 0000 0000 0000 0000 0000 0000 0000
// int32View[0] = 2;
// console.log(int32View);//Int32Array { '0': 2 }
// //现在建立一个16位整数的视图，应该可以读出来两个数
// //0100 0000 0000 0000
// //0000 0000 0000 0000
// var int16View = new Int16Array(buffer);
// console.log(int16View);//Int16Array { '0': 2, '1': 0 }

// //判断当前视图是大端序还是小端序
// const BIG_ENDIAN = Symbol('BIG_ENDIAN');
// const LITTLE_ENDIAN = Symbol('LITTLE_ENDIAN');

// function getPlatformEndianness() {
//   let arr32 = Uint32Array.of(0x12345678);
//   let arr8 = new Uint8Array(arr32.buffer);
//   switch ((arr8[0]*0x1000000) + (arr8[1]*0x10000) + (arr8[2]*0x100) + (arr8[3])) {
//     case 0x12345678:
//       return BIG_ENDIAN;
//     case 0x78563412:
//       return LITTLE_ENDIAN;
//     default:
//       throw new Error('Unknown endianness');
//   }
// }
// console.log(getPlatformEndianness());

/***********************************************ArrayBuffer与字符串的互相转换*************/
// // ArrayBuffer转为字符串，参数为ArrayBuffer对象
// function ab2str(buf) {
//   return String.fromCharCode.apply(null, new Uint16Array(buf));
// }
// // 字符串转为ArrayBuffer对象，参数为字符串
// function str2ab(str) {
//   // 每个UTF-16字符占用2个字节
//   var buf = new ArrayBuffer(str.length * 2); 
//   var bufView = new Uint16Array(buf);
//   for (var i = 0, strLen = str.length; i < strLen; i++) {
//     bufView[i] = str.charCodeAt(i);
//   }
//   return buf;
// }
// var buf = str2ab("hello rabbits");
// console.log(ab2str(buf));
/***********************************************TypedArray的各种各种方法*************/
// //TypedArray.prototype.buffer
// var a = new Float32Array(64);
// var b = new Uint8Array(a.buffer);

// var x = new ArrayBuffer(64);
// var v1 = new Uint8Array(x);
// var v2 = new Int16Array(x, 2, 2);
// //TypedArray.prototype.byteLength
// console.log(v1.byteLength) // 64
// console.log(v2.byteLength) // 4
// console.log(v1.length) // 64
// console.log(v2.length) // 2
// //TypedArray.prototype.byteOffset
// console.log(v1.byteOffset) // 0
// console.log(v2.byteOffset) // 2

// //TypedArray.prototype.set()
// var a = new Uint16Array(2);
// a[0] = 8;
// a[1] = 7;
// var b = new Uint16Array(4);
// var c = [1,2];
// //c复制到b的开始
// b.set(c);
// //b将接收到的a保存到自己的第2个位置及以后
// b.set(a, 2);
// console.log(b);//Uint16Array { '0': 1, '1': 2, '2': 8, '3': 7 }
// //a和b是两段独立的内存，互不影响
// a[0] = 6;
// a[1] = 5;
// console.log(b);//Uint16Array { '0': 1, '1': 2, '2': 8, '3': 7 }

//TypedArray.of()
var a = Float32Array.of(0.151, -8, 3.7);
console.log(a);
// Float32Array [ 0.151, -8, 3.7 ]


