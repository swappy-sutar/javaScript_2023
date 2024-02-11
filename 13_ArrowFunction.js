const user ={
    username:"swap",
    age:22,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMsg()
user.username = "swapnilSS"
user.welcomeMsg()

function demoThis(){
    // console.log(this);
}

demoThis()




// Arrow Function  ----->   ()=>{}


// basic arrow function
const add = (num1, num2) => {  // jar he function la dil {}tr return keyeord lihan important ahe
    return num1+num2;
}
console.log(add(5,6));


// implicit arrow function

const add0 = (num1, num2) => num1 + num2
const add1 = (num1, num2) => (num1 + num2)  // jar he function la dil () tr return keyeord lihayvhi garj nahi lagt
const add2 = (num1, num2) => ({username: "swapsutar"}) //----> object return in arrow fun.


console.log(add2());

// 5.45