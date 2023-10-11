/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//nums = [2,7,11,15], target = 9
var twoSum = function(nums, target) {
    
    for (i = 0; i < nums.length; i++) {

        for (j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] == target) {

                return [i, j];

            }

        }

    }

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
    // Where 'n' represents the length of the 'nums' array.
    // This is because, in the worst-case scenario, we loop through the array twice.


};