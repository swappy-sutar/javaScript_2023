const promisesOne = new Promise(function(resolve,reject ){
    //do as async task
    // DB calls,cryptography,Network calls

    setTimeout(function(){
        console.log('Async task 1');

        +resolve(); // to join  the promise chain and return a value

    },1000)

});

promisesOne.then(function(){
    console.log("promise consumed");
});


// ******************************************

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();

    },1000);

}).then(function(){
    console.log("Async 2 resolved");
})

// ******************************************

const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve({
            username:'Chai',
            email: 'chai@example.com'
        })

    },1000)
});

promiseThree.then(function(user){

    console.log(user);
})

// ******************************************

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = false;

        if (!error) {
            resolve({
            username:'swap',
            password:"123"
            })
        }
        else{
            reject('ERROR : Credentials are not valid!')
        }
    },1000);

});

promiseFour.then( (user) => {
    console.log(user);
    return user.username + " is logged in.";
})
.then((username)=>{
    console.log(username);

}).catch( function(err) { 
    console.log("Promise Rejection: ", err); 
}).finally( ()=>{ console.log("This is the end.")} );

// ******************************************

const promiseFive = new Promise(function(resolve,reject){

    setTimeout(function(){
      let error = false;

        if (!error) {
            resolve({
            username:'swapnil',
            password:"123"
            })
        }
        else{
            reject('ERROR: swapnil is not found..!')
        }
    },1000);


});

async function getData(){
try {
    const response = await promiseFive
    console.log(response);
} catch (error) {
    console.log(error);
}

};

getData();


// ******************************************

// Async Await Example

let p = new Promise((reslove,reject)=>{
    setTimeout(()=>{
       reslove("Hello World");   
    },500);
})

async function printMessage() {
  try {
      let message = await p;
      console.log(message);
  } catch (error) {
      console.log(`Error: ${error}`);
  }
}
printMessage();

// ******************************************



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data = await response.json();
//     console.log(data);

//     } catch (error) {
//         console.log("E : ",error);
//     }

// }
// getAllUsers()
fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json();

})
.then((data)=>{
    console.log(data);
}).catch(() => {
    throw "Something went wrong";
})