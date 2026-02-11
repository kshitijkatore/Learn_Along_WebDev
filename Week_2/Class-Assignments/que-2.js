//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(user){
    if(user.age >=18){
        console.log(user.name + " You are eligible to vote.");
    }else{
        console.log(user.name + " You are not eligible to Vote Now.")
    }
}


let users ={
    name: "xitij",
    age: 22,
    gender:"Male"
}
canVote(users);