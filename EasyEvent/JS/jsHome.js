﻿
$(function () {
    debugger;
    var signIn;
    loadData();
    $('.signIn').text(signIn.User);
    //$('.signIn').text(signIn.user);
    //insert(account.User,account.Pass)
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
 

    function loadData() {
        debugger;
        var account = location.search;
        if (!account) return false;
        account = account.substr(1);
        //gets the 'a' parameter from querystring
        var a = (/^a=/);
        account = account.split("&").filter(function (item) {
            return a.test(item);
        });
        if (!account.length) return false;
        //gets the first element 'a' matched
        account = account[0].replace("a=", "");
        account = atob(account);
        account = JSON.parse(account);
        //do what you need with the Object
        signIn = account;
        //insert(account.User, account.Pass);
        return true;
    }
  
  
}); 
var sign
//function sendHome(user, password) {
//    debugger;
//    sign= user;
//    $('.signIn').val(user);
//    $('.signIn').text(user);
//}



//function loadData() {
//    var account = localStorage.getItem('_account');
//    if (!account) return false;
//    localStorage.removeItem('_account');
//    //decodes a string data encoded using base-64
//    account = atob(account);
//    //parses to Object the JSON string
//    account = JSON.parse(account);
//    //do what you need with the Object
//    //fillFields(account.User, account.Pass);
   
//    return true;
//}

//function saveData(user, pass) {
//    debugger;
//    var account = {
//        User: user,
//        Pass: pass
//    };
//    account = JSON.stringify(account);
//    account = btoa(account);
//    location.assign("Home.html?a=" + account);
//}


