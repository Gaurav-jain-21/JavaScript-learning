const person={
    "name": "Gaurav jain",
    "age": 22,
    "email": "gjain7764@gmail.com",
    "isSubscribed": true,
    "hobbies":["Reading","Running","Cooking"],
    "address":{
        "city": "New York",
        "idk":true
    }
}
//JSON.stringify()
const jsonString= JSON.stringify(person);
console.log(jsonString);