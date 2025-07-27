$("document").ready(function(){
    $("#btn").click(function clicked(){
        // $("#p1").css("color","red"); // id selector
        // $("#p2").css("color","yellow");

        $("p").css("color","green"); // tag selector
        $(".ps").css("color","blue"); // class selector


        $("*").css("color","red"); // universal selector

        $("ul li").css("color","blue"); // child selector for all ul, li applied

        $("#list1 li").css("color","green"); // child selector for list ul, li applied
         $("#list2 li").css("color","pink");

         $(".ps1, .ps2").css("color","violet"); // multiple class selectors

         $("h1, p").css("color","yellow"); // multiple tags0

         $("#list1 li:first").css("color","brown") // first node pick

         $("#list1 li:last").css("color","brown") // last node pick

         $("#list1 li:even").css("color","gray") // even node pick
         $("#list1 li:odd").css("color","orange") // odd node pick

         $("#list1 li:nth-child(2)").css("color","red") // nth-child

         $("#list1 li:eq(3)").css("color","green") // eq()
         $("#list1 li:lt(2)").css("color","blue") // less than()
         $("#list1 li:gt(1)").css("color","indigo") // greater than()


    });
});

// function clicked(){ // for onClick to wpork make the function globally
//     $("#p1").css("color","orange");
//     $("#p2").css("color","violet");
// }