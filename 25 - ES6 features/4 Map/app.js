const map1 = new Map();

const key1 = "string",
  key2 = {},
  key3 = function () {};

map1
  .set(key1, "hi") //
  .set(key2, { name: "apple", age: 22 }) //
  .set(key3, "key3");

console.log(map1);
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));
console.log(map1.size);

for (let [key, value] of map1) {
  console.log(key, value);
}

//loop through keys only
for (let k of map1.keys()) {
  console.log(k);
}
//loop through values only
for (let v of map1.values()) {
  console.log(v);
}

// map -> array
const toArr = Array.from(map1);
console.log(toArr);

const valArr = Array.from(map1.values());
console.log(valArr);
