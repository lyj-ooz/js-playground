/* functions */

// 1. declarations
function greet(firstName = "john", lastName = "doe") {
  // console.log("hello");
  // return "hello";
  return `Hello ${firstName} ${lastName}`;
}

greetings = greet(); //undefined로 찍히는 것을 방지하기 위해..
console.log(greetings);

greetings = greet("Mike", "Doe");
console.log(greetings);

// 2. function expressions
const square = function (num = 0) {
  return num * num;
};

console.log(square(6));

// 3. IIFEs = Immediately Invokable Function Expressions
// declare and run at the same time
(function () {
  console.log("IIFEs!!");
})();

(function (num) {
  console.log(`IIFEs!! ${num}`);
})(7);

// 4. property methods
const todo = {
  add: function () {
    console.log("add todo..");
  },
  edit: function (id) {
    console.log(`edit todo ${id}`);
  },
};

todo.add();
todo.edit(5);

todo.delete = function () {
  console.log("delete...");
};

todo.delete();
