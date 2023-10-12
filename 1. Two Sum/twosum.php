<?php

class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer[]
 */
    function twoSum($nums, $target) {
        for ($i = 0; $i < count($nums); $i++) {
            for ($j = $i + 1; $j < count($nums); $j++) {
                if ($nums[$i] + $nums[$j] == $target) {
                    return array($i, $j);
                }
            }
        }
    }
}

    // The Big O notation for this algorithm is as follows:
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
    // Where 'n' represents the length of the 'nums' array.
    // This is because, in the worst-case scenario, we loop through the array twice.

?>