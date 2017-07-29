
function factorialize(num) {
  if (num > 1){
    for(var i = num - 1; i >= 1; i--){
      num*=i;
    }
  } else {
    num = 1;
  }
  
  return num;
}

factorialize(5);
