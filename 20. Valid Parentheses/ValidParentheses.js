
// Source : https://leetcode.com/problems/valid-parentheses/description/
/**********************************************************************************
 * 
 *  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 *  determine if the input string is valid. An input string is valid if:
 *  
 *  1) Open brackets must be closed by the same type of brackets.
 *  2) Open brackets must be closed in the correct order.
 *  3)Every close bracket has a corresponding open bracket of the same type.
 * 
 *  Example 1:
 *  Input: s = "()[]{}"
 *  Output: true
 *  Example 2:
 *  Input: s = "(]"
 *  Output: false
 * 
 ********************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let map = new Map([
        [')','('],
        [']', '['],
        ['}', '{']
    ]);

    if (s === '' || Array.from(map.keys()).includes(s[0])) {

        return false

    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {

        if (Array.from(map.keys()).includes(s[i])) {

            let topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== map.get(s[i])) {
                return false;
            }

        } else {

            stack.push(s[i]) ;

        }

    }

    return stack.length === 0;

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    // Where 'n' represents the length of s
    // The time complexity is O(n) because, we loop through the entire 's' array exactly once.
    // The space complexity is O(n) because, we store all the values of the 's' in the array stack.


};
