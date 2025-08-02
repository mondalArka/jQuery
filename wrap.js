$("document").ready(function(){
    $("#wrap").click(function(){
        $("#wrapping").wrap("<div id='wrapper'></div>");
    })

    $("#unwrap").click(function(){
        $("#wrapping").unwrap();
    })

    $("#wrapAll").click(function(){
        $("span").wrapAll("<div id='wrapper'></div>");
    })

    $("#wrapInner").click(function(){
        $("#wrapping").wrapInner("<b></b>"); // inside the element
    })
})