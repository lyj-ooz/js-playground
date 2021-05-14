const container = document.querySelector(".container");
const todoInput = document.querySelector(".input input");
const todoCards = document.querySelector(".todo-cards");
const finishedCards = document.querySelector(".finished-cards");
const todoCardsSection = document.querySelector(".todo");
const finishedCardsSection = document.querySelector(".finished");
const cardsSections = document.querySelector(".todo, .finished");
let todos;
let finished;

//todo-cards, finished-cards div에 마우스가 눌리면 div들을 싹 새로 불러온다음 drag 이벤트를 준다.
container.addEventListener("mousedown", () => {
  const cardDivs = document.querySelectorAll(
    ".todo-cards div, .finished-cards div"
  );

  cardDivs.forEach((cardDiv) => {
    cardDiv.addEventListener("dragstart", () => {
      cardDiv.classList.add("dragging");
    });
    cardDiv.addEventListener("dragend", () => {
      cardDiv.classList.remove("dragging");
    });
  });
});

//finished div에 dragover 이벤트가 일어나면 finished-cards에 드래그로 끌고 온 div를 자식 요소로 추가한다.
finishedCardsSection.addEventListener("dragover", (e) => e.preventDefault());
finishedCardsSection.addEventListener("drop", (e) => {
  e.preventDefault();

  const dragging = document.querySelector(".dragging");
  finishedCards.appendChild(dragging);

  const data = {
    id: dragging.dataset.id,
    val: dragging.innerText,
  };
  saveToLocal(data, "finished");
  removeFromLocal(dragging.dataset.id, "todo");
});

//todo div에 dragover 이벤트가 일어나면 todo-cards에 드래그로 끌고 온 div를 자식 요소로 추가한다.
todoCardsSection.addEventListener("dragover", (e) => e.preventDefault());
todoCardsSection.addEventListener("drop", (e) => {
  e.preventDefault();

  const dragging = document.querySelector(".dragging");
  todoCards.appendChild(dragging);

  const data = {
    id: dragging.dataset.id,
    val: dragging.innerText,
  };
  saveToLocal(data, "todo");
  removeFromLocal(dragging.dataset.id, "finished");
});

// form 태그 안에 들어있는 input에 내용을 입력 후 엔터를 눌러도 form의 원래 액션이 일어나지 않도록 하기 위해서.
document.querySelector(".input form").addEventListener("submit", (e) => {
  e.preventDefault();
});

todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const inputVal = todoInput.value;

    if (inputVal.trim() === "") return;

    const todoID = Date.now().toString();
    const todoData = {
      id: todoID,
      val: inputVal,
    };
    addTodoToCards(inputVal, todoID);
    saveToLocal(todoData, "todo");

    todoInput.value = "";
  }

  e.preventDefault();
});

// clear input field when lose focus
todoInput.addEventListener("focusout", () => {
  todoInput.value = "";
});

function addTodoToCards(txt, id) {
  //1. make todo div
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("draggable", true);
  todoDiv.dataset.id = id;
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

function saveToLocal(val, tag) {
  if (tag === "todo") {
    if (localStorage.getItem("todo")) {
      todos = JSON.parse(localStorage.getItem("todo"));
    } else {
      todos = [];
    }
    todos.push(val);
    localStorage.setItem("todo", JSON.stringify(todos));
  } else {
    if (localStorage.getItem("finished")) {
      finished = JSON.parse(localStorage.getItem("finished"));
    } else {
      finished = [];
    }
    finished.push(val);
    localStorage.setItem("finished", JSON.stringify(finished));
  }
}

function removeFromLocal(val, from) {
  if (from === "todo") {
    // todo에서 지운다
    const todos = JSON.parse(localStorage.getItem("todo"));
    const idx = todos.findIndex((todo) => {
      return todo.id === val;
    });
    todos.splice(idx, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
  } else {
    // finished에서 지운다
    const finished = JSON.parse(localStorage.getItem("finished"));
    const idx = finished.findIndex((f) => {
      return f.id === val;
    });
    finished.splice(idx, 1);
    localStorage.setItem("finished", JSON.stringify(finished));
  }
}
