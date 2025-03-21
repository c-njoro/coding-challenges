// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
// Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.

const mostFrequentEven = (nums) => {
  const evenArray = nums.filter((number) => number % 2 == 0);

  if (evenArray.length < 1) {
    return -1;
  }

  let element = 0;
  let counts = 0;
  evenArray.sort((a, b) => a - b);

  const singleNumbers = new Set(evenArray);

  //use let ... of,  if you use let .. in you take the index but let ...of takes the value
  for (let number of singleNumbers) {
    const appearances = evenArray.filter((n) => n == number).length;

    if (appearances > counts) {
      element = number;
      counts = appearances;
    }
  }

  return element;
};

console.log("[3,2,3]", mostFrequentEven([3, 2, 3]));
console.log("[0,1,2,2,4,4,1]", mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
console.log("[4,4,4,9,2,4]", mostFrequentEven([4, 4, 4, 9, 2, 4]));
console.log(
  "[29,47,21,41,13,37,25,7]",
  mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])
);
