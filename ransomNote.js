// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by
//  using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

const canConstruct = (ransomNote, magazine) => {
  const magazineMap = {};

  for (const letter of magazine) {
    magazineMap[letter] = (magazineMap[letter] || 0) + 1;
  }

  for (const letter of ransomNote) {
    if (!magazineMap[letter]) return false;
    magazineMap[letter]--;
  }

  return true;
};

// Time complexity: O(n + m)
// Space complexity: O(m) where n is the length of the ransomNote and m is the length of the magazine
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
