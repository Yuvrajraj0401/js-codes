// const Number1=5
// const Number2=5
// addTwoNumbers(Number1,Number2)
addTwoNumbers(3,4)
// function addTwoNumbers(Number1,Number2){
//     console.log(Number1+Number2);
    
// }
function addTwoNumbers(Number1,Number2){
    return Number1+Number2
}
let result=addTwoNumbers(3,4);
console.log("Result:"+result);


// function loggingin(username){
//     if(username==="undefined"){
//         return `Please enter a username`
//     }
//     return `${username} just logged in `
// }

//we can also give a default value to the parameter to avoid null or undefined cases
function loggingin(username = "Please enter a valid username"){
    if(username==="undefined"){
        return `Please enter a username`
    }
    return `${username} just logged in `
}
console.log(loggingin("yuvraj"));

//to enter more than one number in 
function calculatecartprice(val1,val2,...num1){//this will give answer in array i.e. [400,2000]
    return num1
}

console.log(calculatecartprice(200,300,400,2000))


const user={
    Name:"Yuvraj",
    designation:"General Manager"
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.Name} and designation is ${anyobject.designation}`)
}
handleobject(user)

const newarray=[200,300,400,2000]

function returnsecondarray(getarray){
    return getarray[1]
}

console.log(returnsecondarray(newarray))