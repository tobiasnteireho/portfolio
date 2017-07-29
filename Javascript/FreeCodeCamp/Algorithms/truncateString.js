
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var ending = "";
  
  //if (num > 3) {
    if (str.length > num)  {
      if (num > 3){
        num -= 3;
      }
      ending = "...";
    }
  //}
  
  

  str = str.slice(0, num) + ending;
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
