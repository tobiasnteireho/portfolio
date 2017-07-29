
function pairElement(str) {
  var complement_base = {"A":"T", "T":"A", "G":"C", "C":"G"};
  
  var seq = [];
  for(var i = 0; i < str.length; i++){
    seq.push([str[i], complement_base[str[i]]]);
  }
  return seq;
}

pairElement("GCG");
