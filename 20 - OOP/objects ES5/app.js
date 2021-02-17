//object literals
const person = {
  name: "amy",
  age: 10,
};
console.log(person);

//if you want to create multiple instances... constructor!
// * constructor 함수의 이름은 대문자로 시작한다.
function Person(name) {
  this.name = name;
  this.age = 10;
}

// constructor 함수를 가지고 인스턴스를 만드려면, 'new'를 사용한다.
const person2 = new Person("person2");
console.log(person2);
const person3 = new Person("person3");
console.log(person3);

// this가 뭐냐?
// current instance of the object
function Robot(name) {
  this.name = name;
  console.log(this);
}

const robot1 = new Robot("bot1");

// constructor 함수 내부에 Date() 사용하기
function Computer(name, manufactureDate) {
  this.name = name;
  this.manuDate = new Date(manufactureDate);
  //메소드 추가하기
  // this.calculateAge = function () {
  //   const diff = new Date().getFullYear() - this.manuDate.getFullYear();
  //   return diff;
  // };
  // 사실 이 부분은 어떤 인스턴스냐에 상관없이 동일한 부분이기 때문에 prototype
  // 으로 옮긴다.
}
const com1 = new Computer("Dell", "2009");
const com2 = new Computer("HP", "2002-10-1");
//console.log(com2.calculateAge());

// built in constructor
const re1 = /\w+/;
const re2 = new RegExp("\\w+");
console.log(re1);
console.log(re2);

//
/* Prototypes */
// 자바스크립트에서 각 object는 Prototype을 갖고 있다
// Prototype이란 object 자신!
// all objects inherited their properties and methods from their prototype

// [1] Object.prototype
//   예를 들어, Person 이라는 constructor로 오브젝트를 만들 때,
//   그 오브젝트는 Person.prototype 에서 온 것임
Computer.prototype.calculateAge = function () {
  const diff = new Date().getFullYear() - this.manuDate.getFullYear();
  return diff;
};

Computer.prototype.getRenewed = function (newDate) {
  this.manuDate = new Date(newDate);
};

const com3 = new Computer("Asus", "2010-1-20");
const com4 = new Computer("Surface", "2019-12-1");

console.log(com3);
console.log(com3.calculateAge());

com3.getRenewed("2015-02-04");
console.log(com3.calculateAge());

// 아래처럼 오브젝트.prototype에 접근할 수 있음 (예: hasOwnProperty)
console.log(com3.hasOwnProperty("manuDate")); // actual property
console.log(com3.hasOwnProperty("calculateAge")); // not part of its own property

//
/* Prototypical inheritance */
// -> inherit its prototype

Computer.prototype.greeting = function () {
  return `hello there ${this.name}`;
};

function Customer(name, phone, membership) {
  Computer.call(this, name); // 다른 어딘가에서 함수를 불러와서 이 자리에서 쓰게해주는 함수 -> call()
  this.phone = phone;
  this.membership = membership;
}

//inherit the Computer prototype methods
Customer.prototype = Object.create(Computer.prototype);

//make 'Customer.protytype' return Customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer("apple", "1223-456", "premium");
console.log(customer1);
console.log(customer1.greeting());

// override. Computer에서 추가했던 greeting 메소드를 여기 Customer에서
// override 할 수도 있음
Customer.prototype.greeting = function () {
  return `hello ${this.name}! - Customer - `;
};
console.log(customer1.greeting());

//
/* 오브젝트를 만드는 또 하나의 방법 */
// Object.create()
const personPrototype = {
  greeting: function () {
    return `hello there ${this.name}`;
  },
  getsYoung: function (newAge) {
    this.age = newAge;
  },
};

const jane = Object.create(personPrototype);
jane.name = "jane";
jane.age = 50;
jane.getsYoung(30);
console.log(jane);

const kelly = Object.create(personPrototype, {
  name: { value: "kelly" },
  age: { value: 70 },
});
console.log(kelly);
console.log(kelly.greeting());

// 오브젝트를 만드는 방법이 ES6에서는 조금 더 달라짐
// 사실 다른 언어들은 클래스를 사용하여 오브젝트를 만드는데
// ES5 가 좀 별났음(?)
// 아무튼 ES6에서는 위의 내용과 조금 다름
