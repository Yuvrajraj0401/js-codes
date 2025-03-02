// Immediately Invoked Function Expressions (IIFE)
//iife ka use hm global pollution n ho uske liye krte h by creating a new scope

(function chai(){
    console.log(`Db connected`);
    
})();

((name)=>{
    console.log(`DB connected two ${name}`);
    
})(`yuvraj`)

// chai()    iske jgh pr hm iife ka use krte h , Immediately calling the function expression