//Write a function called sum that finds the sum from 1 to a number.

ans =0
function sum(num){
    for (i=1; i<=num; i++){
        ans =ans + i;
    }
}

sum(10);
console.log(ans);