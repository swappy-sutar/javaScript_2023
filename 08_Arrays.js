 const myArr = [1,2,3,4,5,6,7];

 console.log(myArr);
 console.log(myArr[2]);
 console.log(myArr.length);
 myArr.pop();
 myArr.push(11);
 myArr.unshift(100) // its add to the start means 0th index
 myArr.shift();// its remove first element from the array
 console.log(myArr);

 const newArr = myArr.join();// convert in to string 
console.log(myArr);
console.log(typeof (newArr));
console.log(newArr);

// Slice 
console.log("old Array",myArr);

const arrSlice = myArr.slice(1,5);
console.log("After Slice",arrSlice);

// Splice

const arrSplice = myArr.splice(1,4);
console.log("After Splice",myArr);
console.log(arrSplice);
