//开始执行b时a已经执行了，所以不会重复执行，而是继续往下执行b
import {foo} from './a.js';
console.log('b.js');
//这时由于a没有执行完，foo值没有，所以这里输出undefined
console.log(foo);
export let bar = 'bar';
//b执行完，转回去执行a