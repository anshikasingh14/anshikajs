const marvel_heros=["Thor","IronMan","Spiderman"]
const dc_heros=["Superman","Flash","batman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros[3][1]);



const allHeros= marvel_heros.concat(dc_heros)
console.log(allHeros);//values are added



//spreadOperator

const all_new_heros= [...marvel_heros,...dc_heros]

console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(infinity)//depth 
console.log(real_another_array);//spread values no brackets are invooved



console.log(Array.isArray('Hitesh'))//false
console.log(Array.from({name:"Anshika"}))//[] intersting
console.log(Array.from("Anshika"))//converts into arra

let score1=100
let score2 =200
let score3=300

console.log(Array.of(score1,score2,score3));//see all values

