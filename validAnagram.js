// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sMap = {};

  for (const char of s) {
    sMap[char] = (sMap[char] || 0) + 1;
  }

  for (const char of t) {
    if (!sMap[char]) return false;
    sMap[char]--;
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("a", "ab")); // false
console.log(validAnagram("ab", "a")); // false
