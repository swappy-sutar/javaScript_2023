const day = "sun";

switch (day) {
    case "monday":
        console.log("mon");
        break;
    case "thu":
        console.log("tue");
        break;
    case "wed":
        console.log("wed");
        break;
    case "thu":
        console.log("thu");
        break;
    case "fri":
        console.log("fri");
        break;
    case "sat":
        console.log("sat");
        break;
    case "sun":
        console.log("sun");
        break;
    default:
        console.log(`your number is ${day} and it is not a currect number`);
        break;
}
// 7.00


// check object is empty 
const Obj = {
 
}
if (Object.keys(Obj).length == 0 ) {
    console.log("i don't have anything");
}
else{
    console.log("yes, i have something in Object ",Object.keys(Obj));
}

// check array is empty or not

const myArr = [10,20,30,40,50] 

if (Array(myArr) == 0) {
    console.log("i don't have anything");  
}else{
    console.log("yes, i have something in Object");
}
