import {foo} from './a.js';
console.log('in b');
export function bar() {
  console.log('bar');
  if (Math.random() > 0.5) {
    foo();
  }
}