// 추측해야할 랜덤 숫자 생성
let randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);
let tryNum = 3;
const submitBtn = document.querySelector(".content button");
const input = document.querySelector(".content input");
const message = document.querySelector(".content .message");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // 버튼의 텍스트가 'submit'이면 입력값을 가져와서 정답과 비교하는 쪽으로 가고,
  // 버튼의 텍스트가 'submit'이 아니면('play again') reset 한다.
  if (submitBtn.textContent === "submit") {
    submitNumber();
  } else {
    reset();
  }
});

//입력 값을 가져와서 정답과 비교하는 함수에 넘겨준다.
function submitNumber() {
  const inputVal = input.value;

  if (inputVal !== "") {
    decideAnswer(parseInt(inputVal));
  }
}

// 입력값과 정답이 맞는지 아닌지 확인한다.
// 정답이 맞으면 버튼 텍스트가 play again으로 바뀌고 다음 판을 할 수 있다.
// 정답이 아니면 시도 횟수를 1씩 차감한다.
// 이 때 시도 횟수가 1보다 크거나 같으면 사용자가 입력한 값이 답이 아니며, 시도횟수가 얼마 남았는지 보인다.
// 사도 횟수가 0이면 게임 종료라는 문구를 보이고 버튼 텍스트를 play again으로 바꾼다.
function decideAnswer(num) {
  if (num === randomNum) {
    input.style.border = "1px solid #22ac67";
    input.disabled = true;
    submitBtn.textContent = "play again";
    setMessage("Correct!", "#22ac67");
  } else {
    tryNum -= 1;
    if (tryNum >= 1) {
      setMessage(`${num} is incorrect. ${tryNum} guesses left.`, "red");
    } else {
      setMessage(`Game over. The answer was ${randomNum}.`, "red");
      input.disabled = true;
      submitBtn.textContent = "play again";
    }

    input.value = "";
  }
}

// 게임을 맨 처음 상황으로 되돌린다.
// 정답도(랜덤수) 다시 할당하고, 시도 횟수로 3으로 변경된다.
function reset() {
  submitBtn.textContent = "submit";
  input.disabled = false;
  input.value = "";
  input.style.border = "1px solid #aaa";
  message.textContent = "";

  randomNum = Math.floor(Math.random() * 10 + 1);
  console.log(randomNum);

  tryNum = 3;
}

// input 칸 밑에 나오는 메시지
// 정답을 맞췄는지 틀렸는지에 따라 각각 다른 내용과, 컬러를 인자로 받는다.
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
