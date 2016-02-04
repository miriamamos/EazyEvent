
$(function () {
   

    //מעבר לדפים
    $('a').click(function () {
        var operation = $(this).attr('id');
        checkPassword()
        debugger;
        var StringName = 'html/' + operation + '.html'.toString();
        goToForm(operation)
        $("#viewPage").load(StringName);
        $('footer').attr('style', 'display: block !important');

    });
 

    //חזרה לדף ראשי
    $("#btnReturn").click(function () {
        window.location.href = "Home.html"
    });


    //מעבר לדפים   
    function goToForm(operation) {
        //לאיזה דף מועבר

        //יצירת אירוע ישר מעבר

        //ניהול אירוע עם הבאת נתונים

        //הצגת אירוע
        //בדיקות תקינות
        switch (operation) {
            case "MakeEvent": {
                //ניהול אירוע עם הבאת נתונים
            }
            case "ManagetEvent": {
            }
            case "viewEvent": {
            }
            default:

        }

    }


  
});


