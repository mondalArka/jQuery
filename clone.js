$("document").ready(function(){
    $("#cloneIt").click(function(){
        $("#clone").clone().appendTo("#clone");
        $("#clone").clone().prependTo("#clone");
    })
})