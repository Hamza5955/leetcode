
// Source : https://leetcode.com/problems/group-anagrams/description/

/********************************************************************************************
 * 
 * 
 *  Given an array of strings strs, group the anagrams together. 
 *  You can return the answer in any order.
 * 
 *  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 *  typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 
 ********************************************************************************************/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // initializes an empty Map

    let map = new Map();

    // It loops through the input array strs using a for loop.

    for (let i = 0; i < strs.length; i++) {

        let sorted = strs[i].split('').sort().join('');

        // It checks if the map already has an entry for the sorted signature. 
        // If it does, it pushes the original string into the existing array associated with that signature. If not, it creates a new entry in the map with the sorted signature as the key and an array containing the original string as the value.

        if(map.has(sorted)) {

            map.get(sorted).push(strs[i]);

        } else {

            map.set(sorted, [strs[i]]);
            
        }
    }

    // return arrays of anagrams

    return Array.from(map.values());

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(strs)
    // Space Complexity: O(strs)
    // The algorithm iterates through each string in the input array once.
    // Space Complexity: O(strs) - The algorithm stores the grouped anagrams in a map
    
};