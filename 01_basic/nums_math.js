const num=100
// console.log(typeof num);//number

//ye apko number ki value dega mtlb iska datatype number hoga 
const num2=new Number(400)
// console.log(num2);

//isme aap particularly bta rhe ho ki num2 ek number h
// console.log(num2.toFixed(2));
//ye apke kaam aata hai decimal value ko move krne m
const bignumber=1000000
// console.log(bignumber.toLocaleString('en-IN'));//ye comma separated value dega default case m ye US based separation krega

//*********************************** Maths *************************************************
console.log(Math);//ye object v define krega Math v aur properties v hai iske
console.log(Math.abs(-4))//ye negative value ko positive krne m help krta hai isme sb kuch positive ho jata hai 
console.log(Math.round(4.6))//ye value ko nearest integer m round off kr deta hai 
console.log(Math.ceil(4.2))//ye apko sbse upr value provide krega jaise is example k liye 4
console.log(Math.floor(4.9))//ye apko sbse highest value provide krega is example m 5
console.log(Math.min(3,4,6,2));//ye apko minimum value of the given values dega aise hi same aap max k liye v kr skte ho 




console.log(Math.random());//ye ek random value generate kr k de dega 
const min=10;
const max=20

console.log(Math.random()*(max-min+1)+min);



 