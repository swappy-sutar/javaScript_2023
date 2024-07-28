// using 2 for loops
// time Complexity = o(n^2)

function CheckSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
const result = CheckSumZero([-5, -4, -2, 0, 2, 4, 6, 8]);
console.log(result);

// linear time Complexity = o(n)

function CheckSumZero1(arr) {
  let left = 0;
  let rigth = arr.length - 1;

  while (left < rigth) {
    sum = arr[left] + arr[rigth];
    if (sum === 0) {
      return [arr[left], arr[rigth]];
    } else if (sum > 0) {
      rigth--;
    } else {
      left++;
    }
  }
}

const result1 = CheckSumZero1([-5, -4, -2, 0, 2, 4, 6, 8]);
console.log(result1);
