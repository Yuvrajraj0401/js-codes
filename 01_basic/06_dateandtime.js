//dates and time
let mydate=new Date()
console.log(mydate);

//console.log(mydate.toLocaleString());//1/18/2025, time
//console.log(mydate.toDateString());//sat jan 18 2025
//console.log(mydate.toString());//Sat Jan 18 2025 07:25:08 GMT+0000 (Coordinated Universal Time)
//let mycreateddate= new Date(2020 , 9 , 15)
//const mycreateddate= new Date(2023 , 9 , 15 , 5 ,4)//Sun Oct 15 2023 05:04:00 GMT+0000 (Coordinated Universal Time)
const date1=new Date("01-06-2004")//1/6/2004, 12:00:00 AM
//console.log(date1.toLocaleString());

const mytimestamp=Date.now()


//console.log(Math.floor(mytimestamp/1000));


let date2 = new Date()
// console.log(date2.getMonth()+1);
//console.log((date2.getDay()));
date2.toLocaleString('default',{
    weekday: "long"
})//isme functions v define kr skte h







