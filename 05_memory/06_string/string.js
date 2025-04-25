const name ="Anshika"
const repoCount=50

console.log(name+repoCount+"Value")//Anshika50  Value
//outdated not recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



//Declaration

const gameName=new String('Anshik-aa')


console.log(gameName[0]);
console.log(gameName.__proto__);




console.log(gameName.length);//8
console.log(gameName.toUpperCase);//ANSHIKAA
console.log(gameName.charAt(2));//s
console.log(gameName.IndexOf('s'));//3


const newString = gameName.substring(0,4)//Ansh
console.log(newString)