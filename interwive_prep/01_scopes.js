 let a = 100;

 {
    let a = 33;
    console.log(a); //block scopes
 }

 {
    let a = 22;
    console.log(a);
 }

 console.log(a); //global scopes

//  ---------------------------------------
// Temporal dead zone

{
    const say = (a,b) =>{
        console.log(msg);
        console.log(a + b);
    } 
    msg = "hii";
    say(10,5);

}

//  ---------------------------------------
// variable shadowing
let x = 0
{
    let x = 1;
    console.log(x);
}

{
// var d = 10;
console.log(d);
var d = 100;
}

//     for (var i = 0; i<5 ; i++) {
//         setTimeout(()=>{
//             console.log(i);
//         },1000)  
//     }

// for (let i = 0; i<5 ; i++) {
//     setTimeout(()=>{
//         console.log(i);
//     },1000)  
// }

sayy()

function sayy(){
    console.log("sayy");
}


let sayhi = function(){
    console.log("sayy hii");
}


