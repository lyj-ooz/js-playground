// window methods, objects, property

window.console.log(12345);
console.log(12345);

//alert, prompt, confirm
// 1. alert
//window.alert("hi");
//alert("hi");

// 2. prompt
//const input = prompt();
//alert(input);

// 3. confirm
// if (confirm("are you human?")) {
//   console.log("yes"); //팝업창에서 '확인'을 누르면 이 부분이 출력됨
// } else {
//   console.log("no"); //'취소'를 누르면 이 부분이 출력됨..
// }

/* Window property */
// window height, width -> 인터랙티브 관련 활용됨
let val;

// 1. outer height, width
val = window.outerHeight;
val = window.outerWidth;
console.log(val);

// 2. inner height, width
val = window.innerHeight;
val = window.outerWidth;

// 3. scroll points
// 스크롤 내리면서 애니메이션 작동되게 할 때 활용.
val = window.scrollY; // 스크롤된 위치 (y축)
val = window.scrollX; // 스크롤된 위치 (x축)

/* location object */
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.search; // 검색 쿼리 부분 가져옴
//window.location.href = "http://google.com"; //리다이렉트...
//window.location.reload(); // 페이지를 계속 다시 로드함.

/* history object */
// 방문 기록
//window.history.go(-1); // -> -1 이면 방금 방문했던 전 페이지, -2면 두번째 전 페이지...
val = window.history.length;

/* navigator object */
// 크롬, 파이어폭스 등 브라우저 자체와 관련있는 object.
// 옛날 netscape navigator 브라우저를 딴 이름..
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion; //브라우저의 버전
val = window.navigator.userAgent;
val = window.navigator.platform; // 윈도우에서 어쩌구,, 맥에서 어쩌구,,
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
