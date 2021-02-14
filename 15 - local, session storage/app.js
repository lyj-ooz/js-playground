/* local storage, session storage */
// 차이점? local storage는 수동으로 직접 삭제해야 하지만
// session storage는 브라우저를 닫으면 없어짐

// 1. local storage
// window 오브젝트에 localStorage가 있음
// local storage에 데이터 저장하려면 string이어야함
// array, object도 string으로 바꿔야함 (JSON.stringify)
// ( * 반대로 하려면 JSON.parse)

// 1-1) set local storage item
//localStorage.setItem("name", "Apple");
//localStorage.setItem("age", "22");

// 1-2) remove from local storage
// localStorage.removeItem("name");

// 1-3) get value from local storage
//const name = localStorage.getItem("name");
//const age = localStorage.getItem("age");
//console.log(name, age);

// 1-4) clear
//localStorage.clear();

// 2. session storage
// sessionStorage.setItem("name", "melon");

// [예제] input에 입력된 값을 localStorage에 저장하기
document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.querySelector("form input").value;

  let taskArr;

  if (localStorage.getItem("tasks") === null) {
    taskArr = [];
  } else {
    //localStorage에서 가져온건(getItem한거) string이니까 JSON.parse 함
    taskArr = JSON.parse(localStorage.getItem("tasks"));
  }

  taskArr.push(task);

  localStorage.setItem("tasks", JSON.stringify(taskArr));

  alert("task saved");

  e.preventDefault();
});

// [예제] localStorage에 있는거 가져와서 console에 찍기
const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.forEach((task) => {
  console.log(task);
});
