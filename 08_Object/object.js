//Singleton (unique object)

//Object can be declared as literal or constructor

//When Object is declared as literal it is not singleton

//Object Literals


const mySym=Symbol("key1")


const JSUser={
    name:"Anshika",
    "full name":"Anshika Singh",//cannot be  accessed through dot operator
    [mySym]:"mykey1",//square bracket is mandatory 
    age:19,

    location:"Jaipur",
    email:"anshika@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}

console.log(JSUser.email)//anshika@google.com
console.log(JSUser["email"])//anshika@google.com
console.log(JSUser["full name"])//Anshika Singh
console.log(JSUser[mySym])//mykey1 (good practice)
console.log(JSUser.mySym)//mykey1 (Not a good practice)
console.log(typeof JSUser.mySym)//string


JSUser.email="anshikasingh@uber.com"
//Object.freeze(JSUser)
JSUser.email="anshikasingh@microsoft.com"//these changes are not reflected as the object is freezed

console.log(JSUser);



//Function

JSUser.greeting =function()
{
    console.log("Hello JS User")
}

console.log(JSUser.greeting);//Function (anonymous)
console.log(JSUser.greeting());//Hello JS User

JSUser.greetingTwo=function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JSUser.greeting());//Hello JS User
console.log(JSUser.greetingTwo());////Hello JS User, Anshika

//Most values are accessed using dot but in interview there are cases in which brackets are used




