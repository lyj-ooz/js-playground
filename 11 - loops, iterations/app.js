/* loops, iterations */

// 1. general loops (for, while, do while)
for (let i = 0; i < 10; i++) {
  // console.log(i);
  if (i === 2) {
    console.log("it is 2 !!");
    continue; //continue를 만나면 바로 다음 반복으로 넘어감
  }

  if (i === 5) {
    break; // break를 만나면 반복문 끝
  }
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log("Number" + i);

  i++;
}

let x = 0;
do {
  console.log(x);
  x++;
} while (x < 10);

// 2. loop through arrays
const cars = ["Ford", "Ferrari", "Hyundai"];

for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  console.log(element);
}

let a = 0;
while (a < cars.length) {
  console.log(cars[a]);
  a++;
}

// 3. forEach -> 배열을 반복문으로 돌 때는 foreach를 활용하자
// 그냥 for문보다 훨씬 깔끔함!
// 그리고!! forEach에는 3가지 인자를 활용할 수 있음
// -> iterator, index, array
// --> array는 foreach로 한번씩 돌때마다 돌고있는 array를 출력함
cars.forEach(function (car, index, arr) {
  console.log(`iterator: ${car}, index: ${index}`);
  console.log(arr);
});

// 4. map -> 뭔가 다른걸 리턴할떄 활용
const users = [
  { id: 1, name: "apple" },
  { id: 2, name: "melon" },
  { id: 12, name: "bugs" },
];

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);

// 5. for...in -> object와 같이 자주 활용함.
const user = {
  firstName: "Amy",
  lastName: "Nikki",
};
for (let x in user) {
  console.log(x); // x는 돌고있는 object의 key임
  console.log(user[x]);
}
