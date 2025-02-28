// 11. Container With Most Water
// Medium
// Topics
// Companies
// Hint
// You are given an integer array height of length n.
//  There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

const maxArea = (height) => {
  let max = 0; // Initialize the maximum area to 0
  let left = 0; // Initialize the left pointer to the start of the array
  let right = height.length - 1; // Initialize the right pointer to the end of the array

  while (left < right) {
    // Loop until the two pointers meet
    // Calculate the area formed by the lines at the left and right pointers
    const currentArea = Math.min(height[left], height[right]) * (right - left);
    // Update the maximum area if the current area is larger
    max = Math.max(max, currentArea);

    // Move the pointer that points to the shorter line inward
    if (height[left] < height[right]) {
      left++; // Move the left pointer to the right
    } else {
      right--; // Move the right pointer to the left
    }
  }

  return max; // Return the maximum area found
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16  // 4 * 4
console.log(maxArea([1, 2, 1])); // 2 // 1 * 2
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
