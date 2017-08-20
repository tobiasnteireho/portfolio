
function pairwise(arr, arg) {
  
  var indices = [];
  var sums = 0;
  for (var i = 0; i <  arr.length; i++){
    for(var j = i+1; j <  arr.length; j++){
      if ((indices.indexOf(i) === -1) &&
        (indices.indexOf(j) === -1))
        if (arr[i] + arr[j] === arg){
          sums += i + j;
          indices.push(i);
          indices.push(j);
        }
    }
  }
  return sums;
}

//pairwise([1,4,2,3,0,5], 7);
pairwise([0, 0, 0, 0, 1, 1], 1);
