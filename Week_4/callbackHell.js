//Callback Hell

setTimeout(function(){
    console.log("hi...");

    setTimeout(function(){
        console.log("hello there...")

    },3000);
},1000);


// alternate solution

function step2Done(){
    console.log("Hi there ...")
}

function step1Done(){
    console.log("hi..");
    setTimeout(step2Done, 3000);
}
setTimeout(step1Done, 1000);


// Promise chaining

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeoutPromisified(resolve, ms));
}

setTimeoutPromisified(1000)
    .then(function(){
        console.log("hi...")
        return setTimeoutPromisified(3000);
    }).then(function(){
        console.log("hi there ...");
        return setTimeoutPromisified(5000);
    }).then(function(){
    console.log("hello there...")
    })

