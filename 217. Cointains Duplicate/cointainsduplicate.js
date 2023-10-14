
// Source : https://leetcode.com/problems/contains-duplicate/

/*********************************************************************
 * 
 * 
 *  Given an integer array nums, return true if any value appears at least twice in the array,
 *  and return false if every element is distinct.
 * 
 *  Example 1:
 *  Input: nums = [1,2,3,1]
 *  Output: true
 * 
 *********************************************************************/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // Create a set to store unique elements

    let set = new Set();

    // Loop through the array and check for duplicates

    for (i = 0; i < nums.length; i++) {

        if (set.has(nums[i])) {

            return true;

        } else {

            set.set(nums[i]);

        }

    }

    return false;

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // Where 'n' represents the length of the 'nums' array.
    // The time complexity is O(n) because, in the worst-case scenario, we loop through the entire 'nums' array exactly once.
    // The space complexity is O(n) because, in the worst-case scenario, we store all the values of the 'nums' array in the set.

};