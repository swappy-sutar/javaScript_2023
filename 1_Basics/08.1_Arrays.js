marvel_heros=["spiderman", "thor", "ironman"];
dc_heros=["batman","superman","flash"];
console.log(marvel_heros);
console.log(dc_heros);

// concat 
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// spred  its work as concat.
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// flat  
const arrayInArray = [1,2,3,[4,5,6],7,8,[4,3,[2,1]]];
const sortedArray = arrayInArray.flat(Infinity);
console.log(sortedArray);

// string convesion in array
console.log(Array.isArray("swapnil")); //it shows its array or not in T/F
console.log(Array.from("swapnil")); // it string convesion in array

// multiple variables, arrays or values in one array using .of

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));