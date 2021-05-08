const todoInput = document.querySelector(".input input");
const todoCards = document.querySelector(".todo-cards");

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
