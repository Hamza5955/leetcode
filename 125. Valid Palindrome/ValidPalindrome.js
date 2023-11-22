
// Source : https://leetcode.com/problems/valid-palindrome/

/*************************************************************************************************
 * 
 * 
 *  A phrase is a palindrome if, after converting all uppercase letters into lowercase 
 *  letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
 *  Alphanumeric characters include letters and numbers.
 * 
 *  Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * 
 *  Example 1:
 *  Input: s = "A man, a plan, a canal: Panama"
 *  Output: true
 *  Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 *  Example 2:
 * 
 *  Input: s = "race a car"
 *  Output: false
 *  Explanation: "raceacar" is not a palindrome.
 * 
 ************************************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    /*
    let arr = s.split();

    let result = [];

    let numLetters = '0123456789abcdefghijlmnopqrstuvwxyz';

    for (i = 0; i < arr.length; i++) {

        if (numLetters.includes(arr[i].toLowerCase())) {

            result.push(arr[i].toLowerCase());

        }

    }

    return result.join('') == result.reverse().join('');
*/

    const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    return cleanedStr === cleanedStr.split('').reverse().join('');

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // The algorithm iterates through the input string once, where n is the length of the input string.
    // Space Complexity: O(n) - The cleaned string is stored in memory.
    
};
