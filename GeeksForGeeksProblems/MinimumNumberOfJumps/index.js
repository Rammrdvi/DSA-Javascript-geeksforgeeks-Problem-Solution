class Solution {
    minJumps(arr, n) {
        // Check if the array length is less than or equal to 1
        if (n <= 1) return 0;
        
        // Check if the first element of the array is 0
        if (arr[0] === 0) return -1;
        
        // Initialize variables for jumps, maximum reach, and remaining steps
        let jumps = 1;
        let maxReach = arr[0];
        let steps = arr[0];
        
        // Iterate through the array starting from the second element
        for (let i = 1; i < n; i++) {
            // If we reach the end of the array, return the number of jumps
            if (i === n - 1) return jumps;
            
            // Update the maximum reach if the current index can be reached with more jumps
            maxReach = Math.max(maxReach, i + arr[i]);
            
            // Decrement the remaining steps
            steps--;
            
            // If there are no remaining steps, take a jump and update steps to the remaining steps at the new index
            if (steps === 0) {
                jumps++;
                
                // If the current index cannot be reached from the previous maximum reach, return -1
                if (i >= maxReach) return -1;
                
                steps = maxReach - i;
            }
        }
        
        // If we reach here, it means we cannot reach the end of the array
        return -1;
    }
}

// Example usage
let solution = new Solution();
let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let n = 11;
let minJumps = solution.minJumps(arr, n);
console.log(minJumps);
