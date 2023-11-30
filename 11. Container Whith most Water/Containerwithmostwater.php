<?php

class Solution {

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height) {

        // brute force

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

        

        
    }

}

?>