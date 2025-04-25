/*
Primitive: call by value type,,,,original data is not shown a copy 
of it is hown and changes aree reflected in copy

7 categories:

1.String
2.Number
3.Boolean
4.Null(ekdam khali)
5.Undefined
6.Symmbol
7.BigInt


*/
const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
    console.log(id===anotherId)//false


    //BigInt
   //const bigNumber=427823482842373671237123n

/*

Reference Type(Non-Primitive)

1.Array
2.Objects
3.Functions

*/
const heros=["Shaktiman","Naagraj","Doga"];
let myObj={

    name:"Anshika",
    age:19,
}


const myFunction=function()
{
    console.log("Hello World");
}
console.log(typeof bigNumber);//undefined
console.log(typeof outsideTemp);//object

console.log(typeof myFunction );// object function
console.log(typeof anotherId)//Symbol
