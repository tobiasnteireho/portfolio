
function checkCashRegister(price, cash, cid) {
  var change = [];
  // Here is your change, ma'am.
  var vals = {"PENNY":0.01, "NICKEL":0.05, "DIME":0.10,
              "QUARTER":0.25, "ONE":1.00, "FIVE":5.00,
             "TEN":10.00, "TWENTY":20.00, "ONE HUNDRED":100};
  var need = cash - price;//price - cash;

  //cid.sort(function(a,b){ return (a[1] /vals[a[0]] > b[1]/vals[b[0]]);});
  cid.sort(function(a,b){ return (vals[a[0]] < vals[b[0]]);});
  
  var  totalcid = cid.map(function(a) {return a[1];}).reduce(function(sum,v, a, b){ return sum + v;});
  var q =[];
  
  if (need !== totalcid){
  for (var i = 0; i < cid.length && need > 0; i++){
    q.push(need);
    //for(var j = 0; j <)
    //if (cid[i])
    if (vals[cid[i][0]] > need)
      continue;
    var s = ~~(100*need / (100*vals[cid[i][0]]));
    var tokens = ~~(cid[i][1]/vals[cid[i][0]]);
     
    
    if (tokens > s){
      need -= s*vals[cid[i][0]];
      change.push([cid[i][0], s*vals[cid[i][0]]]);
    } else {
      need -= tokens*vals[cid[i][0]];
      change.push([cid[i][0], tokens*vals[cid[i][0]]]);
    }
    
    need = Math.round(100*need)/100;
    
    
    }
  }else
      change = "Closed";
  if ((need > 0) && (change !== "Closed")){
      change =  "Insufficient Funds";    
      
  }
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

//checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
