/* Type conversion & Type Coercion */

//Type Conversion
// 원하는 타입으로 변경하는 것임
let val;
val = 5;

// 1.1 number -> string
val = String(5);

// 1.2 boolean -> string
val = String(true);

// 1.3 date -> string
val = String(new Date());

// 1.4 array -> string
val = String([1, 2, 3]);

//string으로 바꾸는건 toString()도 있다!
val = (5).toString();
val = true.toString();

console.log(val);
console.log(typeof val);
console.log(val.length);
// -> 그래서 String()을 쓰거나 toString() 메소드를 쓰거나~~

// 2.1 string -> number
let aa = "5";
aa = Number(aa);
aa = Number("hello"); // 이건 NaN - 숫자롭 바꾸려고 했는데 바꿀수 없을때 나옴

// 2.2 boolean -> number
aa = Number(true);
aa = Number(false);

//2.3 null -> number
aa = Number(null);

// 또는 parseInt() 를 사용해도 된다
aa = parseInt("100");
// 소수점이 필요하면
aa = parseFloat("100.20"); // 소수점 끝이 0이면 자동 생략될텐데 유지하고 싶으면 toFixed 쓸것
aa = parseFloat("100.31");

//output
console.log(aa);
console.log(typeof aa);
console.log(aa.toFixed());

//Type Coercion
// 자바스크립트가 강제로(!) 타입 바꾸는것

const test1 = "5";
const test2 = 6;
const sum = test1 + test2;

console.log(sum); //56
console.log(typeof sum);
