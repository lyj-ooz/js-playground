/* single element selectors & multiple element selectors */

// [1] single element selectors
// grab "one" element by ID etc..

// 1. getElementById()
console.log(document.getElementById("task-list-a"));

// 1-1) get things from the selected element
console.log(document.getElementById("task-list-a").id);
console.log(document.getElementById("task-list-a").className);

// 1-2) change styling
document.getElementById("task-list-a").style.backgroundColor = "#333";
document.getElementById("task-list-a").style.backgroundColor = "#fff";
// document.getElementById("task-list-a").style.padding = "50px";
// document.getElementById("task-list-a").style.display = "none";

// 1-3) change content
// document.getElementById("task-list-a").textContent = "hahahah";
// document.getElementById("task-list-a").innerText = "hohoho";
// document.getElementById("task-list-a").innerHTML = "<h2>it is innerHTML</h2>";

// 사실 document.getElementById("task-list-a") 부분 같은것은 변수에
// 할당해서 그 변수를 사용하는 것이 좋다.

const taskList = document.getElementById("task-list-a");
// -> 이렇게..

// 2. document.querySelector()
// 여러 개가 있으면 첫번째 것을 선택.
console.log(document.querySelector("#task-list-a"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("h1"));

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";
document.querySelector("li:last-child").style.color = "yellow";
document.querySelector("li:nth-child(3)").style.color = "violet";
document.querySelector("li:nth-child(4)").textContent = "hiiiii";
document.querySelector("li:nth-child(odd)").style.border = "1px solid red";
// 위에처럼 해도 딱 첫번째 요소만 선택됨
// 이럴 땐 multiple selector로 선택해야함

//-------------------------------------------------------------//

// [2] multiple element selectors
// nodelist나 HTMLcollection을 리턴함 -> array로 변환 가능

// 1. document.getElementsByClassName
const items = document.getElementsByClassName("container");
console.log(items);
console.log(items[1]);
items[1].style.color = "gray";
// items[1].textContent = "oh hoo";

// 아래처럼 queryselector로 특정 요소 아래에 있는 요소를 선택할 수도 있다.
const listItems = document
  .querySelector(".container-test")
  .getElementsByClassName("test");
console.log(listItems);

// 2. document.getElementsByTagName
const heading1 = document.getElementsByTagName("h1");
console.log(heading1);

// 3. HTMLCollection은 array가 아니다 (array가 아니지만 for문은 쓸수있음. 그러나 다른 foreach나 map 같은 메소드는 못씀)
// 그래서 array로 변환하기
headingArr = Array.from(heading1);
console.log(headingArr);

// 4. document.querySelectorAll()
// : nodelist를 리턴함. 이건 array처럼 사용할 수 있음(반복문 등..)
const taskItems = document.querySelectorAll("ul li");
console.log(taskItems);

// array로 변환할 필요 없음
taskItems.forEach(function (taskitem, idx) {
  console.log(taskitem);
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");

liOdd.forEach(function (li) {
  li.style.background = "#ccc";
});
