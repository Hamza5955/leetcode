// Source : https://leetcode.com/problems/search-a-2d-matrix/

/************************************************************************************************
 * 
 *  You are given an m x n integer matrix matrix with the following two properties:
 * 
 *  Each row is sorted in non-decreasing order.
 *  The first integer of each row is greater than the last integer of the previous row.
 * 
 *  Given an integer target, return true if target is in matrix or false otherwise.
 * 
 *  You must write a solution in O(log(m * n)) time complexity.
 * 
 *  Example 1:
 * 
 *  Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 *  Output: true
 * 
 *  Example 2:
 * 
 *  Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 *  Output: false
 * 
 ************************************************************************************************/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    //brute force 

    /*if (matrix.length === 0 || matrix[0].length === 0) {

        return false;

    }

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === target) {

                return true;

            }
        }
    }

    return false;*/

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(m * n)
    // where 'm' is the number of rows and 'n' is the number of columns in the matrix. 
    // The algorithm iterates through each element in the matrix until it finds a match or reaches the end.
    // space complexity : O(1)
    // The space complexity is O(1) because the algorithm doesn't use any additional space


    if (matrix.length === 0 || matrix[0].length === 0) {

        return false;

    }

    let numRows = matrix.length;

    let numCols = matrix[0].length;

    let  left = 0;

    let right = numRows * numCols - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        let midValue = matrix[Math.floor(mid / numCols)][mid % numCols];

        if (midValue === target) {

            return true;

        } else if (midValue > target) {

            right = mid - 1;

        } else {

            left = mid + 1;

        }

    }

    return false;

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(log(m * n))
    // where 'm' is the number of rows and 'n' is the number of columns in the matrix.
    // is basecly a duble binary search were it efficiently eliminates half of the search space in each iteration.
    // space complexity : O(1)
    // The space complexity is O(1) because the algorithm doesn't use any additional space.

};