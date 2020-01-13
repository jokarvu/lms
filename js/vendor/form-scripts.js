$("#contactForm").validator().on("submit", function (event) {

    if (event.isDefaultPrevented()) {

        formError();
        submitMSG(false, "Did you fill in the form properly?");

    } else {

        event.preventDefault();
        submitForm();

    }

});

function submitForm(){

    // Initiate Variables With Form Content
    var name = $("#p_name").val();
    var email = $("#p_email").val();
    var subject = $("#p_subject").val();
    var message = $("#p_message").val();
    var phone_number = $('#p_phone').val();
    $.ajax({

        type: "POST",
        url: "php/form-process.php",
        data: {
            email_address: email,
            username: name,
            subject: subject,
            message: message,
            phone_number: phone_number
        },
        success : function(text){
            formSuccess();
        }
    });

}

function formSuccess(){

    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")

}

function formError(){

    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });

}

function submitMSG(valid, msg){

    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#success").removeClass().addClass(msgClasses).text(msg);

}