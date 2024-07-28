function countUnique(arr) {
  if (arr.length) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[count] !== arr[i]) {
        count++;
        arr[count] = arr[i];
      }
    }
    return count + 1;
  } else {
    throw new Error("Array is empty");
  }
}

const result = countUnique([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 8]);
console.log(result);
