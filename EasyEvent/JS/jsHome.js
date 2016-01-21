/// <reference path="../html/MakeEvent.html" />
/// <reference path="../html/CheckParticipation.html" />
/// <reference path="../html/ManagementEvent.html" />
/// <reference path="../html/MakeEvent.html" />
/// <reference path="../html/CheckParticipation.html" />
/// <reference path="../html/MakeEvent.html" />



$(function () {
    //מעבר לדפים
    $('a').click(function () {
        var operation = $(this).attr('id');
        checkPassword()
        debugger;
        //var StringName = window.location + 'html/' + operation + '.html'.toString();
        goToForm(operation)
        //this.href.replace(window.location, operation + '.html'.toString());
        $("#viewPage").append(window.location, operation + '.html'.toString());
        //$("#viewPage").load(StringName);
        $('footer').attr('style', 'display: block !important');

    });

    //חזרה לדף ראשי
    $("#btnReturn").click(function () {
        window.location.href = "Home.html"
    });

    //בדיקת שם משתמש וסיסמה
    function checkPassword() {          
    }

    //בדיקת הכנסת  שם משתמש וסיסמה
    $('.checkPassword').click(function () {
        checkSign();
    })

    //בדיקת הכנסת  שם משתמש וסיסמה
    function checkSign() {
        //בדיקה על אימות שם משתמש וסיסמה
        //בדיקה האם קיימת הסיסמה למשתמש חדש
        //בדיקה כאשר מכניס משתמש קיים
    }

    //מעבר לדפים   
    function goToForm(operation) {
        //switch (switch_on) {
        //    default:

        //}
        //לאיזה דף מועבר

        //יצירת אירוע ישר מעבר
         
        //ניהול אירוע עם הבאת נתונים

        //הצגת אירוע??????
       //בדיקות תקינות
    }
});


