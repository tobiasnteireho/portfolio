
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWordLen = words.map(function(a){ return 1*a.length;});
  
  return Math.max.apply(Math, longestWordLen);//str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
