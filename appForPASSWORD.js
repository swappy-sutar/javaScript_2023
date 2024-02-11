const passwordBox=document.getElementById("Password");
const button=document.getElementById("button");
console.log(button);
const length=6;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const spChar="!@#&*?";
let allChar=uppercase + lowercase + numbers + spChar;

function createPasword(){
  let password="";
   password +=uppercase[Math.floor(Math.random() * uppercase.length)];
   password +=lowercase[Math.floor(Math.random() * lowercase.length)];
   password +=numbers[Math.floor(Math.random() * numbers.length)];
   password +=spChar[Math.floor(Math.random() * spChar.length)];
   while(length>password.length){
    password += allChar[Math.floor(Math.random() * allChar.length)];
   }
   passwordBox.value=password;
   
}
button.addEventListener("click",createPasword);
