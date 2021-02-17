/* ES6 Classes */
class Person {
  constructor(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `hello! ${this.firstname} ${this.lastname}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsNewLastName(newLastName) {
    this.lastname = newLastName;
  }

  // static methods
  // 이런 종류의 메소드는 클래스 안에 정의되어있긴 하지만 this.어쩌구 같은것을
  // 해당 메소드 내에서 사용하지 않음
  // 클래스 내에서 약간 동떨어진 느낌... 이라면 static method임
  static addNums(a, b) {
    return a + b;
  }
}

const jane = new Person("Jane", "Gates", "1990-10-02");

console.log(jane);
console.log(jane.greeting()); // 이걸 보면 알 수 있듯이 class 안에 있는 메소드는 자동으로 prototype에 추가된다.
console.log(jane.calculateAge());
jane.getsNewLastName("Applegate");
console.log(jane);

// static methods: 오브젝트를 instantiate(클래스 가지고 오브젝트 만드는거) 하지 않고도 쓸 수 있는..
//console.log(jane.addNums(1, 2)); //에러 난다. static method는 'jane'이라는 인스턴스의 일부가 아니기 때문.
// static method를 사용할 때는 클래스 이름에다가 호출한다.
console.log(Person.addNums(10, 13));

//
/* Inheritance in ES6 class -> a.k.a Subclasses */
//

class Person2 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greeting() {
    return `hello!! ${this.firstname} ${this.lastname}`;
  }
}

// Subclass
// extend 'Person2' class with 'Customer' class
class Customer extends Person2 {
  constructor(firstname, lastname, phone, membership) {
    super(firstname, lastname); // 이 클래스가 extend하는 클래스인 Person2의 constructor를 사용하려고 super라는 키워드를 사용함. (이 클래스의 부모 클래스가 가진 constructor를 호출함)

    // 부모 클래스에는 없고 딱 이 클래스에만 있는 변수들은 아래에 써준다
    this.phone = phone;
    this.membership = membership;
  }

  // 부모 클래스에 있는 메소드 들을 자식 클래스을 이용한 인스턴스에서도 사용할 수 있다. (75번째줄)

  static getMembershipCost() {
    return 500;
  }
}

const marian = new Customer("Marian", "Doe", "123-456", "Gold");
console.log(marian);
console.log(marian.greeting());
// console.log(marian.getMembershipCost()); // 이러면 에러난다
console.log(Customer.getMembershipCost());
