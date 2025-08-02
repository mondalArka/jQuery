$(document).ready(function () {
    $(".select").click(function () {
    $("input[class='select']:checked").each(function(){
       $("#selected").append(`<p>${$(this).val()}</p>`)
    })
    })

    $(".rad").change(function(){
        $(this).each(function(){
            $("#selected").append(`<p>${$(this).val()}</p>`)
        })
    })
})                          