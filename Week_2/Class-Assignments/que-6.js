// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user){
    if(user.gender == "Male" && user.age>=18){
        console.log("Hi, Mr " + user.name + " your age is " + user.age + " You'r eligible to Vote.");
    }else if (user.gender == "Female") {
        console.log("Hi, Mrs " + user.name + " your age is " + user.age);    
    }
}

let user = {
    name: "Xitij",
    age: 22,
    gender: "Male"
}
greet(user);