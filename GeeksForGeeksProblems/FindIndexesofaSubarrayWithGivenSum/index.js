class Solution {
    subarraySum(arr, n, s) {
        let sum = 0;
        let start = 0;
        let end = -1;
        let sumMap = new Map(); // Map to store {sum: index} pairs
        
        for (let i = 0; i < n; i++) {
            sum += arr[i];
            
            // If the current sum equals the target sum, return the indices
            if (sum === s) {
                start = 0;
                end = i;
                break;
            }
            
            // If the difference between current sum and target sum is found in the map
            if (sumMap.has(sum - s)) {
                start = sumMap.get(sum - s) + 1;
                end = i;
                break;
            }
            
            // Store the current sum along with its index in the map
            sumMap.set(sum, i);
        }
        
        // If end index is still -1, no subarray with the given sum exists
        if (end === -1) {
            return [-1];
        }
        
        // Return the start and end indices (1-based indexing)
        return [start + 1, end + 1];
    }
}

// Example usage
let solution = new Solution();
let arr = [1, 2, 3, 7, 5];
let n = 5;
let s = 12;
let result = solution.subarraySum(arr, n, s);
console.log(result.join(' ')); // Output should be "2 4"
