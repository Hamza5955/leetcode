
// Source : https://leetcode.com/problems/two-sum/description/

/*********************************************************************
 * 
 *  Given an array of integers nums and an integer target,
 *  return indices of the two numbers such that they add up to target.
 * 
 *  You may assume that each input would have exactly one solution, 
 *  and you may not use the same element twice.
 * 
 *  Input: nums = [2,7,11,15], target = 9
 *  Output: [0,1]
 *  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 *********************************************************************/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    /*
    for (i = 0; i < nums.length; i++) {

        for (j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] == target) {

                return [i, j];

            }

        }

    }
    */

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
    // Where 'n' represents the length of the 'nums' array.
    // This is because, in the worst-case scenario, we loop through the array twice.



    let map = new Map();

    for (let i = 0; i < nums.length; i++) {

        let num1 = nums[i];

        let num2 = target - num1;

        if (map.has(num2)) {

            return [i, map.get(num2)];

        }
        
        map.set(num1, i);

    }

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // Where 'n' represents the length of the 'nums' array.
    // The time complexity is O(n) because, in the worst-case scenario, we loop through the entire 'nums' array exactly once.
    // The space complexity is O(n) because, in the worst-case scenario, we store all the values of the 'nums' array in the map.

};