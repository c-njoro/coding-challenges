// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

const majorityElementTwo = (nums) => {
  let elements = [];

  const singleNumbers = new Set(nums);

  for (let num of singleNumbers) {
    const appearances = nums.filter((n) => n == num).length;

    if (appearances > nums.length / 3) {
      elements.push(num);
    }
  }

  return elements;
};

console.log("[3,2,3]", majorityElementTwo([3, 2, 3]));
console.log("[2,2,1,1,1,2,2]", majorityElementTwo([2, 2, 1, 1, 1, 2, 2]));
