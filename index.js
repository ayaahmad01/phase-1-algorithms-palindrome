function isPalindrome(word) {
  
  word = word.toLowerCase();
  
 
  word = word.replace(/[^a-z]/g, '');

  // Compare the string with its reverse
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
// Convert the string to lowercase
 // Remove non-alphabetic characters
  // Compare the string with its reverse
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
