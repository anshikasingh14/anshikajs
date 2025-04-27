//var c=300
let a =300

    if(true)
    {
    let a=10
    const b=20
    console.log("Inner:",a);
    
    }


    for(let i=0;i<array.length;i++)
    {
        const element=array[i];
    }


//console.log(a);
//console.log(b);
//console.log(c);




//Nested scope

function one()
{
    const username="Anshika"
function two()
{
    const website="youtube"
    console.log(username);//Anshika
}
//console.log(website);
t//wo()
}
one()//non executible

if(true){
    const username="Anshika"
    if(username=="Anshika")
    {
        const website ="youtube"
        //console.log(username+website);
    }
   // console.log(website);
}
//console.log(username);



//++++++++++Interesting++++++++++++

function addone(num){
    return num+1
}
console.log(addone(5))


const addTwo=function(num){
    return num+2
}

addTwo(5)