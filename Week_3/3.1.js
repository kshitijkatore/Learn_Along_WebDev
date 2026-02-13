// map. filter, arrow function

// arrow function
const sum = (a,b) =>{
    return a + b;
} 

const ans = sum(1,2);
console.log(ans);

// given an array, give me back a new array in which every value multiplied by 2.

const input = [1,2,3,4,5];

const newArray = [];

for (let i=0; i< input.length; i++){
    newArray.push(input[i] * 2);
}

console.log(newArray);

// map 
function transform(i){
    return i * 2;
}
const ans1 = input.map((i)=>{
    return i * 2
});

console.log(ans1)

// filter
const ans2 =input.filter((n)=>{
    if (n %2 ==0){
        return true
    }else{
        return false
    }
})
console.log(ans2)