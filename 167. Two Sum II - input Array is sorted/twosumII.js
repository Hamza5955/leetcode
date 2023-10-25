
// Source : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**************************************************************************************************
 * 
 *  iven a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
 *  find two numbers such that they add up to a specific target number.
 *  Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
 * 
 *  Return the indices of the two numbers, index1 and index2,
 *  added by one as an integer array [index1, index2] of length 2.
 * 
 *  The tests are generated such that there is exactly one solution. You may not use the same element twice.
 * 
 *  Your solution must use only constant extra space.
 * 
 ***************************************************************************************************/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 /*
const fuck_you = (i, j, m, numbers, target) => {
    
    if (i == j){
        return []
    }

    if((numbers[i] + numbers[j]) == target){
        return [i + 1, j + 1]
    }

    let num1 = numbers[i] + numbers[m]

    if(num1 >= target) {
        return fuck_you(i, m, Math.ceil((m - 1) /2), numbers, target);
    }

    return fuck_you(m, j, Math.ceil((j + m) /2), numbers, target);
}

var twoSum = function(numbers, target) {

    let i = 0;
    let j = numbers.length - 1;
    //let index = 0;
    return fuck_you(i, j,Math.ceil(j / 2) , numbers, target);
    
};*/
