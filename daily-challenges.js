for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const reversed = "hello".split("").reverse().join("");
console.log(reversed); // "olleh"

function findLargest(arr) {
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) largest = num;
  }
  return largest;
}
console.log(findLargest([3, 7, 2, 9])); // 9

const unique = [...new Set([1, 2, 2, 3, 4, 4, 5])];
console.log(unique); // [1, 2, 3, 4, 5]

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
