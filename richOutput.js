/*
Random Code Showcase
Jujhar Singh
Nov/9/2014
-------------
Task
Write a function that takes an key-value dictionary and returns the output in the following format: ?key=value1&key2=value2&key3=ba
*/

var parseMe= {key:"value1",key2:"value2",key3:"ba"}
var keys = Object.keys(parseMe)

// Change format of dictionary to ?key=value1&key2=value2&key3=ba format
function laParser() {
	// always first character
    var r = "?"
	// separting character
    var seperata = "&" 
	
    for (var keya in keys) {
        var item = keys[keya]
        r += keys[keya]+"="+parseMe[item]+seperata
    }
	// deleate trailing seperata variable
    r = r.substring(0, r.length - 1);
    
	console.log("r is: "+r)
    return r
}

laParser()

// Test to see if match
var output = "?key=value1&key2=value2&key3=ba"
console.log(laParser()==output)
console.log("----");

