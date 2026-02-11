// Write a function that takes a user as an input and greets them with their name and age

function greet(user){
    if(user.age>=20){
        console.log("Hey "+ user.name + " you are 20s eras now.")
    }else{
        console.log(user.name + " You are a minor.")
    }
}


let user ={
    name: "Xitij",
    age: 22
}
greet(user);