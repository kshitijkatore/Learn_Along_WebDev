//Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(a,b){
    return a + b;
}

let ans =sum(2,3);
let ans1 =sum('a',3);  // passing a string insted of number, These give a concatnate string.

console.log(ans);
console.log(ans1);