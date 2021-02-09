// Template Literals
const fruit = "apple";
const taste = "sweet";
const piece = 5;
let html;
function hello() {
  return "hi";
}

// without template literals (ES5)
html = "<ul><li>" + fruit + "</li><li>" + taste + "</li></ul>";
document.body.innerHTML = html;

// with template literals (ES6) -> use back ticks (`)
html = `
  <ul>
    <li>${fruit}</li>
    <li>${taste}</li>
    <li>${piece}</li>
    <li>${11 + 22}</li>
    <li>${hello()}</li>
    <li>${piece > 3 ? "it's enough!" : "hmm.."}</li>
  </ul>
`;
document.body.innerHTML = html;
