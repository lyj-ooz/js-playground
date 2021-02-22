const xx = new Easyhttp();

/* get 사용 */
// xx.get("https://jsonplaceholder.typicode.com/post/1") //
//   .then(console.log)
//   .catch(console.log);

/* post 사용 */
const data = {
  title: "foo",
  body: "bar",
  userId: 1,
};

// xx.post("https://jsonplaceholder.typicode.com/posts", data) //
//   .then(console.log)
//   .catch((err) => console.log(err));

/* put 사용 */
const data2 = {
  title: "foofoo",
  body: "bar",
  userId: 1,
};

// xx.put("https://jsonplaceholder.typicode.com/posts/5", data2) //
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/* delete 사용 */
xx.delete("https://jsonplaceholder.typicode.com/posts/5") //
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// xx.delete("https://jsonplaceholder.typicode.com/posts/5", function (err, res) {
//   if (err) {
//     console.log(err, res);
//   } else {
//     console.log(res); // HTTP request가 delete이기 때문에 성공한 경우 반환되는건 빈 오브젝트일 것임 ({})
//   }
// });
