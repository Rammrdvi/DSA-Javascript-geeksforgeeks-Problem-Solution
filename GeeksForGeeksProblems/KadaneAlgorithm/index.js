class Solution {
    maxSubarraySum(arr, n) {
        let maxEndingHere = arr[0];
        let maxSoFar = arr[0];
        
        for (let i = 1; i < n; i++) {
            // Update maxEndingHere by choosing between continuing the previous subarray or starting a new one
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            // Update maxSoFar to store the maximum sum seen so far
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
}

// Example usage
let solution = new Solution();
let arr = [1, 2, 3, -2, 5];
let n = 5;
let maxSum = solution.maxSubarraySum(arr, n);
console.log(maxSum); // Output should be 9
