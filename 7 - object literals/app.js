// Object Literals
/* constructor나 prototype은 나중에 다룰 것임 */
const person = {
  firstName: "Apple",
  lastName: "Smith",
  age: 33,
  email: "as@test.com",
  hobbies: ["music", "travel"],
  address: {
    city: "Miami",
    state: "Florida",
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

let val;
val = person;

// 1. get specific value
val = person.firstName;
val = person["firstName"];
val = person.age;
val = person.hobbies;
val = person.hobbies[0];
val = person.address;
val = person.address.state;
val = person.address["state"];
val = person.getBirthYear();

console.log(val);

// 2. arrays of objects
const people = [
  { name: "banana", age: 13 },
  { name: "pear", age: 33 },
  { name: "grape", age: 10 },
];

for (let i = 0; i < people.length; i++) {
  const element = people[i].name;
  console.log(element);
}
