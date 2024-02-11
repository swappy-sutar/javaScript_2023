 function myName(){
    console.log("swapnil");
 }

//  myName//its a reference
//  ()//its a call

// 1.

function add(num1,num2){   
    console.log(num1+num2); 
}
add(5,5)

// 2.
function add1(num1,num2){
    let result = num1+num2;
    // console.log(result);
    // return result;
    return  num1+num2;
}
let result = add1(5,4)
console.log("addition:",result);



// rest operatoe in function-------> (...variable_name)
function calculateAllPrice(...num1){
    return num1;
}
console.log(calculateAllPrice(200,100,550,11));



// object handle in function

const user={
    username:"swapSutar",
    age:"29"
}
function handleObj(userObj){
    console.log(`username is ${userObj.username} and your age is ${userObj.age}`);
}

handleObj(user) //object pass karun

// or

handleObj({    //object tayar karun 
    username:"sham",
    age:22
}) 


// ARRAY handle in function

const newArr = [ 100,200,330,140,500]

function returnArr(getArr){
    return getArr[1];
}
console.log(returnArr(newArr)); 
// or
console.log(returnArr([100,200,330,140,500])); //direct element pass


