/* if statement & compare operators & switch */

const id = "100";

if (id == 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}

if (id != 100) {
  console.log("incorrect");
} else {
  console.log("correct");
}

// type도 고려하려면.. (===)
// 추천!!
if (id === 100) {
  console.log("correct");
} else {
  console.log("incorrect");
}

if (id !== 100) {
  console.log("incorrect");
} else {
  console.log("correct");
}

// 아래처럼 하면 변수 id에 값이 할당되지 않았을 경우엔 에러를 발생시킴
if (id) {
  console.log(`ID is ${id}`);
} else {
  console.log("no ID");
}
// 그래서 아래처럼 typeof 를 활용해서 undefined인지 아닌지 확인해는게 더 좋음
if (typeof id != "undefined") {
  console.log(`ID is ${id}`);
} else {
  console.log("no ID");
}

// greater than & less than
const num = 200;
if (num > 300) {
  console.log("greater than 300");
} else if (num > 250) {
  console.log("greater than 250");
} else {
  console.log("small");
}

//logical operators (&&, ||)
const car = "tesla";
const year = 2025;
if (year >= 2025) {
  console.log(`your ${car} is the newest`);
} else if (year > 2020 && year < 2025) {
  console.log(`your ${car} is not bad`);
} else {
  console.log("it is old...");
}

//ternary operators
console.log(car === "tesla" ? "yes" : "no");
console.log(car === "hyundai" ? "yes" : "no");
console.log(year === 2025 ? "yes" : "no");

//SWITCH
const color = "gray";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  default:
    console.log("hmm?");
    break;
}
console.log(day);
