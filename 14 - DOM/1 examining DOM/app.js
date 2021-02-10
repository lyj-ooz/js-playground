let val;

val = document;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// 아래처럼 접근할 수도 있지만 추천하진 않음.
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[0].getAttribute("src");

console.log(val);

let scripts = document.scripts; // array가 아니라서 forEach 같은것 못씀
let scriptsArr = Array.from(scripts); //array로 변환하고 반복문 돌리기
scriptsArr.forEach(function (script) {
  console.log(script);
  console.log(script.getAttribute("src"));
});
