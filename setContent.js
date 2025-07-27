$("document").ready(function(){
    $("#setContent").click(function (e) {
        // let href = $(this).attr("href","https://www.outlook.com");
        // let color = $(this).attr("style","color:blue");
        // // alert(href);

        // e.preventDefault();

        let atrr= $(this).attr({
            href:"https://www.outlook.com",
            style:"color:blue"
        })
    });
})