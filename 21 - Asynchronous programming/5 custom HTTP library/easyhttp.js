// 여기서는 ajax와 ES5 형식의 오브젝트 만드는 방법을 사용하고
// 추후에 fetchAPI와 ES6 형식의 class 로 오브젝트 만드는 방법으로 업그레이드 할 것이다.
// ajax, XHR, 콜백, '.prototype.' 사용함..

function Easyhttp() {
  this.http = new XMLHttpRequest();
}

// GET
Easyhttp.prototype.get = function (url, cb) {
  this.http.open("GET", url, true);

  let self = this; // 이 부분은 arrow function을 쓰면 해결되는 부분이긴 함

  this.http.onload = function () {
    if (self.http.status === 200) {
      // return self.http.responseText;
      cb(null, self.http.responseText);
    } else {
      cb("error: " + self.http.status);
    }
  };

  this.http.send();
};

// POST
Easyhttp.prototype.post = function (url, data, cb) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200 || self.http.status === 201) {
      cb(null, self.http.responseText);
    } else {
      cb("error", self.http.status);
    }
  };
  this.http.send(JSON.stringify(data));
};

// PUT
Easyhttp.prototype.put = function (url, data, cb) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      cb(null, self.http.responseText);
    } else {
      cb("error", self.http.status);
    }
  };

  this.http.send(JSON.stringify(data));
};

// DELETE
Easyhttp.prototype.delete = function (url, cb) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // cb(null, self.http.responseText);
      cb(null, "Post deleted");
    } else {
      cb("error", self.http.status);
    }
  };
  this.http.send();
};
