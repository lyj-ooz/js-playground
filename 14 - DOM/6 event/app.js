/* Event listener, Event object, 
   Mouse event, Keyboard event, Input event... 
*/

/* Event listener, Event object */
const addBtn = document.querySelector(".add-task button");

// addBtn.addEventListener("click", function (e) {
//   console.log("hello");
//   //e.preventDefault();
// });

addBtn.addEventListener("click", onClick);

function onClick(e) {
  console.log("hihi");

  let val;
  val = e;

  //Event target elements
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList; //class 이름을 리스트로 얻음
  e.target.innerText = "ha!";

  //Event type
  val = e.type; //어떤 이벤트가 일어났는지..

  //Timestamp
  val = e.timeStamp; //버튼 클릭할때 마다 타임스탬프 찍는다

  //Coordinates(window 기준으로 이벤트가 발생한 위치)
  val = e.clientY;
  val = e.clientX;

  //Coordinates(해당 요소 내에서의 이벤트 발생 위치)
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

/* Mouse event */
const container = document.querySelector(".container");
const heading2 = document.querySelector("h2");
const clearBtn = document.querySelector(".task-list button");

//click
clearBtn.addEventListener("click", runEvent);
//double click
clearBtn.addEventListener("dblclick", runEvent);
//mouse down: 마우스 누르고 있는 상태(안 떼었음)
clearBtn.addEventListener("mousedown", runEvent);
//mouse up: 마우스 눌렀다가 떼면...
clearBtn.addEventListener("mouseup", runEvent);

// 해당 요소에 들어가고 나올때만. 해당 요소 내에 다른 자식 요소에 마우스 놓아도 발생x
//mouse enter
container.addEventListener("mouseenter", runEvent);
//mouse leave
container.addEventListener("mouseleave", runEvent);

// mouse over, mouse out 은 해당 요소 내에 있는 자식 요소로 마우스를 옮겨도 발생한다.
//mouse over
container.addEventListener("mouseover", runEvent);
//mouse out
container.addEventListener("mouseout", runEvent);

//mouse move -> 해당 요소 내에서 마우스가 가는곳 모두 발생(게임으로 활용)
//container.addEventListener("mousemove", runEvent);

function runEvent(e) {
  //console.log(`Event type: ${e.type}`);
}

// form event (??)
const form = document.querySelector("form");
const taskInput = document.querySelector("form input");

form.addEventListener("submit", runEvent2);

function runEvent2(e) {
  console.log(`Event type: ${e.type}`);

  //get input value
  console.log(taskInput.value);
  taskInput.value = ""; //input칸에 있는 글씨 없애기

  e.preventDefault();
}

/* Keyboard event & Input event */
// 아래 들어갈 이벤트 종류
// keyboard 관련 이벤트 종류: keydown, keyup, keypress
// input 관련 이벤트 종류: focus, blur(focus였다가 다른데 클릭하면 발생),
//                     cut(잘라내기 하면 발생함), paste, copy
//                     input(input요소에서 하는 모든것에 발생, 복사 등 할때도 발생)
taskInput.addEventListener("input", runEvent3);

function runEvent3(e) {
  console.log(`Event type: ${e.type}`);
  // console.log(e.target.value);
}

/* change event - select 박스랑 활용한다 */
const select = document.querySelector("select");

select.addEventListener("change", function (e) {
  console.log(`Event type: ${e.type}`);
  console.log(e.target.value);
});
