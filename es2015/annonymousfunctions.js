(function(){
    console.log("heyloo there");
})();

var doggie = function(x,y){
    return x+y;
}

function loaddata(data){
    return console.log("color is"+data());
};

loaddata(function(){
    return "red";});


function forseven(love){
    return console.log("JS gives back" + love()+ " love");
};

forseven(function(){
    return "lots of";
});
