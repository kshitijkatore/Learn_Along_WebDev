// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd.
const arr = [1,2,3,4,5,6,7,8,9,10];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i] + " Number is even.");
    }else{
        console.log(arr[i] + " Number is odd.")
    }
};
