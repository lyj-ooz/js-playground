// console.log(1);

document.querySelector("button").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "test.txt", true);

  // 로딩되는 동안 돌아가는거 보일때 사용할 수 있음
  xhr.onprogress = function () {
    // ...
    // 여기서는 readyStatus가 3인 동안 실행됨 (3은 processing request 상태를 뜻함)
  };

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
      document.querySelector(".content").textContent = this.responseText;
    }
  };

  xhr.onerror = function () {
    //
  };

  xhr.send();
});
