const b = 390
if(true){
    let a=300
    const b=20
    var c = 400
    // console.log(b);
    // console.log(c)
}
var c =450
//console.log(c);//450

// console.log(b)


//nested functions

function one(){
    const name="yuvraj"
    function two(){
        const usrname="yuvi"
        console.log(name);
    }
    //two()
    console.log(usrname);//not defined as out of scope

    
}
//one()

if(true){
    const username="yuvraj"
    if(username==="yuvraj"){
        const website=" pathak"
        console.log(username + website);
    }
    //console.log(website);//website not defined
}
//console.log(username);//username not defined



////////////////////////////   Interesting   //////////////////
addone(8)//no error
function addone(num){
    return num+1
}

// addone(8)



addtwo(6)///error
const addtwo= function(num){
    return num+2
}
// addtwo(6)