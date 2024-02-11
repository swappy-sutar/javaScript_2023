
// FOR OF LOOP****************************

const arr1 = [1,2,3,4,5,6,8,9]
for (const num of arr1) {
    // console.log(num);
} 


const str = "swapnil sutar";

for (const name of str) {
    if (name ==" ") {

        continue;
    }
    // console.log(name);
    
}

// FORIN LOOPS******************

const myObj = {
    js:"javaScript",
    cpp:"c++",
    py:"python"
}

for (const key in myObj) {
    // console.log(myObj[key]);
    // console.log(`${key} shortcut for :- " ${myObj[key]} "`);
}


// MAPS **************************

const map = new Map()

map.set("name","swapnil");
map.set("age",22);
map.set("compnay","noitavonne");

for (const [key,value] of map) {
    // console.log(key);
    // console.log(value);
    // console.log(key,':-' ,value);
}  


const coding= ["c","c++","java","python","js"]

coding.forEach( function(element) { //call back function
// console.log(element);
})

 
// *************** DB values ARRAY chy form madhe yetat ani te FOREACH ne handle karu shakto******* 

const myCOding =[
    {
        Sr:1,
        name: "swapnil",
        age:22,
        village:"INDIA"
    },
    {
        Sr:2,
        name: "raj",
        age:22,
        village:"USA"
    },
    {
        Sr:3,
        name: "swapnil",
        age:22,
        village:"JAPAN"
    }
]

myCOding.forEach( (item) => {

    console.log(item.name);
    console.log(item.village);
    console.log(item.Sr);
})

// ******Filter

const mynum = [1,2,3,4,5,6,7,8,9,10]

const val = mynum.filter( (num) =>  num > 4);

console.log(val);

const myBooks = [
    {
        title:" book 1",
        genre:"marathi",
        publish:1988,
        edition:2005
    },
    {
        title:" book 2",
        genre:"hindi",
        publish:1978,
        edition:2000
    },
    {
        title:" book 3",
        genre:"history",
        publish:1960,
        edition:2011
    },
    {
        title:" book 4",
        genre:"science",
        publish:2000,
        edition:2022
    },
    {
        title:" book 5",
        genre:"maths",
        publish:1988,
        edition:2000
    },
    {
        title:" book 6",
        genre:"english",
        publish:1988,
        edition:2005
    },
]

let bookinfo = myBooks.filter( (book) => {
    return book.publish >1970;
})

// console.log(bookinfo);

bookinfo = myBooks.filter( (book) => book.edition >= 2005 && book.publish >=1995 )
console.log(bookinfo);
 

bookinfo = myBooks.filter( (val) => {
    return val.genre =="marathi"
})
// console.log(bookinfo ); 