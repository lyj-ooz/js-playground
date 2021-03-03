//create symbol
const sym1 = Symbol();
const sym2 = Symbol("sym2");

console.log(sym2.toString());
console.log(sym2.description);

// unique key for object
const key1 = Symbol();
const key2 = Symbol("key2");

const myObj = {
  value: 1,
};

myObj[key1] = "ha!";

console.log(myObj);
console.log(myObj[key1]);

for (const key in myObj) {
  console.log(key); // symbol 키는 출력 안됨
}

// symbols 부분은 JSON.stringify에서 무시된다.
const str = JSON.stringify(myObj);
console.log(str);
