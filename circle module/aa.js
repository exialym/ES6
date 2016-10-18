//a首先加载b，所以先执行b
import {bar} from './b.js';
console.log('a.js');
//这时b已经执行完了，所以bar是有的，输出'bar'
console.log(bar);
export let foo = 'foo';