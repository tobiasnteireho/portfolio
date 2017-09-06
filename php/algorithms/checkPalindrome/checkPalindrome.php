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
	  // need to remove non alphanum
	  
	  preg_match_all('/\w/', "A man, a plan, a canal. Panama", $matches);
	  
	  $str = implode($matches[0])
	  
	  $str = strtolower($str);
	  $rev = strrev($str);

	  return ($str === $rev);
	}
}

/*
echo Palindrome::isPalindrome("eye") ? "true": "false";
echo PHP_EOL;
echo Palindrome::isPalindrome("eye") ? 'true': 'false';// should return a boolean.
echo PHP_EOL;
echo  Palindrome::isPalindrome("eye") ? 'true': 'false';// should return true.
echo PHP_EOL;
echo Palindrome::isPalindrome("_eye") ? 'true': 'false';// should return true.
echo PHP_EOL;
echo Palindrome::isPalindrome("race car") ? 'true': 'false';// should return true.
echo Palindrome::isPalindrome("not a palindrome") ? 'true': 'false';// should return false.
print Palindrome::isPalindrome("A man, a plan, a canal. Panama") ? 'true': 'false';// should return true.
print Palindrome::isPalindrome("never odd or even") ? 'true': 'false';// should return true.
print Palindrome::isPalindrome("nope") ? 'true': 'false'; // should return false.
print Palindrome::isPalindrome("almostomla") ? 'true': 'false'; // should return false.
print Palindrome::isPalindrome("My age is 0, 0 si ega ym.") ? 'true': 'false'; // should return true.
print Palindrome::isPalindrome("1 eye for of 1 eye.") ? 'true': 'false'; // should return false.
print Palindrome::isPalindrome("0_0 (: /-\ :) 0-0") ? 'true': 'false'; // should return true.
print Palindrome::isPalindrome("five|\_/|four") ? 'true': 'false'; // should return false.
*/
