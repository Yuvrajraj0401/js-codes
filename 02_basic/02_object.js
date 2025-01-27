//const user= new Object()//aise hi variables ko as a singelton assign krte h iska ek aur tarika hai 
const user ={}

user.id="ABC!@#"
user.name="Yuvraj"
user.loggedin=false

// console.log(user);

// const reguser={
//     fullname:{
//         username:{
//             firstname:"Yuvraj",
//             lastname:"Raj"
//         }
//     }
// }
// console.log(reguser.fullname.username.firstname);




//aao do toote hue objects ko jodte hai

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4={obj1,obj2,obj3}
// const obj4={...obj1,...obj2,...obj3}
const obj4=Object.assign({},obj1,obj2,obj3)

console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(obj4.hasOwnProperty(3));

