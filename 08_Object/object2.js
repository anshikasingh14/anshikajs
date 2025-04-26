// const tinderUser= new Object(); Singleton Object

const tinderUser={}//Non Singleton
//Both are same
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
console.log(tinderUser)//{}


//Object Nesting
const regularUser={
    email:"some@gmail.com",
    fullname:{
        usersfullname:{
            firstname:"Anshika ",
            lastname:"Singh"

        }
    }
}
console.log(regularUser.fullname?.usersfullname.firstname);
//output:{ id: '123abc', name: 'Sammy', isLoggedIn: false }
//Anshika //
// //to open nesting use dot operator
//? adds extra protection

const obj1={1:"a",2: "b"}
const obj2={3: "a",4:"b"}
const obj4={5: "a",6:"b"}


//const obj3={obj1,obj2}
//console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3=Object.assign({},obj1,obj2)//{}is an optional parameter but used
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//const obj3=Object.assign({},obj1,obj2,obj4)
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



const obj3={...obj1,...obj2}//Spread Operator
console.log(obj3);


//Database value

const users=[
    {
        id:1,
        email:"h@gmail.com",
    }
    ,{
        id:1,
        email:"h@gmail.com",
    }
    ,{
        id:1,
        email:"h@gmail.com",
    }
    ,{
        id:1,
        email:"h@gmail.com",
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//{ id: '123abc', name: 'Sammy', isLoggedIn: false }
//[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
//[ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));//converts entries into array
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


