const mysym=Symbol("key1")
const obj1={
    name :"Yuvraj",
    [mysym]:"mykey1",
    age:20,
    email:"yuvraj@gmail.com"
}
//console.log(obj1[mysym]);
obj1.email="yuvrajraj@gmail.com"
//console.log(typeof obj1.email);//string
//console.log(typeof obj1.age);//number
//console.log(typeof obj1.mysym);//string  
//console.log(obj1[mysym]);
//Object.freeze(obj1)
obj1.email="yuvraj@123.com"
//console.log(obj1);


obj1.greetings= function(){
    console.log(`hello`)
}
obj1.greetingstwo= function(){
    console.log(`${this.name}`)
}
console.log(obj1.greetings())
console.log(obj1.greetingstwo())








