$("dcoument").ready(function () {
    $("#replace").click(function () {
        $("#replacing").replaceWith("<h1>Replaced</h1>");
    });

    $("#all").click(function () {
        $(`<p id = "replacing2" class ="rp">This is replacable3</p>`).replaceAll("<h1>Replaced2</h1>");
    });
})