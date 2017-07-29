
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  var f = false;
  /*
  if (bool){
    var bs = bool.toString();
    //f = bs.match(/(true|false)/g);
    if ((bs === "true") || (bs === "false")){
      f = true;
    }
  }
  */
  

  
  return typeof bool === "boolean";//bool;
}

booWho(true);

//booWho(false);
