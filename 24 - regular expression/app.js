let re;
re = /hello/;

console.log(re);
console.log(re.source);

// exec()
const result = re.exec("hello world");
console.log(result);

// test()
let re2 = /hello/i;
const result2 = re2.test("HeLlO");
console.log(result2);

/* flags: 
  i(case-insensitive), 
  g(global - find everything)
*/

// match()
const str3 = "hello there";
const result3 = str3.match(re2);
console.log(result3);

// search()
const str5 = "ooooo there";
const result5 = str5.search(re2);
console.log(result5);

// replace()
