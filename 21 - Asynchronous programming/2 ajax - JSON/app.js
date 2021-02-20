// console.log(1);

// document.querySelector("button1").addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "test.txt", true);

//   // 로딩되는 동안 돌아가는거 보일때 사용할 수 있음
//   xhr.onprogress = function () {
//     // ...
//     // 여기서는 readyStatus가 3인 동안 실행됨 (3은 processing request 상태를 뜻함)
//   };

//   xhr.onload = function () {
//     if (this.status === 200) {
//       console.log(this.responseText);
//       document.querySelector(".content").textContent = this.responseText;
//     }
//   };

//   xhr.onerror = function () {
//     //
//   };

//   xhr.send();
// });

document.querySelector("#button1").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    console.log(this.status);
    console.log(this.readyState);
    if (this.status === 200 && this.readyState === 4) {
      // console.log(typeof this.responseText);
      // document.querySelector(".customer").textContent = this.responseText;
      const customer = JSON.parse(this.responseText); // JSON 파일에서 온 스트링을 오브젝트로 바꿔줌. 이렇게 바꾸면 이 오브젝트에 dot notation이나 대괄호로 property에 접근할 수 있으니까.
      document.querySelector(".customer").innerHTML = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
        </ul>
      `;
    }
  };

  xhr.send();
});

document.querySelector("#button2").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      const customers = JSON.parse(this.responseText);
      let inner = "";

      customers.forEach((customer) => {
        inner += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
          </ul>
        `;
      });
      document.querySelector(".customers").innerHTML = inner;
    }
  };

  xhr.send();
});
