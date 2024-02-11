// JavaScript Exrcution Context

// {} ----> global EC
// |           ^ 
// |            \---- use this
// |  
// ->  global executaon context
// ->  function executaon context
// ->  Eval executaon context ---> use in mongos



// **************************************************
//              how to run code in Js 
// **************************************************


// 1. global execution houn "This" keyWord madhe save honar

//2. memory phase.  collect all variables and store in momery phase

    //at the statring variables stored "undefined" value
        //[1.] val1 = undedined
        //[2.] val2 = undedined
        //[3.] addNum = defination  means ----->{  let    total = num1 + num2; return total; }
        //[4.] result1 = undedined
        //[5.] result2 = undedined
                                 
                                    
// 3.Execution phase
        // val1 = 20
        // val2 = 10
                     // new executional context 
        //            --------------------------     
        //            |                         |
        //            | new variable environment|
        // addNum =   |          +              |
        //            |    execution thread     |
        //            |                         |
        //            |                         |
        //            ---------------------------






let val1 = 20;
let val2 = 10;

function addNum(num1,num2){
    let total = num1 + num2;
    return total;
}
let result1 = (addNum(val1,val2));
let result2 = (addNum(20,10));

6.23 