
// Source : https://leetcode.com/problems/top-k-frequent-elements/description/

/*************************************************************************************************
 * 
 * 
 *  Given an integer array nums and an integer k, return the k most frequent elements.
 *  You may return the answer in any order.
 * 
 *  Example 1:
 *  Input: nums = [1,1,1,2,2,3], k = 2
 *  Output: [1,2]
 * 
 *  Example 2:
 *  Input: nums = [1], k = 1
 *  Output: [1]
 * 
 ************************************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    // initializes an empty Map

    let map = new Map();

    // if the number dass not exit add else increment bay one

    for (let i = 0; i < nums.length; i++) {

        if (!map.has(nums[i])) {

            map.set(nums[i], 1);

        } else {

            map.set(nums[i], map.get(nums[i]) + 1);

        }

    }

    // sort the map by value 

    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    // retun the k ammaunt of ellent 
    return [...sortedMap.keys()].slice(0, k);

};