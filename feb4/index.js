
// let a = 10;
// let b = 20;

// console.log(!true);

// let x = 5;
// let y = 7;

// console.log(x | y);


// if(studentAge > 2){
//     console.log("Yes"); 
// }

// let studentAge = 5;

// if(studentAge){
//     console.log("Value Available");
// }
// else{
//     console.log("Value not Available");
// }

// let studentAge = 5;

// function isEligible(age){
//    if(!age){
//         return false
//    }
//    else if(age > 3 && age < 18){
//     return true
//    }
//    else{
//     return false
//    }
// }

// let result = isEligible(studentAge)

// console.log(result);


// if(studentAge){
//     console.log("Value Available");
// }
// else if(studentAge > 3 && studentAge < 18){
//     console.log("Fine");
// }
// else{
//     console.log("From else Block");   
// }


// let gender = "female"

// switch(gender){
//     case "male":
//         console.log("OutPut is Male");
//         break
//     case "female":
//         console.log("OutPut is Female");
        
// }

// Ternary Operator

// let a = 10;
// let b = 15;

// let isEqual;

// if(a == b){
//     isEqual = "its Equal"
// }
// else{
//     isEqual = "Not Equal"
// }

// console.log(isEqual);

// let isEqual = a == b ? "Its equal" : "Not equal"
// console.log(isEqual);

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// Nested For Loop
// for(let i=0; i<5; i++){
//     for(let j=0;j<5;j++){
//         console.log(j);
//     }
// }

// for(let i=0; i<5; i++){
//     for(let j=0; j<5; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// let i = 0;
// while(i<5){
//     console.log(i);
//     i++
// }

// do{
//     console.log(i);
//     i++
// }while(i>5)



// Array

// let datas = [1,"user",3,false,5]

// console.log(datas[1]);

// let marks = [98,77,43,57,88]

// console.log(marks.length);

// let cities  = ["erode", "madurai", "namakkal"]

// console.log(cities);

// Array Methods



// console.log(cities.reverse());

// console.log(cities.join());


// cities.unshift("ooty")

// console.log(cities);


//  cities.shift()

//  console.log(cities);
 

// cities.pop() //Remove last data

// console.log(cities);



// cities.push("Chennai")

// console.log(cities);


let firstArr = [1,2,3]
let secondArr = [4,5,6]

// let joinedArr = [firstArr, secondArr]
// Concat
let joinedArr = firstArr.concat(secondArr)
// Spread
let newArr = [...firstArr,...secondArr]


console.log(joinedArr);
console.log(newArr);



























