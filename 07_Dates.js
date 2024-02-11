let myDate = new Date()


console.log(myDate);// 2024-01-03T11:15:53.680Z
console.log(myDate.toString()); // Wed Jan 03 2024 16:45:53 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());// Wed Jan 03 2024
console.log(myDate.toISOString());// 2024-01-03T11:15:53.680Z
console.log(myDate.toJSON());// 2024-01-03T11:15:53.680Z
console.log(myDate.toLocaleDateString());// 3/1/2024
console.log(myDate.toLocaleString());// 3/1/2024, 16:45:53



console.log(typeof myDate); //Object

let myCreatedDate = new Date(2024,0,3);
console.log(myCreatedDate.toDateString());


// TimeStamp 
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
