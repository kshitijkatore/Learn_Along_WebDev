// Basics of javascripts

// 1. Variables --> Variables are used to store data. In javascript, you declare variables using var, let, const

let Name = "xitij";  // Variable that can be reassigned
const age =30;   // Constant variable that cannot be reassined
var isStudent = true;   // Older wat to declare variables, function-scoped

console.log(Name);
console.log(age);
console.log(isStudent)

// 2. Data types

let number = 43;
let string = "Hello world";
let isActive = true;
let numbers = [1,2,3,4];

console.log(number);
console.log(string);
console.log(isActive);
console.log(numbers);

// Operators
let sum = 10 + 5;  // Arithematic opeartors
let isEqual = (10 === 10)  // comparison operator
let isTrue = (true && false)  // Logical operator

console.log(sum)
console.log(isEqual);
console.log(isTrue);


// Functions

// Function declaration
function greet(name){
    return "Hello " + name;
}

// function call
let message = greet("xitij");
console.log(message);

// If/Else

function isLeagal(age){
    if (age >=18){
    console.log("You are an adult.");
    }else{
        console.log("You are a minor.");
    }
}
isLeagal(18);

// loops

// For loop
for (let i =0; i < 5; i++){
    console.log(i);
}

// while loop
let j =0;
while (j < 5){
    console.log(j);
    j++;
}


// Objects -> An objects in Javascript is a collection of key-value pairs, where each key is a  string and each value can be any valid javascript data type, include another object.
function isLegal(name, age){
    if(age >=18){
        console.log(name + " is allwed to vote")
    }else{
        console.log(name + " is not allweb to vote")
    }
}


user1 ={
    name: "xitij",
    age: 22,
    passward: "fd2343vdgrr3",
    address: {
        city: "Nagpur",
        state: ""
    }
}
isLegal(user1.name, user1.age);

// Arrays

const users = ["xitij", "ramn", "aman", "diljeet"];
const totalUsers = users.length;
const fisrtUsers =users[0];

console.log(users)
console.log(totalUsers)
console.log(fisrtUsers)

for(let i=0; i<users.length; i++){
    console.log(users[i])
}

// Array of Objects
var user =[{
    name: "xitij",
    age: 22,
    passward: "gr3df4rtdf"
},{
    name: "raman",
    age: 34,
    passward: "re34hrfs3"
}];

user[0].name