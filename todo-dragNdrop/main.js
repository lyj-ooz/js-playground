const container = document.querySelector(".container");
const todoInput = document.querySelector(".input input");
const todoCards = document.querySelector(".todo-cards");
const finishedCards = document.querySelector(".finished-cards");
const todoCardsSection = document.querySelector(".todo");
const finishedCardsSection = document.querySelector(".finished");
const cards = document.querySelectorAll("div[class$='-cards']");
let todos;
let finished;

init();

// 삭제 버튼 누르면 해당 todo, finished 아이템을 삭제.
// 처음 화면에는 삭제 버튼이 없으므로 직접 삭제 버튼에 이벤트리스너를 붙이지 못했다
// 대신 -cards 클래스에 이벤트 리스너를 붙여서 이벤트 위임 방식으로 작성했다.
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.className === "delete") {
      const currTargetClassName = e.currentTarget.className;
      const id = e.target.parentElement.dataset.id;
      let from = "";

      if (currTargetClassName === "todo-cards") {
        from = "todo";
      } else if (currTargetClassName === "finished-cards") {
        from = "finished";
      }
      removeFromLocal(id, from);
      e.target.parentElement.remove();
    }
  });
});

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
  const draggingText = dragging.innerText;
  const data = {
    id: dragging.dataset.id,
    val: draggingText.substring(0, draggingText.length - 2),
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
  const draggingText = dragging.innerText;
  const data = {
    id: dragging.dataset.id,
    val: draggingText.substring(0, draggingText.length - 2),
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

function init() {
  if (localStorage.getItem("todo")) {
    const todoFromLocal = JSON.parse(localStorage.getItem("todo"));
    todoFromLocal.forEach((todo) => {
      addTodoToCards(todo.val, todo.id);
    });
  }

  if (localStorage.getItem("finished")) {
    const finishedFromLocal = JSON.parse(localStorage.getItem("finished"));
    finishedFromLocal.forEach((finished) => {
      addTodoToCards(finished.val, finished.id, "finished");
    });
  }
}

function addTodoToCards(txt, id, to = "") {
  //1. make todo div
  const todoDiv = document.createElement("div");
  todoDiv.setAttribute("draggable", true);
  todoDiv.dataset.id = id;
  todoDiv.innerText = txt;
  // 1-1. make button for delete
  const delButton = document.createElement("button");
  delButton.className = "delete";
  delButton.innerText = "X";
  todoDiv.appendChild(delButton);
  //2. add it to todo-cards
  // if it is for 'finished', add to fnished-cards
  if (to === "finished") {
    finishedCards.appendChild(todoDiv);
  } else {
    todoCards.appendChild(todoDiv);
  }
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

function removeFromLocal(id, from) {
  if (from === "todo") {
    // todo에서 지운다
    const todos = JSON.parse(localStorage.getItem("todo"));
    const idx = todos.findIndex((todo) => {
      return todo.id === id;
    });
    todos.splice(idx, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
  } else {
    // finished에서 지운다
    const finished = JSON.parse(localStorage.getItem("finished"));
    const idx = finished.findIndex((f) => {
      return f.id === id;
    });
    finished.splice(idx, 1);
    localStorage.setItem("finished", JSON.stringify(finished));
  }
}
