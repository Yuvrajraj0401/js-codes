// primitive datatype call by  value
// String,number,null,undefined,symbol,BigInt,boolean
const score=100
const score2=100.3
const str1="yuvraj"
const str2=null;
str3=undefined;
const str4=true
console.log(typeof str4);//boolean


console.table(typeof score);//number
console.table(typeof score2);//number
console.table(typeof str1);//string
console.table(typeof str2);//object
console.table(typeof str3);//undefined
const ID= Symbol('123')
console.log(typeof ID);//symbol


// non-primitive  call by reference
// functions,array,object
let arr1=["king", "queen","soldier"]
console.log(typeof arr1);//object
let myobj={
    arr:"king"
}
console.log(typeof myobj);//object
let fonctions=function(){
    console.log("");
    
}
console.log(typeof fonctions);//function or object function



