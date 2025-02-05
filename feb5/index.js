// let cities = ["nkl", "erd", "trichy","madurai","ooty"]

// console.log(cities.slice(2,4));


// cities.splice(0,2,"ooty", "kodaikanal")

// console.log(cities);

// let cities = ["nkl", "erd", "trichy","madurai","ooty"]

// cities.forEach((item)=>{console.log(item)})

// cities.forEach(function(item){
//     console.log(`Hi ${item}`);
// })


// let num2 = num1.map(function(item){
//     return item*2
// })

// console.log(num2);


// let num1 = [40,22,34,78,12]

// let result = num1.filter(myFun)

// function myFun(item){
//     return item < 25;
// }

// console.log(result);

// let num1 = [40,22,34,78,12]

// let total = num1.reduce(function(a ,b){
//     return a + b
// })

// console.log(total);

// let product = {
//     name: "mobile",
//     price: 25000,
//     model: "redmi"
// }

// console.log(product.model);

// another way to create object
// let product2 = new Object();

// product2.name = "charger"
// product2.price = 700
// product2.quantity = 1

// console.log(product2);

// let product = {
//     name: "mobile",
//     price: 10000,
//     category : ["electronics", "phone"],
//     dimensions : {
//         length: 5,
//         height: 8
//     }
// }

// console.log(product.category[0]);
// console.log(product.dimensions.height);

// let product = {
//     name: "mobile",
//     price: 10000,
//     buy: function(){
//         console.log("Product Added To Cart");
//     }
// }

// product.buy()

// function greet(uname){
//     console.log(`Hello  ${uname}`);
    
// }

// greet("ravi")

// Arrow function - ES6 FEATURE

// let greet = uname=>{ console.log(`Hello ${uname}`)}

// greet("john")

// IIFE

// (function greet(){
//     console.log("Hello Welcome");
    
// })();

// let headTag = document.getElementsByTagName("h1")

// headTag[0].innerHTML = "Hello"

// document.getElementById("head").innerHTML = "New Word"
// document.getElementsByClassName("text")[0].innerHTML = "second line"

// document.querySelector(".text").innerHTML = "hello";

let data = document.querySelectorAll(".text")

data.forEach((item)=>{
    item.innerHTML = "Content"
})













