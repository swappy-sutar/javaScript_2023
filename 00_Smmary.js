// Primitive DataTypes : 7
// string, Number, Boolean, null, Undefined, Symbol,BigInt

// Refernce DataType (non-Primitive) : 3
// Array, Objects, Functions

// there are two types of memory

// 1. stack memory (primitive)

let Myname = "swapnnl";
let anotherName = Myname;

anotherName = "swappy";

console.log(Myname);
console.log(anotherName);

// 2. heap memory (non-Primitive)

let info = {
  email: "swap2gmail.com",
  id: "01",
};

let newInfo = info;
newInfo.email = "Swapnil@.com";

console.log(info.email);
console.log(newInfo.email);
console.log("hii");
