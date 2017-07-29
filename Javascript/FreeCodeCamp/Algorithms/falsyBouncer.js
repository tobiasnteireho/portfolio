
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  arr = arr.filter(
    function(a){
      return (!a) == false;//(a != false) &&
        //(a != null) &&
        //(a != 7);// &&
        //(a !== "") &&
        //(typeof(a) !== undefined) &&
        //(!isNaN(a));
    }

      //return !(a in [false, null, 0, "", undefined, NaN]); }
  );
  return arr;
}

bouncer([7, "ate", "", false, 9]);
