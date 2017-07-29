
function sumAll(arr) {
  a = Math.max(arr[0],  arr[1]);
  b = Math.min(arr[0],  arr[1]);
 
  return (a + b) * (Math.abs(a -b) + 1) /2; //generic ver of n(n+1)/2
}

sumAll([1, 4]);
