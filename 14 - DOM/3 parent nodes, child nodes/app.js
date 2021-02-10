/* parent nodes & child nodes */
let val;

const list = document.querySelector("ul");
const listItem = document.querySelector("li:first-child");

// 1. get child nodes
//  : .childNodes는 모든 형태의 node를 가져옴 (element들도 포함)
val = list.childNodes; // 이 안에 들어있는 text는 line break임
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // 3
/*
  1 - element
  2 - attribute (deprecated)
  3 - text node
  8 - comment
  9 - document itself
  10 - doctype
*/

// 1-1) get children element nodes
// : .children은 element만 가져옴
val = list.children; // 그래서 children으로 하면 text 없이 나옴
val = list.children[2];
list.children[2].textContent = "Hello";

// 1-2) get children of children
val = list.children[3].children;
// list.children[3].children[0].id = 'test';

// First child
val = list.firstChild; // 이러면 또 text가 나옴
val = list.firstElementChild; // 이렇게 하면 element 중에서만 첫번째 것을 가져옴

// Last child
val = list.lastChild; // 이러면 또 text가 나옴
val = list.lastElementChild; // 이렇게 하면 element 중에서만 마지막 것을 가져옴

// child elements가 몇 개 있는지
val = list.childElementCount;

// 2. get parent nodes
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// 3. get siblings
// 3-1) next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
// 3-2) previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
