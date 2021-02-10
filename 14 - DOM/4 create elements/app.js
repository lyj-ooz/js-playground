/* Create elements & Insert into DOM*/

// 1. create element
const li = document.createElement("li"); //li 만들기

// 2. add class
// li.className = "list-item";

// 3. add an ID
// li.id = "new-item";

// 4. add any attributes -> .setAttribute()
// li.setAttribute("title", "new-item");

// 5. create text node and append !
li.appendChild(document.createTextNode("List item!"));

// 5-1) create new link element
const link = document.createElement("a");
link.innerHTML = "<i></i>";
li.appendChild(link);

// 6. append li as child to ul
document.querySelector("ul").appendChild(li);

console.log(li);
