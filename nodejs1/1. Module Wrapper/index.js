//Module Wrapper - it pass the one file to another file and reuse the file
const greet = require("./greet");
greet("Gaurav");
greet("Ram")
greet("vikash")
const persons= require("./people");
console.log(persons);
