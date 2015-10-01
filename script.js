
$.getJSON("https://loopback-rest-api-workshop-nk1tz.c9.io/api/AddressBooks",
function(data) {
    console.log(data);
    var addressBookNames = data.map( function (ele, ind){
        return ele.name; 
    });
    for(var i in addressBookNames){
        $("div").append("<p>"+addressBookNames[i]+"</p>");
    }
   
})