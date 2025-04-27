/*console.log("A");
console.log("N");
console.log("S");
console.log("H");
console.log("I");
console.log("K");
console.log("A");


function sayMyName(){
console.log("A");
console.log("N");
console.log("S");
console.log("H");
console.log("I");
console.log("K");
console.log("A");

}
//sayMyName()


function addTwoNumbers(num1,num2){

    console.log(num1+num2);
    

}
addTwoNumbers(3,"a")
*/


















function calculateCartPrice(val1,val2,...num)//Rest Operator
{
  return num
}
   


console.log(calculateCartPrice(200,400,500,2000))//[ 500, 2000 ]

const user={

    username:"Anshika",
    price:199,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is 
        ${anyObject.price}`);//Username is Anshika and price is 
        //199
    }

    //handleObject(user)
    /*
    handleObject({

        username:"sam",
        price:399//username is sam and price is 399
  })
        */

  const myNewArray=[200,400,100,600]

  function returnSecondValue(getArray){

    return getArray[1]
  }
  console.log()

  function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is $
      {anyobject.price}`);
  }
  //handleObject(user)
  handleObject({
    username:"Sam",
    price:399
  })





