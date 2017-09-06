<?php 

class Palindrome
{
	public static function checkAlphaNum($a){
	  $a = strtolower($a);
	  return (($a >= "0") && ($a <= "9")) ||
		  (($a >= "a") && ($a <= "z"));
	}
	public static function isPalindrome($str) {
	  // Good luck!
	  
	  preg_match_all('/\w/', $str, $matches);
	  
	  $str = implode($matches[0]);
	  
	  $str = strtolower($str);
	  $rev = strrev($str);

	  return ($str === $rev);
	}
}

