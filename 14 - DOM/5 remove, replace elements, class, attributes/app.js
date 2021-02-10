/* Removing elements & Replacing elements */

// 1. replace element
// create element
const newHeading = document.createElement("h2");
// add an ID
newHeading.id = "task-title";
// create new text node
const txt = document.createTextNode("new heading");
newHeading.appendChild(txt);
// get the old heading
const oldHeading = document.querySelector("h2");
// get parent
const containerT = document.querySelector(".container-test");
// replace (.replaceChild()를 사용한다)
containerT.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);

// 2. remove element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// class & attributes
//const firstLi = document.querySelector("li:first-child");
const container = document.querySelector(".container-test");

let val;
val = container.children[1];
// class
container.children[1].classList.add("hello");
container.children[1].classList.remove("hello");

// attribute
val = container.children[1].getAttribute("class");
container.children[1].setAttribute("id", "new-id");
val = container.children[1].hasAttribute("href");
container.children[1].removeAttribute("id");
console.log(val);
