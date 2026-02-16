const fs = require("fs")


let contents = fs.readFile("a.txt", "utf-8", (err, contents)=>{
});
console.log(contents);

// Using a function that returns a promise

function setTimeoutPromisified(ms){
    let p =new Promise(resolve => setTimeout(resolve, ms));
    return p;
}

function callback(){
    console.log("Hi there ...");
}

setTimeoutPromisified(3000).then(callback);

// promisified version of reading file

function fsReadFilePromisified(filePath, encoding){
    return new Promise((resolve, reject) =>{
        fs.readFile(filePath, encoding, (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function callback(data){
    console.log(data);
}

function callbackErr(){
    console.log("erro while reading the file.");
}

fsReadFilePromisified("a.txt", "utf-8")
    .then(callback)
    .catch(callbackErr)
