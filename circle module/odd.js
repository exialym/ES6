//由于even已经执行了，even指向even模块导出的even的引用
import { even } from './even';
//第一行输出这个
console.log('in odd');
export function odd(n) {
	//这里虽然其实并没有even实际的函数，但是引用是存在的
	//等一会儿跳回even执行完，这个函数就有实际的作用了

	//而在CommonJS中，这里会去读even模块生成的对象中的exports中的值
	//这时exports中的这个值还是undefined，这里就报错了

  return n != 0 && even(n - 1);
}
//执行完odd回去执行even
