const todoInput = document.querySelector(".input input");
const todoCards = document.querySelector(".todo-cards");
const finishedCards = document.querySelector(".finished-cards");
const todoCardsSection = document.querySelector(".todo");
const finishedCardsSection = document.querySelector(".finished");

//todo-cards div에 마우스가 눌리면 div들을 싹 새로 불러온다음 drag 이벤트를 준다.
todoCards.addEventListener("mousedown", () => {
  const todos = document.querySelectorAll(".todo-cards div");
  console.log(todos);

  todos.forEach((todo) => {
    todo.addEventListener("dragstart", () => {
      todo.classList.add("dragging");
    });
    todo.addEventListener("dragend", () => {
      todo.classList.remove("dragging");
    });
  });
});

//finished div에 dragover 이벤트가 일어나면 finished-cards에 드래그로 끌고 온 div를 자식 요소로 추가한다.
finishedCardsSection.addEventListener("dragover", (e) => {
  e.preventDefault();
  const dragging = document.querySelector(".dragging");
  finishedCards.appendChild(dragging);
});

// form 태그 안에 들어있는 input에 내용을 입력 후 엔터를 눌러도 form의 원래 액션이 일어나지 않도록 하기 위해서.
document.querySelector(".input form").addEventListener("submit", (e) => {
  e.preventDefault();
});

todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const inputVal = todoInput.value;

    if (inputVal.trim() === "") return;

    addTodoToCards(inputVal);
    //그리고 저장 부분은 여기에(추후)

    todoInput.value = "";
  }

  e.preventDefault();
});

// clear input field when lose focus
todoInput.addEventListener("focusout", () => {
  todoInput.value = "";
});

function addTodoToCards(txt) {
  //1. make todo div
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("draggable", true);
  todoDiv.innerText = txt;
  //2. add it to todo-cards
  todoCards.appendChild(todoDiv);
  //3. make it twinkle for 0.3s
  twinkle(todoDiv);
}

function twinkle(elem) {
  elem.classList.add("twinkle");
  setTimeout(() => {
    elem.classList.remove("twinkle");
  }, 300);
}
