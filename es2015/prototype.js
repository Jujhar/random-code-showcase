var tele = "woot woot";

console.log(Object.getPrototypeOf(tele));

console.log((tele.big()));

console.log((tele.length));

console.log((tele.toUpperCase()));

console.log(tele);


// Object
pumpkin = {
    "thing": 0
}
pumpkin.sikhi = 1;

console.log(pumpkin)


// Custom object funtion
String.prototype.shizzle = function () {
    return this + "izzle?";
}

var test = "so des ka";

console.log(test.shizzle());

