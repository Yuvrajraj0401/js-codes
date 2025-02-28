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

