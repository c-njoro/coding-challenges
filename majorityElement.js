// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority
// element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majorityElement = (nums) => {
  let element = 0;

  const singleNumbers = new Set(nums);

  for (let num of singleNumbers) {
    const appearances = nums.filter((n) => n == num).length;

    if (appearances > nums.length / 2) {
      element = num;
      break;
    }
  }

  return element;
};

console.log("[3,2,3]", majorityElement([3, 2, 3]));
console.log("[2,2,1,1,1,2,2]", majorityElement([2, 2, 1, 1, 1, 2, 2]));
