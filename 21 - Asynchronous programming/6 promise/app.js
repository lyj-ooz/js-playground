const posts = [
  { id: 1, content: "this is the first post" },
  { id: 2, content: "this is the second post" },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    //resolve는 하던 일이 끝나면 호출
    //reject는 표시해야 하는 에러가 있으면 reject 호출. .catch()로 캐치한다.
    setTimeout(() => {
      posts.push(post);

      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("something went wrong.. (fake error");
      }
      // cb();
      // resolve();
    }, 2000);
  });

  // setTimeout(() => {
  //   posts.push(post);
  //   // cb();
  // }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let inner = "";
    posts.forEach((post) => {
      inner += `<li>${post.content}</li>`;
    });
    document.querySelector(".container").innerHTML = inner;
  }, 1000);
}

// 아래처럼 하면 그냥 단순히 시간 순으로 실행되어 getPosts가 먼저 실행되어 버린다.
// 콜백 함수를 활용해보자
//createPost({ id: 2, content: "this is the 3rd post" });
//getPosts(posts);

// 콜백함수 활용하기
// 1. createPost 함수 내에 콜백함수를 추가한다. 이 콜백함수는 getPosts를 호출한다.
createPost({ id: 3, content: "this is the 3rd post" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
