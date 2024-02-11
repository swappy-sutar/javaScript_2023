const name = "swapnil ";
const age = 22;

console.log(name + age + " sagaon");

console.log(`my name is ${name} and age is ${age}`);

// new Keyword

const myName = new String("swapnil");
console.log(myName[0]);
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toLowerCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('i'));

const newName = myName.substring(1,6);

console.log(newName);
console.log("\n");

// slice 
const newN = myName.slice(-7,3);
console.log(newN);

// replace
const url = "https://swapnil.com/swapnilS%20swaptar";

console.log(url.replace('%20','-'));
console.log(url.includes('swap'));