var contact = function(name,email){
    this.name =  name;
    this.email = email;
}

contact.prototype.sendBackInfo = function(){
    return "the email is: " + this.email;
}

var bob = new contact("Bob Saget", "bobby@hotmail.com");

console.log(bob);

console.log(bob.sendBackInfo());

console.log("---")


// For the main presentation
for (var property in bob) {
    console.log(property);
}

console.log("---");

for (var property in bob) {
    console.log(bob[property]);
}

console.log("---");

// Inheretance
const collectFees = function(amount){
    this.amount = amount;
}

collectFees.prototype = contact;

var gary = new collectFees("100");

console.log(gary);

for (var property in bob) {
    console.log(bob[property]);
}