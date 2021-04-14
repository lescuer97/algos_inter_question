// leetcode https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  const anverse = x.toString().split("").join("");
  const reverse = x.toString().split("").reverse().join("");

  if (anverse === reverse) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
