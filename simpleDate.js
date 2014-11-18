/*
Random Code Showcase
Jujhar Singh
Nov/18/2014
-------------
Get current Day, Month, and Year in JavaScript
*/

var d = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];


alert(d.getDate())
alert(monthNames[d.getMonth()])
alert(d.getFullYear())