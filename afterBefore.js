$("document").ready(function(){
    $("#div3").mouseenter(function(){
        $("#div3").after("<p> This is a new paragaraph after </p>"); // similar to append prepend but adds the element after the targeted element
        $("#div3").before("<p> This is a new paragaraph before</p>"); 
    })
})