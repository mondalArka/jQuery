$("document").ready(function(){
    $("#select1").change(function(){
        alert($(this).val());
    })

    $("#text2").select(function(){
        alert(`Text selected is ${$(this).val()}`); // for selecting text
    })

    $("#form1").submit(function(){
        alert("Form submitted");
    })
})