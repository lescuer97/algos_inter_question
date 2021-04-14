// leet code https://leetcode.com/problems/two-sum/

const arr = [3, 2, 4];

function solution(nums, target) {
  let result = null;

  nums.forEach((num, index) => {
    if (result) {
      //   console.log(result);
      return;
    }
    for (let j = 0; j < nums.length; j++) {
      if (index === j) {
        break;
      }
      if (result) {
        console.log(result);
        break;
      }
      if (num + nums[j] === target) {
        result = [j, index];
      }
    }
  });
  return result;
}

console.log(solution(arr, 6));
