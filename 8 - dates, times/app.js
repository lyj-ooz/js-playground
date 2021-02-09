// Dates & Times
let val;
const today = new Date();
// const birthday = new Date("1990-10-26");
let birthday = new Date("1990-10-26 12:09:08");
birthday = new Date("october 26 1990");
birthday = new Date("10/26/1990");

val = today.toString();

val = today.getMonth(); //zero based
val = today.getDate();
val = today.getDay(); //sunday, monday, tuesday...
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //1970.1.1부터 쌓인 시간.
console.log(val);

birthday.setMonth(2); // 2니까 march
birthday.setDate(20);
birthday.setFullYear(1880);
birthday.setHours(3);
birthday.setMinutes(10);
birthday.setSeconds(35);

console.log(birthday);
