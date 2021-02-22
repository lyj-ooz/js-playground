const say = () => {
  console.log("hi");
};

const say2 = () => console.log("hi2");

const say3 = () => "hahaha";

say();
say2();
console.log(say3());

// 오브젝트를 리턴하는 경우에는 () 로 감싸주면 된다.
const say4 = () => ({ msg: "hello" });

// 파라미터가 1개인 경우엔 파라미터를 ()로 감싸지 않아도 된다.
const say5 = (name) => console.log(`hello ${name}`);
say5("apple");

const users = ["Joe", "Bae", "Ki"];
const nameLengths = users.map((name) => {
  return name.length;
});

const nameLengths = users.map((name) => name.length);
