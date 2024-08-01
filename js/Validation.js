// staff login validashon
$(document).ready(function(){
    $("#stafflogin").validate({
        rules:{
            staffusername:{
                required:true,
                email:true
            },
            staffpassword:{
                required:true,
                minlength:8
            }
        },
        messages:{
            staffusername:{
                required:"Please enter your username",
                email:"Please enter a valid email address"
            },
            staffpassword:{
                required:"Please enter your password",
                minlength:"Your password must be at least 8 characters long"       
            }
        }
    });
});

// staff register validashon
$(document).ready(function(){
    $("#Register").validate({
        rules:{
            fullname : {
                required: true,
                minlength: 5,
                maxlength: 26,
            },
            phoneno : {
                required: true,
                minlength: 10,
                maxlength : 10,
            },
            useremail : {
                required: true,
                email: true,
            },
            designation : {
                required : true,
            },
            Gender : {
                required : true,
            },

        },
        messages:{
            fullname : {
                required: "Please enter your name",
                minlength: "Your name must be at least 5 characters long",
                maxlength: "Your name must be at most 26 characters long",
            },
            phoneno : {
                required: "Please enter your phone number",
                minlength: "Your phone number must be at least 10 characters long",
                maxlength: "Your phone number must be at most 10 characters long",
            },
            useremail : {
                required: "Please enter your email",
                email: "Please enter a valid email address",
            },
            designation : {
                required: "Please enter your designation",
            },
            Gender : {
                required: "Please select your gender",
            },
        }
    })
});

// user register
$(document).ready(function(){
    $("#userregister").validate({
        rules: {
            fullname: {
                required: true,
                minlength: 5,
                maxlength: 20,
                number:false,

            },
            nuphoenumber: {
                required: false,
                maxlength: 10,
                minlength: 10,
            },
            useremail: {
                required: false,
                email: true,

            },
            Gender: {
                required: true,
            }
        },
        messages : {
            fullname: {
                required: "Please enter your name",
                minlength: "Your name must be at least 5 characters long",
                maxlength: "Your name must be at most 20 characters long",
            },
            nuphoenumber: {
                required: "Please enter your phone number",
                maxlength: "Your phone number must be at most 10 characters long",
                minlength: "Your phone number must be at least 10 characters long",
            },
            useremail: {
                required: "Please enter your email",
                email: "Please enter a valid email address",
            },
            Gender: {
                required: "Please select your gender",
            }
        }, 
    });
});

// Existing user Validation

/* phone number*/
$(document).ready(function(){
    $("#findnumber").validate({
        rules :{
            phonenumber : {
                required: true,
                minlength: 10,
                maxlength : 10,
                number: true,
                digits: true,
            }

        },
        messages:{
            phonenumber:{
                required: "Please enter your phone number",
                minlength: "Your phone number must be at least 10 characters long",
                maxlength: "Your phone number must be at most 10 characters long",
                number: "Please enter a valid phone number",
                digits: "Please enter a valid phone number",
            }
        }
    })
});

/* email */
$(document).ready(function(){
    $("#findemail").validate({
        rules : {
            useremail :{
                required: true,
                email: true,
            }
        },
        messages:{
            useremail:{
                required: "Please enter your email",
                email: "Please enter a valid email address",
            }
        }
    });
});

// admin login validashon
$(document).ready(function(){
    $("#stafflogin").validate({
        rules:{
            staffpassword : {
                required: true,
                email: true,
            },
            staffpassword : {
                required : true,
                minlength: 8,
            },
        },
        messages:{
            staffpassword : {
                required: "Please enter your email",
                email: "Please enter a valid email",
            },
            staffpassword : {
                required : "Please enter your password",
                minlength: "Your password must be at least 8 characters long",
            },
        }

    })
});

// add staff validashon
$(document).ready(function(){
    $("#Register").validate({
        rules:{
            fullname : {
                required: true,
                minlength: 5,
                maxlength: 26,
            },
            phoneno : {
                required: true,
                minlength: 10,
                maxlength : 10,
            },
            useremail : {
                required: true,
                email: true,
            },
            designation : {
                required : true,
            },
            staffpass : {
                required: true,
                minlength: 8,
                maxlength: 20,
            },
            Gender : {
                required : true,
            },

        },
        messages:{
            fullname : {
                required: "Please enter your name",
                minlength: "Your name must be at least 5 characters long",
                maxlength: "Your name must be at most 26 characters long",
            },
            phoneno : {
                required: "Please enter your phone number",
                minlength: "Your phone number must be at least 10 characters long",
                maxlength: "Your phone number must be at most 10 characters long",
            },
            useremail : {
                required: "Please enter your email",
                email: "Please enter a valid email address",
            },
            designation : {
                required: "Please enter your designation",
            },
            staffpass : {
                required: "Please enter your password",
                minlength: "Your password must be at least 8 characters long",
            },
            Gender : {
                required: "Please select your gender",
            },
        }
    })
});