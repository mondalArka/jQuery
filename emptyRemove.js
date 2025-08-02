$("document").ready(function () {
    $("#toEmpty").click(function () {
        $("#emptyit").empty(); // to empty the contents of the div
    });

    $("#remove").click(function () {
        // $("#emptyit").remove(); // to remove the div itself
        $("h4").remove("#removing2, #removing"); // remove a particular element
    });
})