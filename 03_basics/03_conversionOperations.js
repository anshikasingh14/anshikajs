let score=33

console.log(typeof score);//number
console.log(typeof {score}); //object

let valueInNumber=Number(score);
console.log(typeof valueInNumber );//number
console.log( valueInNumber ); //value 33

//Checking Undefined


let score1=undefined

console.log(typeof score1);//undefined
console.log(typeof {score1}); //object

let valueInNumber1=Number(score1);
console.log(typeof valueInNumber1 );//number
console.log( valueInNumber1 ); //NaN  

//Null value passing

let score2=null

console.log(typeof score2);//object
console.log(typeof {score2}); //object

let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2 );//number
console.log( valueInNumber2); //0

//Boolean

let score3=true

console.log(typeof score3);//boolean
console.log(typeof {score3}); //object

let valueInNumber3=Number(score3);
console.log(typeof valueInNumber3 );//number
console.log( valueInNumber2); //0

//String

let score4="Anshika"

console.log(typeof score4);//String
console.log(typeof {score4}); //object

let valueInNumber4=Number(score4);
console.log(typeof valueInNumber4 );//number
console.log( valueInNumber4); //NaN


//"33"=>33
//"33abc" =>NaN(Not an Number)
//type of NaN=> Number
//true =>1; false=>0


let isLoggedIn =1;

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true



let isLoggedIn1 ="";

let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)//false 



let isLoggedIn2 ="Anshika";

let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)//true


// 1=>true
//" "=>false
// "Anshika" =>true


let someNumber =33

let stringNumber =String(someNumber)
console.log(stringNumber); //33
console.log( typeof stringNumber);  //string