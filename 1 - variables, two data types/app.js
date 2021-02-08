/*
여러줄 코멘트..
*/

// console 사용하기
console.log("hello");
let a = 123;
console.log(a);
console.table({ a: 1, b: 2 });
console.error("this is some error");
console.warn("this is a warning");
console.time("it is time");
console.log("...");
console.timeEnd("it is time");

// 변수 선언
// var, let, const
var name = "john";
console.log(name);
name = "Smith";
console.log(name);

// 변수 initializing
var greeting; // 선언만 한다
console.log(greeting);
greeting = "Hola";
console.log(greeting);

// 글자, 숫자, _, $ 만 변수 이름에 넣을 수 있음
// 여러 단어일때는 camel case 로 주로 한다
var firstName = "Mike";

// var와 let -> block scope
// const
// cannot be reassigned
const nickname = "mike";
console.log(nickname);

// const greet; -> const는 선언하고 값도 할당해야함
// 그럼 const로 된 오브젝트나 배열 같은건?
const person = {
  name: "ye",
  age: 50,
};

console.log(person);
person.name = "sara";

const nums = [1, 2, 3, 4, 5];
nums.push(6);
// -> 안에 있는 데이터를 수정하는건 괜찮지만 아예 재할당하는건 안됨

// Two data types in js
// 1) primitive data types
// : 변수가 접근하는 바로 그 위치에 데이터를 저장함
// : 스택에 데이터가 저장됨, accessed by the actual value
// : 대표적인 primitive data type 들은...
//  -> string, number, boolean, null(empty value), undefined(할당되지 않음 상태), symbols

// 2) reference data type
// : 레퍼런스로 메모리에 접근하는 데이터 타입
// : 데이터가 변수에 저장된게 아님
// : 힙에 데이터가 저장됨
// -> array, object literals, functions, dates, ...

//Primitve data types (6)
//string, number, boolean, null, undefine, symbol
// [1] string
const fruit = "apple";
console.log(typeof fruit);
// [2] number
const weight = 12345;
console.log(typeof weight);
// [3] boolean
const answer = true;
console.log(typeof answer);
// [4] null
const empty = null;
console.log(typeof empty); // 엥? null인데 'object'가 나오네? 일종의 버그.
// [5] undefined
let school;
console.log(typeof school);
// [6] symbol
const sym = Symbol();
console.log(typeof sym);

// REFERENCE data types (4)
// array, object literals, dates, functions ...
// typeof 찍으면 모두 'object'로 나올것임
// [1] array
const hobbies = ["movie", "music", "drawing"];
console.log(typeof hobbies);
// [2] object literal
const students = {
  name: "cory",
  age: 77,
};
console.log(typeof students);
// [3] dates
const today = new Date();
console.log(typeof today);
