const family = ["Maa","Pita Jii","Bhai"]
const Joint_fam=["G.Father","G.Mother"]



// family.push(Joint_fam)//it creates an array as an element in the given array
//console.log(family);
//const newfam=family.concat(Joint_fam)//ye pura dono array ko ek saath ek naye array m daal dega
// console.log(newfam);


// aao spread k baare m jaane
const newfam=[...family,...Joint_fam]//isme hm ek se zyada arrays ko add kr skte h jbki concat m sirf do array ko add kr skte h ek new array m 

//console.log(newfam);

//ek interesting caser jb ek array ke nadr ek se zyada array aa jae 
const newarr=[1,2,3,[4,5,6],[7,8,[9,3,4]]]//array ke andr ek se zyada sub array
const newarr2=newarr.flat(Infinity);//iske andr apko depth dalni hoti hai ki kitna sub arrays ko merge krna hai hum safe side k liye infinity use krte h 
console.log(newarr2);







// sgr check krna ho ki ye koi array hai ya nhi 

console.log(Array.isArray("Yuvraj"));//ye boolean answer dega true ya false m 
//agr kisi string ko array m convert krna ho toh 
console.log(Array.from("12345"))//[1,2,3,4,5]

//agr hme 2 ya usse zyda variables ko ek array m add krna ho toh hm of ka use krte h 
const score=200
const score2=400
const score3=700
console.log(Array.of(score,score2,score3));//[200,400,700]




