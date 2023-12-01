/*********************************************************************************************
 * 
 *  You are given an integer array height of length n. 
 *  There are n vertical lines drawn such that the two 
 *  endpoints of the ith line are (i, 0) and (i, height[i]).
 *  Find two lines that together with the x-axis form a container, 
 *  such that the container contains the most water.
 *  Return the maximum amount of water a container can store.
 * 
 *  Input: height = [1,8,6,2,5,4,8,3,7]
 *  Output: 49
 *  Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
 *  In this case, the max area of water (blue section) the container can contain is 49.
 * 
 *********************************************************************************************/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;

    let right = height.length - 1;

    let j = 0;

    while (left <= right) {
        
        let maxHeight = Math.min(height[left], height[right])

        let area = maxHeight * (right - left);

        if (area > j) {

            j = area;

        }

        if (height[left] < height[right]) {

            left++;

        } else {

            right--;

        }

    }

    return j;

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // Where 'n' represents the length of the 'heights'/'nums' array.
    // The time complexity is O(n) because, in the worst-case scenario, we loop through the entire 'heights'/'nums' array exactly once.
    // The space complexity is O(n) because, in the worst-case scenario, we store all the values of the 'heights' array in the set.
    
};