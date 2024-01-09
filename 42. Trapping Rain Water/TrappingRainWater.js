
// Source : https://leetcode.com/problems/trapping-rain-water/description/?source=submission-ac

/*********************************************************************************************************
 * 
 *  Given n non-negative integers representing an elevation map where the width of each bar is 1,
 *  compute how much water it can trap after raining.
 *  
 *  Example 1:
 * 
 *  Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 *  Output: 6
 *  Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 *  In this case, 6 units of rain water (blue section) are being trapped.
 * 
 *  Example 2:
 * 
 *  Input: height = [4,2,0,3,2,5]
 *  Output: 9
 * 
 ********************************************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let left = 0;

    let right = height.length - 1;

    let Mleft = 0;

    let Mright = 0 

    let j = 0;

    while (left < right) {

        if (height[left] < height[right]) {

            if (height[left] >= Mleft) {

                Mleft = height[left];

            } else {

                j += Mleft - height[left];

            }

            left++;

        } else {

        if (height[right] >= Mright) {

            Mright = height[right];

        } else {

            j += Mright - height[right];

        }

        right--;

        }

    }
    
    return j;


    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n)
    // Space Complexity: O(1)
    // Where 'n' represents the length of the 'height' array.
    // The time complexity is O(n) because we loop over each value in the array 'height'.
    // The space complexity is O(1) because we dont use extra spece.

};