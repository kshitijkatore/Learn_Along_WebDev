const fs = require("fs");

const contents =fs.readFileSync("a.txt", "utf-8")
console.log(contents);


// CPU bound tasks -> CPU-bound tasks are operations that are limited by the speed and power of the CPU. THese tasks require significant computation and preprossing power, meaning that the performance bottleneck is the CPU itself.

let ans =0;
for (let i=1; i <=100000; i++){
    ans = ans + i;
}
console.log(ans);

// I/O bound tasks -> I/o bound tasks are operations that are limited by the system input/output capabilities, such as disk I/O network I/O, or any other form of data transfer. THese tasks spend of their time waiting for I/O operations to complete.

const contents1 =fs.readFileSync("a.txt", "utf-8");
console.log(contents1);

// Functional Arguments
function sum(a, b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function doOperations(a, b, op){
    return op(a,b);
}
console.log(doOperations(1,2, sum));