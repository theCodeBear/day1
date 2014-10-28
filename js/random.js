$(function(){


// Handle Enter press on add item input field
    $("input[name=value_to_add]").on("keypress", function (e) {
        if (e.keyCode == 13) {    // 13 is the Enter key
            var $this = $(this);
            var newItem = $this.val();
            if (newItem != "") {
                $("ul").append($("<li>").text(newItem));    // can create an html tag in jQuery using $("<tag>")
            }
            $this.val("");
        }
    });

// Handle Pick Random Item button click event
    $("#randomize").on("click", function() {
        var itemList = $("li");
        var randomIndex = Math.floor(Math.random() * (itemList.length));
        var randomItem = itemList[randomIndex];

        //debugger;       // debugger stops the program here so that you can debug the program
        $("#selected_random").text($(randomItem).text());   // wrap randomItem with jQuery selector
    });


});

