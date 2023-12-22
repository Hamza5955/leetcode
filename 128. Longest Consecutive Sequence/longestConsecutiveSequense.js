
// Source : https://leetcode.com/problems/longest-consecutive-sequence/

/*********************************************************************
 * 
 * 
 *  Given an unsorted array of integers nums,
 *  return the length of the longest consecutive elements sequence.
 *  You must write an algorithm that runs in O(n) time.
 * 
 *  Example 1:
 *  
 *  Input: nums = [100,4,200,1,3,2]
 *  Output: 4
 *  Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 * 
 *  Example 2:
 * 
 *  Input: nums = [0,3,7,2,5,8,4,6,0,1]
 *  Output: 9
 * 
 *********************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums == null || nums.length == 0) {
        return 0;
    }
    
    const set = new Set(nums);

    let maxit = 1;

    for (let value of set) {
    console.log(value);

        if(set.has(value - 1)){
            continue;
        }

        let currNum = value;

        let currMax = 1;

        while (set.has(currNum + 1)) {
            
            currNum++;
            currMax++;
        
        }

        maxit = Math.max(maxit,currMax);
    }

    return maxit;
    
};
