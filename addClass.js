$("document").ready(function(){
    $("span").mouseenter(function(){
        $("span , h1").addClass("sp1 sp2");
    })

    $("span").mouseleave(function(){
        $("span , h1").removeClass("sp1 sp2"); // if no parameter is specified then all classes will be removed
    })

    $("#toggleClass").click(function(){
        $("span").toggleClass("sp1 sp2");
    })
})