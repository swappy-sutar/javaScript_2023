const pass =Symbol("password")
const jsUser={
    name: "swapnil",
    "full name":"swapnil sutar",
    [pass]:"Swap@123",//symbol
    age:22,
    location:"kolhapur",
    email:"swap@gmail.com",
    loggredIn:false,
    day:["mon", "thu","fri"]
}

console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser.location);
console.log(jsUser["full name"]);

// value change

jsUser.age = 23;
console.log(jsUser.age);

jsUser.pass = "Swapnil#123"
console.log(jsUser.pass);