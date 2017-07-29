function isPrime(num){
  
}

function factor(num){
  var ret = [], met = {};
  for (var i = 2; i <= num; i++){
    if (num % i === 0){
      
      if (!met.hasOwnProperty(i))
        met[i] =1;
      else
        met[i] +=1;
      
      num /= i;
      i=1; //this could be clearer
      
    }
  }
  return met;
}

function mergeFactors(a, b){
  
  var c  = (Object.keys(a).length < Object.keys(b).length) ?
      {"shorter":a, "longer":b}: {"shorter":b, "longer":a};
  
  for(var z in c.shorter){
    if (c.longer.hasOwnProperty(z)){
      c.longer[z] = Math.max(c.longer[z], c.shorter[z]);
    } else
      c.longer[z] = c.shorter[z];
    
    
  }
  
  return c.longer;
}



function smallestCommons(arr) {
  var scm = 1;
  var z = (arr[0] < arr[1]) ? 
        {"smallest":arr[0], "largest":arr[1]} :
      {"smallest":arr[1], "largest":arr[0]}; 
  var factors = [];
  if (z.smallest ===1){
    z.smallest = 2;
  }
  
  for(var i = z.largest; i >= z.smallest; i--){
    factors.push(factor(i));
  }
  /*var t = factors.reduce(
    function(a,b) {return mergeFactors(b,a);});
  //scm /= Math.floor(Math.log(z.largest)/Math.log(2));
  */
  var t = factors[0];
  for (var n =1; n<factors.length; n++){
    //reduce not working... am I sleepy?
    t = mergeFactors( t, factors[n]);//, t);
  }
  
  var ret = 1;
  for(var w in t){//in t){
    ret *= Math.pow(parseInt(w), t[w]);
  }
  return ret;//(121);//[]scm;
}
//2, 3, 4, 5, 6, 7, 8

smallestCommons([1,13]);//5]);

