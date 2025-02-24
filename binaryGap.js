// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by
//  ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
// The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
//  The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111
//  and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap.
//  The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001
//  and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary
//  representation '100000' and thus no binary gaps.

function solution(N) {
  let binary = N.toString(2); //converting the number to binary
  let gaps = binary.split("1"); //split the number by 1s to get the gaps

  gaps.pop(); //removing the last element, so if the binary ended with zero the last part of zeroes is not counted

  let maxGap = 0;
  for (let gap of gaps) {
    maxGap = Math.max(maxGap, gap.length);
  }

  return maxGap;
}

// Example test cases
console.log(solution(1041)); // Output: 5
console.log(solution(529)); // Output: 4
console.log(solution(20)); // Output: 1
console.log(solution(15)); // Output: 0
console.log(solution(32)); // Output: 0
