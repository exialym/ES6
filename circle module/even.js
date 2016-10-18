//转去执行odd
import { odd } from './odd'
//这是第二行输出
console.log('in even');
export var counter = 0;
//这句执行完，由于是引用，在odd模块里的even函数就真正有了意义
export function even(n) {
  counter++;
  //这里的odd函数由于odd模块已经执行完所以可以直接获取到真正的函数
  return n == 0 || odd(n - 1);
}
