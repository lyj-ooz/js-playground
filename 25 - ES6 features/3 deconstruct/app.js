// deconstructuring assignment

let a, b;
[a, b] = [100, 200];

// rest pattern
let c, d;
[c, d, ...rest] = [300, 400, 500, 600, 700];
console.log(c, d, rest);

// 배열 분해하기
const people = ["apple", "banana", "carrot"];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// 함수에서 리턴된 값을 분해하기
function getPeople() {
  return ["apple", "banana", "carrot"];
}

let [p1, p2, p3] = getPeople();
console.log(p1, p2, p3);

// 오브젝트 분해하기
const person = {
  name: "John Doe",
  age: 22,
  city: "Long Island",
  sayHello: function () {
    console.log("hi!");
  },
};

/* 
예전 방식이면...
const name = person.name;
const age = person.age;
*/
// 하지만 ES6 분해 방법으로 하면..
const { name, age, city, sayHello } = person;
console.log(name, age, city);
console.log(sayHello);
sayHello();
