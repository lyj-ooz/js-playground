const submitBtn = document.querySelector(".container form .submit");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookISBN = document.querySelector("#book-isbn");
const bookTable = document.querySelector(".book-table");
const bookTableBody = document.querySelector(".book-table tbody");

submitBtn.addEventListener("click", getBookInfo);
bookTable.addEventListener("click", deleteBookInfo);

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function getBookInfo(e) {
  e.preventDefault();

  if (
    bookTitle.value === "" ||
    bookAuthor.value === "" ||
    bookISBN.value === ""
  ) {
    showWarning();
    return;
  }

  const bookData = new Book(bookTitle.value, bookAuthor.value, bookISBN.value);
  writeBookTable(bookData);
  bookTitle.value = "";
  bookAuthor.value = "";
  bookISBN.value = "";
}

function deleteBookInfo(e) {
  if (e.target.className === "delete") {
    e.target.parentElement.remove();
  }
}

function showWarning() {
  const div = document.createElement("div");
  div.className = "warning";
  div.textContent = "모든 정보를 입력하세요!";
  document.querySelector(".container .title").appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 1000);
}

function writeBookTable(data) {
  const tr = makeTableRow(data.title, data.author, data.isbn);
  bookTableBody.appendChild(tr);
}

function makeTableRow(title, author, isbn) {
  const tr = document.createElement("tr");
  const tdTitle = document.createElement("td");
  const tdAuthor = document.createElement("td");
  const tdISBN = document.createElement("td");
  const tdDelete = document.createElement("td");

  tdTitle.className = "title";
  tdAuthor.className = "author";
  tdISBN.className = "isbn";
  tdDelete.className = "delete";

  tdTitle.textContent = title;
  tdAuthor.textContent = author;
  tdISBN.textContent = isbn;
  tdDelete.textContent = "x";

  tr.appendChild(tdTitle);
  tr.appendChild(tdAuthor);
  tr.appendChild(tdISBN);
  tr.appendChild(tdDelete);

  return tr;
}

// console.log(tr);
