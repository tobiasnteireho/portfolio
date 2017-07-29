
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var x,y,z;
  y = Object.keys(source);
  for(var i = 0; i < collection.length; i++){
    x = collection[i];
    //for(y in source)
    var t = 0;
    for(var n  = 0; n < y.length; n++ ){
      if (x.hasOwnProperty(y[n])){
        if(x[y[n]] === source[y[n]])
          t++;
        //break;
      }
    }
    if (t == y.length){
      arr.push(x);
    }
  }
  
  
  
  // Only change code above this line
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
