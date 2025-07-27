$("document").ready(function () {
    $("#content").click(function () {
        var content = $("#p6").html(); // gives the text along with html tags
        alert(content);
    });

    $("#content").contextmenu(function () {
        var content = $("#p6").text(); // gives the text without html tags
        alert(content);
    });

    $("#getText").mouseenter(function () {
        let context = $("#textBox").val();
        alert(context);
    });

    $("#selectGender").click(function () {
        let gender = $("input[name='gender']:checked").val();
        alert(`Gender selected is ${gender}`);
    });

    $("#google").click(function () {
        let href = $(this).attr("href");
        alert(href);
    });
})