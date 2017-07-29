function printMultiple(str, n){
  var ret = "";
  for (var i = 0; i < n; i++){
    ret += str;
  }
  
  return ret;
  
}

function convertToRoman(num) {
  var q = {1000:"M", 500:"D",100:"C",50:"L",10:"X",5:"V",1:"I"};
  var w = [1000, 500, 100, 50, 10, 5, 1];
  
  var r = num;
  var rom = [];//"";
  var c;
  var roma = "";
  var a="";
  var hold = "";
  var qq;
  var s = [];
  for(var i = 0; i < w.length; i++){
    
    c = ~~(r/w[i]);
    
    if ( w[i] === qq){
      roma += q[qq] + hold;
      hold = "";
      q = 0;
      s.push(123);
      //continue;
    }
    

    //if ((r%w[i])===9){//%9 === 0){
    if (~~((r-c*w[i])/(10*w[i])) === 9) {
      hold = q[w[i]];
      qq = w[i] /10;
      s.push(qq);
      s.push(hold);
      
      r -= 9*w[i];
      
       //roma += q[w[i +1]] + q[w[i]];
      //continue;
    } //else
      //hold = "";
    
    
    r -= c*w[i];
    rom.push(c);

    if (c > 3) {
      roma += printMultiple(q[w[i]], 1);
      roma += printMultiple(q[w[i - 1]], 1);
    } else {
     
      roma += printMultiple(q[w[i]], c);
    }

  }
  
  roma = roma.replace("VIV", "IX");
  roma = roma.replace("LXL", "XC");
  roma = roma.replace("MDCD","MCM");
  
  
 return roma;
}

//convertToRoman(36);
convertToRoman(3999);
