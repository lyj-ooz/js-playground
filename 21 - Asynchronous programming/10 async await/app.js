// 함수 선언할 때 맨 앞에 'async' 키워드를 추가하면
// 그 함수는 Promise 객체를 리턴한다.

async function sayHello() {
  return "hello";
}

console.log(sayHello());

sayHello() //
  .then((res) => console.log(res));

// function sayHello2() {
//   return new Promise((resolve, reject) => {
//     resolve("hello2");
//     reject(new Error("에러.."));
//   });
// }

async function sayBye() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bye~");
    }, 1000);
  });

  const err = true;

  if (!err) {
    await Promise.reject(new Error("oops.."));
  } else {
    const res = await promise; // wait until 'promise' is resolved

    return res;
  }
}

sayBye() //
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
