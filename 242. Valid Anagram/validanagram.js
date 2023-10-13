
// Source : https://leetcode.com/problems/valid-anagram/description/

/*************************************************************************************************
 * 
 * 
 *  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 *  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 *  typically using all the original letters exactly once.
 * 
 *  Example 1:
 *  Input: s = "anagram", t = "nagaram"
 *  Output: true
 *  Example 2:
 *  Input: s = "rat", t = "car"
 *  Output: false
 * 
 ************************************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // If length of both strings is not same,
    // then they cannot be anagram
    /*if (s.length !== t.length) {
        return false;
    }
    // Sort both strings
    let sstr = s.split('').sort().join();
    let tstr = t.split('').sort().join();

    // Compare sorted strings
    return sstr === tstr;*/

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(s * log(s) + t * log(t))
    // Space Complexity: O(1)
    // This is because it involves sorting two strings, 
    // and sorting typically has a time complexity of O(n * log(n)) for n elements.
    // Space Complexity: O(1) - The algorithm uses a constant amount of extra space.


    // If length of both strings is not same, then they cannot be anagram

    if (s.length !== t.length) {

        return false;

    }

    // create map

    let sMap = {};
    
    // add letters to map

    for (let i = 0; i < s.length; i++) {

        let letter = s[i];

        if (!sMap[letter]) {

            sMap[letter] = 1;

        } else {

            sMap[letter]++;

        }

    }

    // Verify if letters are present in the map; if not, return false.

    for (let j = 0; j < t.length; j++) {

        let letter = t[j];

        if (sMap[letter] === undefined){

            return false;

        }

        // Check if the character count in 'sMap' for the current letter is less than 1; if so, return false.

        if (sMap[letter] < 1) {

            return false;

        }

        // Decrement the character 

        sMap[letter]--;

    }

    // all characters are successfully matched return true

    return true;


    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(s + t)
    // Space Complexity: O(s)
    // The algorithm iterates through both input strings once,
    // where s and t are the lengths of the input strings. 
    // Space Complexity: O(s) - The algorithm use to store only map (sMap).



};