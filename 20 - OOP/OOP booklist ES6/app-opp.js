//Book constructor
// function Book(title, author, isbn) {
//   this.title = title;
//   this.author = author;
//   this.isbn = isbn;
// }

/* ES6 classes */
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {}

  showMessage(msg, color) {
    const div = document.createElement("div");
    div.className = `warning ${color}`;
    div.textContent = msg;

    const form = document.querySelector("form");
    document.querySelector(".container").insertBefore(div, form);

    setTimeout(() => {
      div.remove();
    }, 1000);
  }

  addBookList(book) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td class='delete'>x</td>
    `;
    document.querySelector(".book-table tbody").appendChild(tr);
  }

  deleteBookList(target) {
    target.parentElement.remove();
  }

  clearInput() {
    document.querySelector("#book-title").value = "";
    document.querySelector("#book-author").value = "";
    document.querySelector("#book-isbn").value = "";
  }
}
//UI constructor
//function UI() {}

// UI.prototype.showMessage = function (msg, color) {
//   const div = document.createElement("div");
//   div.className = `warning ${color}`;
//   div.textContent = msg;

//   const form = document.querySelector("form");
//   document.querySelector(".container").insertBefore(div, form);

//   setTimeout(() => {
//     div.remove();
//   }, 2000);
// };

// UI.prototype.addBookList = function (book) {
//   const tr = document.createElement("tr");
//   tr.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td class='delete'>x</td>
//   `;
//   document.querySelector(".book-table tbody").appendChild(tr);
// };

// UI.prototype.deleteBookList = function (target) {
//   target.parentElement.remove();
// };

// UI.prototype.clearInput = function () {
//   document.querySelector("#book-title").value = "";
//   document.querySelector("#book-author").value = "";
//   document.querySelector("#book-isbn").value = "";
// };

// submit button Event listener
document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault();

  const ui = new UI();
  const bookTitle = document.querySelector("#book-title").value;
  const bookAuthor = document.querySelector("#book-author").value;
  const bookISBN = document.querySelector("#book-isbn").value;

  if (bookTitle === "" || bookAuthor === "" || bookISBN === "") {
    ui.showMessage("fill in all the fields", "red");
    return;
  }

  const book = new Book(bookTitle, bookAuthor, bookISBN);
  ui.addBookList(book);
  ui.showMessage("book added!", "green");
  ui.clearInput();
});

// delete button Event listener
document.querySelector(".book-table").addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    const ui = new UI();
    ui.deleteBookList(e.target);
    ui.showMessage("book deleted!", "green");
  }
});
