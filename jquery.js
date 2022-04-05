//Document is ready
$(document).ready(function () {
    //function that will fire when submit <button> is clicked
    $("#submit").on("click", function () {
        // $('#submit').click(function(){
        //make sure function loaded after the DOM???
        //inside the function
        //create variables for each of the form inputs
        var name = $("#name");
        var email = $("#email");
        var number = $("#phone");
        var message = $("#message");
        var required = [name, email, number];
        
        for (let i = 0; i < required.length; i++) {
            if (required[i].val() === "") {
                required[i].prev().addClass("warning"); //.prev() to get <label>
                message.html("Please Fill Out Required Fields").addClass("warning"); //puts the message in <p>
            } else {
                required[i].prev().removeClass("warning");
                message.removeClass("warning");
            }
        }
            if (!$("label").hasClass("warning")){
                $("#form").remove();
                $("h2").html("Thanks for your feedback!");

            }
    })
})
