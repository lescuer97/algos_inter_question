// leetcode https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  let arr = x.toString().split("").reverse();

  if (arr[arr.length - 1] === "-") {
    arr.pop();
    let newArr = arr.join("");
    Number.parseInt(newArr);
    if (newArr > 0x7fffffff) {
      return 0;
    }
    return newArr * -1;
  } else {
    let newArr = arr.join("");
    Number.parseInt(newArr);
    if (newArr > 0x7fffffff) {
      return 0;
    }
    return newArr;
  }
};

console.log(reverse(234508567675));
console.log(reverse(-2345));
