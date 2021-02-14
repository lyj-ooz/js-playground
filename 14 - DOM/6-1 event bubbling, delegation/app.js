/* Event bubbling & Event delegation */

// 1. Event bubbling
/*
const taskListTitle = document.querySelector(".container p");
taskListTitle.addEventListener("click", function () {
  console.log("task list title");
});

const container = document.querySelector(".container");
container.addEventListener("click", function () {
  console.log("container");
});
*/

// 2. Event delegation
// 부모 요소에 event listener를 붙이고, e.target을  활용하자
// 특히 li 같이 event가 여러개 붙어있는 경우에 그걸 다 리스너를 붙이지 말고
// 부모 요소에만 리스너를 붙인 후에 e.target ... 을 활용하면 좋다.
document.body.addEventListener("click", function (e) {
  console.log(e);

  if (e.target.nodeName === "LI") {
    console.log("this is li");
  }
  //if (e.target.classList.contains('test')) {

  //}
});
