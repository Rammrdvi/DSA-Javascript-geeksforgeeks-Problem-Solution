class Solution {
    missingNumber(n, arr) {
        // Calculate the sum of all numbers from 1 to n
        let expectedSum = (n * (n + 1)) / 2;
        
        // Calculate the sum of elements in the array
        let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
        
        // The missing number is the difference between the expected sum and the actual sum
        return expectedSum - actualSum;
    }
}

// Example usage
let solution = new Solution();
let n = 5;
let arr = [1, 2, 3, 5];
let missingNum = solution.missingNumber(n, arr);
console.log(missingNum); // Output should be 4
