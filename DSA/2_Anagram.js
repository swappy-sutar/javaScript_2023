// String anagram
// 1.hello -> olhel
// 2.swap -> apsw

function checkAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let counter = {};

  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }
  console.log(counter);

  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

const result = checkAnagram("swappy", "sapwpy");
console.log(result);
