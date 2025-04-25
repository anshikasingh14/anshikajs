const myArr=[0,1,2,3,4,5]

const myHeors=["Shaktimaan","Naagraj"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);

//Array Methods


myArr.push(6)
myArr.pop(7)

myArr.unshift(9)//inserted at the start of array
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr=myArr.join()

console.log(myArr);
console.log(typeof newArr);//string

//slice,splice(imp for interview)

console.log("A",myArr);//original array
const myn1=myArr.slice(1,3);//[1,2]
console.log(myArr);//original array


const myn2=myArr.splice(1,3);
console.log(myn1);//A [0,1,2,3,4,5]
console.log(myn2);//[0,4,5]  manipulate original array
