// Immediately Invoked Function Expression (IIFE)  -----> ()()
// global scope chy polutation mhanje(variables,or decelaretion)mule problem hoto to kadany sathi IIFE cha use kela jato
// application run zaly vr aaply la lagch kahi tri gosthi connection zalely havay astat 
 //example :- detabase connection, dapp run kely vr lagech metamask connection
 
  
 function chai(name){
    console.log(`${name} DB1 CONNECTED`);
 }

chai("swappy");


 (function chai_1(){
    console.log("DB2 CONNECTED");
 })(); //use of IIFE )()


 ( (name)=> {
    console.log(`${name} DB3 CONNECTED`);
 })("Swapnil")