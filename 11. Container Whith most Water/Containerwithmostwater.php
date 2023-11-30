<?php

class Solution {

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height) {

        // brute force
        /*
        $k = 0;

        for ($i = 0; $i < count($height) - 1; $i++)  {

            for ($j = 1; $j < count($height); $j++) {

                $area = min($height[$i], $height[$j]) * ($j - $i);

                if ($area > $k) {

                    $k = $area;

                }

            }


        }

        return $k;

        */

        $left = 0;

        $right = count($height) - 1;

        $j = 0;

        while ($left < $right) {

            $area = min($height[$left], $height[$right]) * ($right - $left);

            if ($area > $j) {

                $j = $area;

            }

            if ($height[$left] < $height[$right]) {

                $left++;

            } else {

                $right--;

            }

        }

        return $j;

    }

}

?>
