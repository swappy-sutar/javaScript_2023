//Type conversion int to string.
let someNumber = 33;
let StringNumber = String(someNumber);
console.log(StringNumber );
console.log(someNumber +);

console.log(typeof(StringNumber));


//Type conversion string to int.
let str = "34"
let num = Number(str);
console.log(num);
console.log(typeof(num));


//Type conversion str to boolean .
// it's shows output in true or false.

let Myname = "swapnil";
let boolname = Boolean(Myname);
console.log(boolname);
console.log(typeof(boolname));


//Type conversion num to boolean.
// it's shows output in true or false.

let num1 = 33;
let boolNum = Boolean(num1);
console.log(boolNum);
console.log(typeof(boolNum));


//Type conversion empty string to boolean.
// it's shows output in true or false.

let emptyStr = "";
let bool = Boolean(emptyStr);
console.log(bool);
console.log(typeof(bool));


// ************OPERATION**************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-1);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);


// string concatination
let str1 = "swapnil";
let str2 = " sutar";
console.log(str1 + str2);



console.log("2" + 2); // 22
console.log(2 - "2"); // 0
console.log("1" + 2 + 2); // 122
console.log( 2 + 2 + "1"); // 41
console.log( (3+4) * 2 % 3); //2

// increment 

//  post-increment
let a = 10;
a++;
console.log(a);


// pre-increment
let b = 10;
++a;
console.log(b);