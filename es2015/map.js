var objects = ['1',2,3,4,5]

mod = objects.map(function(x) {
    return parseInt(x)+1;
})

console.log(mod);

// Example 2

var data = [5,5,5];
newdat = data.map(function(val){
    return val * 11
})

console.log(newdat);