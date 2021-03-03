// 1. iterator example
function iterator(names) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const namesArr = ["apple", "banana", "melon", "grape"];
const names = iterator(namesArr);
console.log(names.next()); // 아래처럼 계속 호출할때마다 파라미터로 전달된 배열을 돈다.
console.log(names.next());
console.log(names.next());

// 2. generator example (*)
function* sayNames() {
  yield "jack";
  yield "jill";
  yield "mark";
}

const name = sayNames();
console.log(name.next());
console.log(name.next());
console.log(name.next());

// 2-1 generator 다른 예
function* createIDs() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = createIDs();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
