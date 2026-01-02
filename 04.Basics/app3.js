//Strings
let firstName= 'gaurav';
console.log(firstName);
let secondName="jain";
console.log(secondName);
let fullname= firstName+" "+secondName;
console.log(fullname);
//1. Concatenation using concat() method
let fullName=firstName.concat(" ",secondName);
console.log(fullName);
//2. Appending
firstName+=" something else";
console.log(firstName);
//3. Length
console.log(fullname.length);
//4. Case
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
//5. Slice
console.log(firstName.slice(2,6));
// 6. split & Join
console.log(firstName.split(" ").join("-"));
// 7. Includes
console.log(firstName.includes("g"));
console.log(firstName.includes("z"));
//8 Trim
console.log(firstName.trim());