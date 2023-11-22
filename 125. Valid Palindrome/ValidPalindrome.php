<?php

class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) {

        $string = preg_replace("/[^A-Za-z0-9]/", '', strtolower($s));

        return strrev($string) == $string;
    }
}

?>