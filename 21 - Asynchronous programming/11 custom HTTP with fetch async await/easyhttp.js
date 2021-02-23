// fetch API와 ES6의 class, 그리고 async await 사용

class Easyhttp {
  // GET
  // get(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url) //
  //       .then((res) => res.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(new Error(err)));
  //   });
  // }

  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  // POST
  // post(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: { "Content-type": "application/json; charset=UTF-8" },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(new Error(err)));
  //   });
  // }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const res = await response.json();
    return res;
  }

  // PUT
  // put(url, data) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: "PUT",
  //       body: JSON.stringify(data),
  //       headers: { "Content-type": "application/json; charset=UTF-8" },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => resolve(data))
  //       .catch((err) => reject(new Error(err)));
  //   });
  // }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const res = response.json();
    return res;
  }

  // DELETE
  // delete(url) {
  //   return new Promise((resolve, reject) => {
  //     fetch(url, { method: "DELETE" })
  //       .then((res) => res.json())
  //       .then(() => resolve("post deleted..."))
  //       .catch((err) => reject(new Error(err)));
  //   });
  // }

  async delete(url) {
    const response = await fetch(url, { method: "DELETE" });
    const resData = await "deleted...";
    return resData;
  }
}
