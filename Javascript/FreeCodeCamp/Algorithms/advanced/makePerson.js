
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    
    var names = firstAndLast.split(" ");
    var firstName = names[0];
    var lastName = names[1];
  
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
  
    this.setFirstName = function(first){
      firstName = first;
    };
    
    this.setLastName = function(last){
      lastName = last;
    };
  
  this.getFirstName = function(){
    return firstName;
  };
  
  this.getLastName = function(){
    return lastName;
  };
  
  this.setFullName = function(fullName){
    names = fullName.split(" ");
    firstName = names[0];
    lastName = names[1];
  };

  
  
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
