
function telephoneCheck(str) {
  // Good luck!
  //var m = str.match(/ 1?\s*\(?\d\d\d\)?\s*-?\d\d\d-?\s*\d\d\d\d /gi);
  //var m = str.match(/1?\s?\(?\d{3}\)?\s?-?\d{3}\s?-?\d{4}/gi);
  
  
  //var m =str.match(/(1?)\s?(\d{3})\s?-?(\d{3})\s?-?(\d{4})/i);
  
  var m = "";// = str.match(/1 \d{3}-\d{3}-\d{4}/);
  //if (m == null)
    //m = str.match(/[^-]?[1]?\s?\(?\d{3}[\)\s-]?\d{3}[\s-]?\d{4}/);
  
  var valid = [
    /*
    /[^\D]\d{3}-\d{3}-\d{4}/,
    /[^\D]?1?\s\d{3}-\d{3}-\d{4}/,
    /[^\D]\d{3}-\d{3}-\d{4}/,
    /[^\D][1\s]\(\d{3}\)[\s-]\d{3}[\s-]\d{4}/,
    /[^\D]?\d{10}/,
    /1 \(\d{3}\)\d{3}-\d{4}/,
    /[^\D]?\(\d{3}\)\d{3}-\d{4}/,
    /\d{3}-\d{3}-\d{4}/,
    /1 \d{3} \d{3} \d{4}/
    */
    
    /^1?\s?(\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/,
    /^1?\s?\((\d{3})\)[\s-]?(\d{3})[\s-]?(\d{4})$/
   ];
  
  var ret = false;
  var q;
  var z = [];
  for(var i = 0; i <valid.length; i++){
    var re = new RegExp(valid[i]);
    q =  str.match(re);
    if (q){
      ret = true;
      //break;
    }
    z.push(q);
      
  }
   
  
  return ret;//"1 555 555 5555".match(/^1?\s?(\d[\s-\(])?(\d{3}) (\d{3})[\s-](\d{4})$/ );///^1?\s?(\d[\s-\(])?(\d{3}) (\d{3}) (\d{4})$/ );//~~(m) === 0;
}



//telephoneCheck("555-555-5555");
//telephoneCheck("2(757)6227382");
//telephoneCheck("1 555-555-5555");

//telephoneCheck("555-555-5555");
//telephoneCheck("1 555-555-5555");
//telephoneCheck("1 (555) 555-5555");
//telephoneCheck("5555555555");
//telephoneCheck("555-555-5555");
//telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
