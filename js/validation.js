$(function() {
    $("form[name='validation']").validate({
        rules: {
            name: "required",

            email: {
                required: true,
                email: true
            },

            subject: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },

        messages: {
            name: "Please enter your name",
            email: {
                required: "Please porvide an email address",
                email: "email must include an @ symbol"
            },
            email: {
                required: "please enter an email",
                email: "email must include an @ symbol"
            },
            subject: "Please enter a subject",
            phone: "Please enter a phone number",
        },
        submitHandler: function(form) {
            form.submit();
        }
    })
})

