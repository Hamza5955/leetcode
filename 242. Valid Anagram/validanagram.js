/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let n1 = s.length;
    let n2 = t.length;

    // If length of both strings is not same,
    // then they cannot be anagram
    if (n1 != n2) {
        return false;
    }
    // Sort both strings
    let sArray = s.split('').sort().join();
    let tArray = t.split('').sort().join();

    // Compare sorted strings
    return sArray === tArray;

};