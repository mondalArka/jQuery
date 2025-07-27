$("document").ready(function () {
    // $("#hide").click(function () { // may or may not take 2 argument speed,callback
    //     $("#hideH").hide(); // for hiding only
    //     $("#showH").hide();
    // });

    $("#show").click(function () {
        $("#hideH").show(); // for show only
        $("#showH").show();
    });

    $("#toggle").click(function () {
        $("#hideH").toggle(); // used for single button hide show also takes 2 arguments speed and callback
        $("#showH").toggle("3000",function(){ // can take speed like fast slow or milliseconds and a callback
            alert("Toggle completed");
        });
    });

    $("#hide").click(function () {
        $("h4").hide(3000,function(){ // can take speed like fast slow or milliseconds and a callback
            alert("Hide completed");
        })
    })
});