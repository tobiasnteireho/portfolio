
function sumFibs(num) {
  var fn_1 = 1, fn_2= 1, fn = 0, sum = 0;
  
  if (num >= 2)
    sum = 2;
  for(var i = 2; i < num; i++){
    
    fn = fn_1+fn_2;
    fn_1 = fn_2;
    fn_2 =fn;
    if (fn > num)
      break;
    if (fn%2 !== 0){
      sum += fn;
    }

//1 1 2 3 5 8 13 21
    
  }
  return sum;
}

sumFibs(19);//4);
