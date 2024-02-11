const user = new Object()
const user1 = {}

user1.id = "123"
user1.name="swappy"
user1.isloggedIn = false

console.log(user1);

const info={
    email:"Swap.com",
    fullname:{
        FirstName:"Swapnil",
        middleName:"Satish",
        lastname:"Sutar"
    },
    address:{
        village:{
            city:"sagaon",
            pincode:415408,
            near: "main road"
        },
    },
}
// console.log(info);
console.log(info);
console.log(info.fullname.lastname);


// object conctinatison 
const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};
const obj3={...obj1,...obj2};
console.log(obj3);
const newObj = Object.assign(obj1,obj2);
console.log(newObj);


console.log(user1);
console.log(Object.keys(info));
console.log(Object.values(info));
console.log(Object.entries(info));

// 4.20