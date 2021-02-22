// fetch API와 ES6의 class로 오브젝트를 만드는 방법으로 업그레이드함.

class Easyhttp {
  // constructor() {
  //   this.http = new XMLHttpRequest();
  // }

  // GET
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url) //
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(new Error(err)));
    });
  }

  // POST
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(new Error(err)));
    });
  }

  // PUT
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(new Error(err)));
    });
  }

  // DELETE
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => resolve("post deleted..."))
        .catch((err) => reject(new Error(err)));
    });
  }
}

// function Easyhttp() {
//   this.http = new XMLHttpRequest();
// }

// // GET
// Easyhttp.prototype.get = function (url, cb) {
//   this.http.open("GET", url, true);

//   let self = this; // 이 부분은 arrow function을 쓰면 해결되는 부분이긴 함

//   this.http.onload = function () {
//     if (self.http.status === 200) {
//       // return self.http.responseText;
//       cb(null, self.http.responseText);
//     } else {
//       cb("error: " + self.http.status);
//     }
//   };

//   this.http.send();
// };

// // POST
// Easyhttp.prototype.post = function (url, data, cb) {
//   this.http.open("POST", url, true);

//   this.http.setRequestHeader("Content-type", "application/json");

//   let self = this;
//   this.http.onload = function () {
//     if (self.http.status === 200 || self.http.status === 201) {
//       cb(null, self.http.responseText);
//     } else {
//       cb("error", self.http.status);
//     }
//   };
//   this.http.send(JSON.stringify(data));
// };

// // PUT
// Easyhttp.prototype.put = function (url, data, cb) {
//   this.http.open("PUT", url, true);

//   this.http.setRequestHeader("Content-type", "application/json");

//   let self = this;
//   this.http.onload = function () {
//     if (self.http.status === 200) {
//       cb(null, self.http.responseText);
//     } else {
//       cb("error", self.http.status);
//     }
//   };

//   this.http.send(JSON.stringify(data));
// };

// // DELETE
// Easyhttp.prototype.delete = function (url, cb) {
//   this.http.open("DELETE", url, true);

//   let self = this;
//   this.http.onload = function () {
//     if (self.http.status === 200) {
//       // cb(null, self.http.responseText);
//       cb(null, "Post deleted");
//     } else {
//       cb("error", self.http.status);
//     }
//   };
//   this.http.send();
// };
