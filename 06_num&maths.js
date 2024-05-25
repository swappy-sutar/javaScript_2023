const score = 100;
console.log(score);

const balnce = new Number(200)
console.log(balnce);

console.log(balnce.toString().length);

// toFixed used for decimals
console.log(balnce.toFixed(4));


const othernum = 112.2145;
console.log(othernum.toPrecision(5));

// convert indian standerd
const num = 10000000;
console.log(num.toLocaleString()); //usa standerd 
console.log(num.toLocaleString('en-IN')); //indian standerd


// *******************maths******************* 
console.log(Math);
console.log(Math.abs(-4)); // only -ve values convert in to +ve
console.log(Math.round(5.6)); // print roundfig value 6
console.log(Math.ceil(5.6));// print roundfig value 6
console.log(Math.floor(4.6));//print roundfig lowest value 4
console.log(Math.min(5,2,12,144,15,45,3)); //print minimune value betweeen
console.log(Math.max(5,2,12,144,15,45,3)); //print maximune value betweeen

console.log(Math.random()); //it gives number between 0 or 1 
console.log((Math.random()*10)+1);



//formula for random number Genaration between min & max.

const min =10;
const max =20; 

console.log(Math.floor(Math.random() * (max - min + 1) + min ));

 