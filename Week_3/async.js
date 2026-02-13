const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, contetnts)=>{
    if(err){
        console.log("Contents not found");
    }
    else{
        console.log(contetnts);
    }
});


let ans =0;
for (let i=1; i<=10000000; i++){
    ans =ans + i;
}
console.log(ans)