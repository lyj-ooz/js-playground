const firstName = "Bill";
const lastName = "Whitehouse";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append (add..)
val = "apple ";
val += "banana";

val = "hello my name is " + firstName;

// Escaping (\)
val = "that's awesome, i can't wait";

// Length
val = firstName.length;

// concat()
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// treat string like an array
val = firstName[1];

// indexOf()
val = firstName.indexOf("B"); //대소문 구분하는구나
val = firstName.lastIndexOf("l"); // 끝에서부터 찾음

// charAt()
val = firstName.charAt(1);
// charAt() 활용하여 맨 끝의 글자 가져오기
val = firstName.charAt(firstName.length - 1);

// substring(): string에서 일부분 꺼내기
val = firstName.substring(0, 2);

// slice()
val = lastName.slice(0, 5);
val = lastName.slice(-1); // 맨 끝에서부터..

// split(): split string into an array..
const str = "hi, apple, banana";
val = str.split(" ");
val = str.split(",");

// replace()
val = str.replace("apple", "mango");

// includes()
val = str.includes("apple");
val = str.includes("pear");

console.log(val);
