// 필요한 변수들 선언.
const addTaskBtn = document.querySelector(".add-task button");
const clearAllTaskBtn = document.querySelector(".task-list button");
const inputTask = document.querySelector(".add-task input");
const taskList = document.querySelector(".task-list ul");
let tasks;

/*
 * localStorage에 담긴게 없으면 clear all 버튼도 안보이게
 * localStorage에 담긴게 있으면 ul 아래에 추가해서 보이게 함
 */
if (
  localStorage.getItem("task") === "[]" ||
  localStorage.getItem("task") === null
) {
  clearAllTaskBtn.style.display = "none";
} else {
  // display the tasks
  const taskFromLocal = JSON.parse(localStorage.getItem("task"));
  taskFromLocal.forEach((t) => {
    addList(t);
  });
}

// 이벤트 리스너 붙이기
taskList.addEventListener("click", deleteOneTask);
addTaskBtn.addEventListener("click", addTask);
addTaskBtn.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    addTask(e);
  }
});
clearAllTaskBtn.addEventListener("click", clearAllTask);

/**
 * add 버튼 누르면 작동하는 함수.
 * input에 입력된 값을 가져와서 ul 밑에 붙이는 함수, localStorage에 저장하는 함수를 호출한다.
 */
function addTask(e) {
  e.preventDefault();

  let inputVal = inputTask.value;

  if (inputVal !== "") {
    saveLocal(inputVal);
    addList(inputVal);
    inputTask.value = "";
    clearAllTaskBtn.style.display = "block";
  }
}

/**
 * clear all 버튼 누르면 작동하는 함수
 * ul 밑에 있는 자식 요소를 ''로 만들고, localStorage도 비운다.
 * clear all 버튼도 필요 없으므로(clear all할 리스트가 없으니까) display를 none으로 바꾼다.
 */
function clearAllTask() {
  if (taskList.childElementCount !== 0) {
    localStorage.clear();
    taskList.innerHTML = "";
    clearAllTaskBtn.style.display = "none";
  }
}

/**
 * delete를 누르면 작동하는 함수, task를 한 개씩 지운다.
 * 클릭한 요소의 클래스 이름이 delete면 localStorage에 저장된 값을 다 불러와서
 * 해당 delete에 속한 li와 같은 텍스트인 값을 삭제한 후,
 * 다시 localStorage에 저장한다.
 * 만약 delete 누른 뒤에 ul 밑에 아무것도 없으면 clear all 버튼이 필요 없으므로
 * clear all 버튼이 보이지 않게 display를 none으로 바꾼다.
 */
function deleteOneTask(e) {
  if (e.target.className === "delete") {
    let taskFromLocal = JSON.parse(localStorage.getItem("task"));
    let text = e.target.parentElement.innerText;
    let idx = taskFromLocal.indexOf(text);

    taskFromLocal.splice(idx, 1);
    localStorage.setItem("task", JSON.stringify(taskFromLocal));

    e.target.parentElement.remove();

    if (taskList.childElementCount === 0) {
      clearAllTaskBtn.style.display = "none";
    }
  }
}

/**
 * ul 밑에 붙일 li 요소를 만드는 함수.
 */
function addList(txt) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const spanDel = document.createElement("span");
  span.innerText = txt;
  spanDel.setAttribute("class", "delete");
  spanDel.innerText = "delete";
  li.appendChild(span);
  li.appendChild(spanDel);
  taskList.appendChild(li);
}

/**
 * add 버튼을 누를때마다 input에 입력된 값을 localStorage에 저장하는 함수.
 * add 버튼을 누를 때, 기존에 저장된 값이 없으면 빈 배열을 만들어 push한 뒤 localStorage에 저장.
 * 기존에 저장된 값이 있으면, 저장된 값을 불러와서 배열로 변환, push한 뒤 localStorage에 저장.
 */
function saveLocal(val) {
  if (localStorage.getItem("task")) {
    tasks = JSON.parse(localStorage.getItem("task"));
  } else {
    tasks = [];
  }
  tasks.push(val);

  localStorage.setItem("task", JSON.stringify(tasks));
}
