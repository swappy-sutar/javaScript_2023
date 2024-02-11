
let popbtn = document.getElementById("popbtn"); 
popbtn.addEventListener('click', pophandler);


function pophandler(){
    console.log('you are clicked on pophandler');
    const xhr = new XMLHttpRequest();

    // open the object 
    xhr.open('GET','https://jsonplaceholder.typicode.com/users', true ); //true for blocking code 
    // xhr.open('GET','try.json', true ); //true for blocking code 
    
    

    //what to do when response is ready
    xhr.onload = function(){
        if (this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str ="";
            for(key in obj){
                str += `<li>${obj[key].name} </li>`;
                str += `<li>${obj[key].username} </li>`;
                str += `<li>${obj[key].phone} </li>`;




                
            }
            list.innerHTML = str;
        }
        else{
            console.log('some error is occured'); 
        }
    }


    xhr.send();

    console.log("We are done fetching employees data..!!");
}