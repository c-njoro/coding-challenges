// 15. 3Sum
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums,
//  return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const threeSum = (nums) => {
  // Sort the input array
  nums.sort((a, b) => a - b);
  const result = []; // Initialize the result array

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1; // Initialize the left pointer
    let right = nums.length - 1; // Initialize the right pointer

    while (left < right) {
      // Calculate the sum of the three numbers
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Add the triplet to the result array
        result.push([nums[i], nums[left], nums[right]]);
        left++; // Move the left pointer to the right
        right--; // Move the right pointer to the left

        // Skip duplicate values
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++; // Move the left pointer to the right
      } else {
        right--; // Move the right pointer to the left
      }
    }
  }

  return result; // Return the result array
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
console.log(threeSum([0])); // []
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
