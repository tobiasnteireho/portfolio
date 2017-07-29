
function chunkArrayInGroups(arr, size) {
  // Break it up.
  
  var chunked = [];
  for (var i = 0; i< arr.length; i += size){
    var cap = ((i+size) >= arr.length)? arr.length: size;
    chunked.push(arr.slice(i,i+cap));
  }
  return chunked;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
