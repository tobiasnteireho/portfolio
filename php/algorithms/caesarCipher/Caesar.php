<?php
class Caesar{
	
	public static function rot13($str) { // LBH QVQ VG!
	  $rotStr = "";
	  for($i = 0; $i < strlen($str); $i++){
		$c = $str[$i];
		$rotC = "";
		if (($c >= "A") && ($c <= "Z")){
			$c= ord($str[$i]);
		   $rotC = chr(65 + ($c+13 - 65)%26);
		} else {
		  $rotC = $c;
		}
		
		$rotStr .= $rotC;
	  }
	  return $rotStr;
	}
}

// Change the inputs below to test
//echo rot13("SERR PBQR PNZC\n");
