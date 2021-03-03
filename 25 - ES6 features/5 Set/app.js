const set1 = new Set();

set1.add(100);
set1.add("A string");
set1.add({ name: "apple" });
set1.add(true);
console.log(set1);

const set2 = new Set([1, true, "string"]);
console.log(set2);

console.log(set2.size);

console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: "apple" })); //false = 오브젝트는 primitive value가 아니기 때문
