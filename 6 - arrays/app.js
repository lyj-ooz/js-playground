// array
// 1. create
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums = new Array(1, 2, 3);
const fruits = ["apple", "grape", "melon"];
// 한 배열에 숫자, string, boolean, undefined, object, dates.. 등 다 들어갈수있다.
const mixed = [1, "apple", 100, true, undefined, { a: 1, b: 2 }, new Date()];
const phone = "iPhone";

let val;

// 2. get array length
val = numbers.length;

// 3. check if it is array
val = Array.isArray(nums);
val = Array.isArray(phone);

// 4. get single value
val = numbers[2];

// 5. insert into array
numbers[0] = 77;
numbers[3] = 20;

// 6. find index of value
val = numbers.indexOf(77);
val = numbers.indexOf(90090);

// 7. mutate(변형, 바꾸다) arrays
// 7-1) push
numbers.push(250);
// 7-2) unshift
numbers.unshift(1);
// 7-3) pop -> 끝에서 없애기
numbers.pop();
// 7-4) shift -> 맨 앞에서 없애기
numbers.shift();
// 7-5) splice values
numbers.splice(1, 1); // 하나 없애기
numbers.splice(2, 4);
// 7-6) reverse
numbers.reverse();

// 8. concatenate arrays
val = numbers.concat(nums);

// 9. sorting arrays
val = fruits.sort();
val = numbers.sort(); // 첫째 자리수로 sort 하므로 제대로 정렬하려면 함수를 따로 이용해야 한다.
val = numbers.sort(function (x, y) {
  return x - y;
});
val = numbers.sort(function (x, y) {
  return y - x;
});

// 10. find
function under50(num) {
  return num < 50;
}
val = numbers.find(under50);

console.log(numbers);
console.log(val);
