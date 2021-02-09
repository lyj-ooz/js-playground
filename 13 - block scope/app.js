/* global scope */
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 11;
  let b = 22;
  const c = 33;
  console.log("function Scope: ", a, b, c);
}
test();

console.log("Global Scope: ", a, b, c);

/* block scope */
// block? 괄호로 둘러쌓인거..
if (true) {
  // block scope
  var a = 111;
  let b = 222;
  const c = 333;
  console.log("block Scope - if: ", a, b, c);
}

console.log("Global Scope: ", a, b, c);

for (let a = 0; a < 10; a++) {
  console.log(`loop : ${a}`);
}

console.log("Global Scope: ", a, b, c);

// 계속 바뀌는 var 변수...
// 이래서 let, const 가 생겨난 것이라고 함
// var 는 function scope, let과 const는 block scope
