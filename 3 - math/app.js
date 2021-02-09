const num1 = 100;
const num2 = 50;
let val;

// 1. Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// 2. Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8); // 반올림
val = Math.ceil(2.3); // 올림
val = Math.floor(2.8); // 내림
val = Math.sqrt(16);
val = Math.abs(-3); //절대값
val = Math.pow(8, 2); //2제곱
val = Math.min(2, 33, 5, 1, 6, -9); //가장 작은값 찾기
val = Math.max(2, 33, 5, 1, 6, -9); // 가장 큰 값~
val = Math.random(); // 랜덤 수
val = Math.floor(Math.random() * 20 + 1); // 1-20 사이에 랜덤 수 구하기

console.log(val);
