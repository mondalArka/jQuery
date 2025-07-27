$("document").ready(function(){
    $("#append").mouseenter(function(){
        let append = `<p> This is a new paragaraph append</p>`;
        $("#append").append(append);

        $("#append").prepend(`<p> This is a new paragaraph prepend</p>`)
    })
})