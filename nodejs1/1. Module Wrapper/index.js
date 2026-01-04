//Module Wrapper - it pass the one file to another file and reuse the file
const greet = require("./greet");
greet("Gaurav");
greet("Ram")
greet("vikash")
const {person1,person2,person3}= require("./people");
// console.log(person1);
// console.log(person2);
// console.log(person3);
greet(person1);
greet(person2);
greet(person3);