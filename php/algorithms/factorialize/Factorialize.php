<?php
class Factorial{
	
	public static function factorialize($num) {
	  if ($num > 1){
		for($i = $num - 1; $i >= 1; $i--){
		  $num*=$i;
		}
	  } else {
		$num = 1;
	  }
	  
	  return $num;
	}
}

//Factorial::factorialize(5);