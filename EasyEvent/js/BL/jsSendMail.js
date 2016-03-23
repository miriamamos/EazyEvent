$(function () {
    $("#send").click(function () {
       sendMail();
    });
    function sendMail() {
        debugger;
        $.ajax({
            type: 'SET',
            url: 'https://medium.com/m/callback/email?token=79b16a877962',
            data: {
                'key': '79b16a877962',
                'message': {
                    'from_email': 'miriamba99@gmail.com',
                    'to': [
                        {
                            'email': 'miriamba99@gmail.com',
                            //'name': 'RECIPIENT NAME (OPTIONAL)',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': 'YOUR SUBJECT HERE!',
                    'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
                }
            }
        }).done(function (response) {
            console.log(response); // if you're into that sorta thing
        });
    }
});



