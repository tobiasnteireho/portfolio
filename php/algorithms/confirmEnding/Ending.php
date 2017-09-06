<?php
class Ending{
	
	public static function confirmEnding($str, $target) {
	  // "Never give up and good luck will find you."
	  // -- Falcor
	  
	  return ($target === substr($str, count($str) - count($target), count($target))) ;
	}
}
//confirmEnding("Bastian", "n");
