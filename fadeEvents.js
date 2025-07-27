$("document").ready(function () {
    $("#fadeIns").click(function () {
        $("#div1").fadeIn(3000,function(){
            alert("Fade In Completed");
        });
    });

    $("#fadeOuts").click(function () {
        $("#div1").fadeOut();
    });

    $("#toggleFade").click(function(){
        $("#div1").fadeToggle(3000,function(){
            alert("Fade Toggle Completed");
        });
    })

    $("#fadeTo").click(function(){
        $("#div2").fadeTo(3000,0.5);
    })
})