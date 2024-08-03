// [1,2,3,4,3,4,3,5,4,6,7,8,9] len = 10
// Count largest sum of consecutive digits
// sum = 25

function findNum(arr, num) {
  if (num > arr) {
    return false;
  } else {
    let max = 0;
    for (let i = 0; i < arr.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += arr[j];
      }

      \
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}
const result = findNum([1, 2, 3, 4, 3, 4, 3, 5, 4, 6, 7, 8, 9], 4);
console.log(result);
