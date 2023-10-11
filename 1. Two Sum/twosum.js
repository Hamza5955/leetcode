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

    // Big O notation for this algorithm is  Time : O(n^2) Space : O(1) 
    // 'n' is the length of the 'nums' array
    // because in the worst case senerio we lop to the array twice

};