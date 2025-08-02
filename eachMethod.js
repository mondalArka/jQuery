$("document").ready(function(){
    $("#eachMethod").click(function(){
    $("h1").each(function(index,element){
       alert(`Index is ${index} and text is ${$(this).text()}`);
    })
})
})