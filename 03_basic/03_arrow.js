//this cannot be used in function it gives undefined value but can be used in objects !!
const user={
    username:"yuvraj",
    designation:"manager",
    Welcomemessage: function(){
        console.log(`${this.username}, welcome to our server`);
       // console.log(this)//current context
    },
    
}
// user.Welcomemessage()
// user.username="sam"
// user.Welcomemessage()
//console.log(this);


function chai(){
    username:"yuvreaj"
    console.log(this.username);//undefined
    
}
//chai()

//arrow function
const addtwo= (num1,num2)=>(num1+num2)//implicit return

console.log(addtwo(3,4))

const addtwos=(num1,num2)=>{
    return num1+num2  //explicit return
}
console.log(addtwos(3,4))

const addtwot= (num1,num2)=>({username:"yuvraj"})//implicit return

console.log(addtwot(3,4))