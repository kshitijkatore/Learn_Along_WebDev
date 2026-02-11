//Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old.


function usersOfEighten(user){
    let legalUsers = [];

    for(i=0; i<user.length; i++){
        if(user[i].age >= 18){
            legalUsers.push(user[i]);
        }
    }
    return legalUsers;
}

const users =[{
    name: "Xitij",
    age: 22
},{
    name:"Rohan",
    age: 16
},{
    name: "Aman",
    age:18
}]

let legalAllowedUsers =usersOfEighten(users);
console.log(legalAllowedUsers);