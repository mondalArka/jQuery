$("document").ready(function(){
    $("#rightClick").contextmenu(function(){
        $("#select").css("color","blue");
    });
    $("#rightClick").dblclick(function(){
        $("#select").css("color","red");
        $("#select").text("Double Click");
    });
    $("#rightClick").mouseenter(function(){
        $("#select").css("color","green");
        $("#select").text("Mouse Enter");
    })

    $("#rightClick").mouseleave(function(){
        $("#select").css("color","black");
        $("#select").text("Hello select");
    });
    $("#rightClick").focus(function(){ // to focus
        $("#select").text("Focus");
    })

    $("#rightClick").blur(function(){ // to remove focus 
        $("#select").text("Blur");
    });

    $("#mulEvents").on({
        mouseenter: function(){
            $("#select2").text("Mouse Enter");
        },
        mouseleave: function(){
            $("#select2").text("Mouse Leave");
        },
        focus: function(){
            $("#select2").text("Focus");
        },
        blur: function(){
            $("#select2").text("Blur");
        }
    })
})