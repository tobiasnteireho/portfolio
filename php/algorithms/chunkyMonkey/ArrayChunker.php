<?php 

class ArrayChunker{
	public static function chunkArrayInGroups($arr, $size) {
	  // Break it up.
	  
	  $chunked = [];
	  for ($i = 0; $i< count($arr); $i += $size){
		$cap = (($i+$size) >= count($arr))? count($arr): $size;
		array_push($chunked,array_slice($arr,$i,$i+$cap));
	  }
	  return $chunked;
	}

}

//print_r(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
