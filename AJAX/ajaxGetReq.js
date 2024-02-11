console.log("ajax");

let fetchbtn = document.getElementById("fetchbtn"); 
fetchbtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('you are clicked on fetchbtn');
    const xhr = new XMLHttpRequest();

    // open the object 
    // xhr.open('GET','try.json', true ); //true for blocking code 
    
    
    // post request
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create', true );
    xhr.getResponseHeader('content-type','application/json');
        //what to do on progress (optional)
    xhr.onprogress =function(){ 
           console.log('On progress');
    }
 
    //what to do when response is ready
    xhr.onload = function(){
        if (this.status === 200){
             console.log(this.responseText)
        }
        else{
            console.log('some error is occured'); 
        }
    }

    // send the request
    params = `{"name":"test1","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done..!!");
} 



// **************************************************
