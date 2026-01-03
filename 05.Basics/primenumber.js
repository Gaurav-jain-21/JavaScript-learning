console.log("check the number is prime or not");
let x=891;
console.log("the number is :",x);
let flags=1;
for(let i=2;i<x;i++){
    if(x%i===0){
        flags=0;
        break;
    }
}
if(flags==1){
    console.log("this is my prime number");
}
else{
    console.log("this is not prime number");
}