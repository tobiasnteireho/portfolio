
function isPrime(num){
  var ret = true;
  if (num%2 === 0)
    ret = false;
  else
    for(var j = 3; j <= Math.sqrt(num); j += 2){
      if (num%j === 0){
        ret = false;
        break;
      }
    }
  return ret;
}

function sumPrimes(num) {
  var sum = 0;
  
  if (num >= 2)
    sum = 2;
  for (var i= 3; i <= num; i+=2){
    if(isPrime(i)){
      sum += i;
    }
  }
  return sum;//isPrime(9);
}

sumPrimes(10);
