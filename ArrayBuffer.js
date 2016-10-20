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