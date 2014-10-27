$(function(){

    var button = $("button");
    console.log(button);


    button.on("click", function() {
        console.log("button was just clicked");
        var newItem = $("input").val();
        if (newItem != "") {
            $("ul").append($("<li>").text(newItem));    // can create an html tag in jQuery using $("<tag>")
        }
    });

});

