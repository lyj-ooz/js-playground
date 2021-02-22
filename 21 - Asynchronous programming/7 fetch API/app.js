document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getAPI);

function getText() {
  fetch("test.txt")
    .then(function (res) {
      return res.text(); // .txt 파일을 다루기 때문에 .text() 메소드를 사용한것임. 그리고 여기서 또 promise를 반환함
    })
    .then(function (data) {
      // console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getJSON() {
  fetch("test.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let inner = "";
      data.forEach((d) => {
        inner += `
          <div>
            <h2>${d.title}</h2>
            <p>${d.body}</p>
          </div>
        `;
      });

      document.getElementById("output").innerHTML = inner;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}

function getAPI() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      // console.log(res.ok);
      return res.json();
    })
    .then(function (data) {
      let inner = "";

      data.forEach(function (d) {
        console.log(d.login);

        inner += `
          <li>${d.login}</li>
        `;

        document.getElementById("output").innerHTML = inner;
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}
