/**
 * Created by exialym on 2016/6/8 0008.
 */
/*****************************Unicode*****************/
// console.log("\uD842\uDFB7");// "𠮷"
// console.log("\u20BB7");//乱码
// console.log("\u{20BB7}");//正常解析
// //console.log("\u41");//报错
// console.log("\u{41}");//A
// console.log('\u{1F680}' === '\uD83D\uDE80');//true
/*****************************codePointAt方法*****************/
// var s = '𠮷b';
//
// console.log(s.codePointAt(0).toString(16)); // 20bb7
// console.log(s.codePointAt(2).toString(16)); // 62
// //注意到b应该是第2个字而我们传进了2。
// // 因为这个方法并不能判断这个字符前面的所有字符是双字节还是四字节的，
// // 所以只能按照双字节的下标来。
// // 这个问题是可以解决的。使用for...of循环，它可以正确识别4字节字符。
// var s = '𠮷a';
// for (var ch of s) {
//     console.log(ch.codePointAt(0).toString(16));
// }
/*****************************fromCodePoint方法*****************/
// console.log(String.fromCodePoint(0x20BB7));
// console.log(s.at(0));
/*****************************includes(), startsWith(), endsWith()*****************/
// var s = 'Hello world!';
// s.startsWith('Hello') // true
// s.endsWith('!') // true
// s.includes('o') // true
// s.startsWith('world', 6) // true
// s.endsWith('Hello', 5) // true
// s.includes('Hello', 6) // false
/*****************************repeat*****************/
// 'x'.repeat(3) // "xxx"
// 'hello'.repeat(2) // "hellohello"
// 'na'.repeat(0) // ""
/*****************************repeat*****************/
// console.log('abc'.padStart(10, '0123456789'));
// '123456'.padStart(10, '0') // "0000123456"
// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
/*****************************模板字符串*****************/
// var x = 1;
// var y = 2;
//
// `${x} + ${y} = ${x + y}`;
// // "1 + 2 = 3"
// `${x} + ${y * 2} = ${x + y * 2}`;
// // "1 + 4 = 5"
//
// var obj = {x: 1, y: 2};
// `${obj.x + obj.y}`;
// // 3
// function fn() {
//     return "Hello World";
// }
//
// `foo ${fn()} bar`;
// // foo Hello World bar

/*****************************利用模板字符串编译出一个模板*****************/
// var template = `
// <ul>
//   <% for(var i=0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>
// `;
// function compile(template){
//     var evalExpr = /<%=(.+?)%>/g;
//     var expr = /<%([\s\S]+?)%>/g;
//
//     template = template
//         .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
//         .replace(expr, '`); \n $1 \n  echo(`');
//
//     template = 'echo(`' + template + '`);';
//
//     var script =
//         `(function parse(data){
//     var output = "";
//
//     function echo(html){
//       output += html;
//     }
//
//     ${ template }
//
//     return output;
//   })`;
//
//     return script;
// }
// var parse = eval(compile(template));
// console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }));
/*****************************标签模板*****************/
// var a = 5;
// var b = 10;
//
// function tag(s, v1, v2) {
//     console.log(s[0]);
//     console.log(s[1]);
//     console.log(s[2]);
//     console.log(v1);
//     console.log(v2);
//
//     return "OK";
// }
//
// tag`Hello ${ a + b } world ${ a * b}`;
// //相当于tag(['Hello ', ' world ', ''], 15, 50)
//
// //使用标签模板可以方便的过滤用户输入的字符串
// var message =
//     SaferHTML`<p>${sender} has sent you a message.</p>`;
//
// function SaferHTML(templateData) {
//     var s = templateData[0];
//     for (var i = 1; i < arguments.length; i++) {
//         var arg = String(arguments[i]);
//
//         // Escape special characters in the substitution.
//         s += arg.replace(/&/g, "&amp;")
//             .replace(/</g, "&lt;")
//             .replace(/>/g, "&gt;");
//
//         // Don't escape special characters in the template.
//         s += templateData[i];
//     }
//     return s;
// }