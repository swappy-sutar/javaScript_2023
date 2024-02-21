const user ={
    username : "swap",
    loginCount:8,
    signedId:true,

    getUserDetails: function(){
        // console.log("Got user details from DB");
        console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

// new keyword

function User(userName,loginCount,isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this 
}

const UserOne = new User("swapnil",25,true);
const UserTwo = new User("Raj",5,true);

console.log(UserOne);
console.log(UserTwo);



