/*

Stack memory(Primitive),Heap Memory(Non-Primitive)
*/
let myYoutubename="Anshikadotcom";


let anothername=myYoutubename

anothername="anshikasingh"
console.log(myYoutubename);//Anshikadotcom
console.log(anothername);//anshikasingh


let userOne={
    email:"user@google.com"
    upi:"user@ybl"
}

let userTwo=userOne;

userTwo.email="anshika@google.com";

console.log(userOne.email);