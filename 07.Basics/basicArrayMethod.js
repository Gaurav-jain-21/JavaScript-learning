// concat() - it joins two or more arrays and return a result
//includes() - checks if an array contains a specified element
//push() - add new element to the end of an array and returns the new length of an array
//unshift() - adds a new element to the beginnig of an array and return the removed element
//pop() - removes the last element of an array and returnn the removed element
const fruits =[
    "apples",
    "pomegrenate",
    "mango",
    "strawberries",
    "pineapple",
    "grapes"
];
fruits.push("banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("orange");
console.log(fruits);


const first=["apples","pomegrenate","mango"];
const last=["strawberries","pineapple","graps"];
const totalfruits=first.concat(first,last);
console.log(totalfruits);

