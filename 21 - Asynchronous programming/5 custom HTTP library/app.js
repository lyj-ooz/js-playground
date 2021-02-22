const xx = new Easyhttp();

// xx.get("https://jsonplaceholder.typicode.com/posts/1", function (err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

//console.log(a);

// xx.get("https://jsonplaceholder.typicode.com/posts/1", function (err, res) {
//   if (err) {
//     console.log(res);
//   } else {
//     console.log(res);
//   }
// });

// const data = {
//   title: "foo",
//   body: "bar",
//   userId: 1,
// };

// xx.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, post) {
//     console.log(post);
//   }
// );

// const data2 = {
//   title: "foofoo",
//   body: "bar",
//   userId: 1,
// };

// xx.put(
//   "https://jsonplaceholder.typicode.com/posts/5",
//   data2,
//   function (err, res) {
//     if (err) {
//       console.log(res);
//     } else {
//       console.log(res);
//     }
//   }
// );

xx.delete("https://jsonplaceholder.typicode.com/posts/5", function (err, res) {
  if (err) {
    console.log(err, res);
  } else {
    console.log(res); // HTTP request가 delete이기 때문에 성공한 경우 반환되는건 빈 오브젝트일 것임 ({})
  }
});
