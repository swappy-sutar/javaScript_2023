if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

//   console.log(a);
//   console.log(b);
console.log(c); //var cha Scope {} chy baher pn yeto

//   block scope or global scope

let a = 300; //global scope
if (true) {
  let a = 10; //block scope
  console.log("inner a is:", a);
}

// *********************************
function one() {
  const username = "swap";

  function two() {
    const website = "vscode";
    console.log(website);
    console.log(username);
  }
  two();
  // console.log(website);
}

one();

// **************************************

if (true) {
  const name = "swap";
  if (name == "swap") {
    const web = "swappy.com";
    console.log(`your name is ${name} and full website name is ${web}`);
  }
}
// ************************************

console.log(oneFun(5));

function oneFun(num) {
  return num + 1;
}

const twoFun = function (num) {
  return num + 2;
};
console.log(twoFun(6));

// function aa(){

// }
// aa()

// if(true){
//   var ab1=10;

// }
// console.log(ab1);
