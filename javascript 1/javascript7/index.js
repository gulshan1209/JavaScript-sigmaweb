/*
creat a faulty calculator using javascript 
this faulty calculator does following :

1. It takes two number as input from the user 
2. it perfoms wrong operation as follows:
 + ---> -
 * ---> +
 = ---> /
 / ---> *

 it perfoms wrong operation 10% of the times 


*/

let random = Math.random()
let a = prompt("Enter first Number")
let c= prompt (" Enter operation Number")
let b= prompt (" Enter second Number")




let obj  ={
    "+" :"-",
    "*" :"+",
    "=" :"/",
    "/" :"*", 
}
if (random>0.1){
//perfomance correct calculation
console.log(` the result is ${a} ${c} ${b}`)
  alert(` the result is ${eval(` ${a} ${b} ${c}`)}`)
}
else{
    // perfomance wrong calculation 
    c= obj [c]
    alert(` the result is ${eval(` ${a} ${b} ${c}`)}`)
}







