
$(function () {
    debugger;
   
    //var signIn;
    loadData();
    
    //$('.signIn').text(signIn.user);
    //insert(account.User,account.Pass)
    //מעבר לדפים
    $('a').click(function () {
        var operation = $(this).attr('id');
        //checkPassword()
        debugger;
        //var StringName = 'html/' + operation + '.html'.toString();
        goToForm(operation)
        //$("#viewPage").load(StringName);
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
               
                $("#viewPage").replaceWith($("#ReMakeEvent"));
                $("#ReMakeEvent").show();
                $("#ReManageEvent").hide();
                $("#ReViewEvent").hide();
                    break;
                //ניהול אירוע עם הבאת נתונים
            }
            case "ManageEvent": {
                $("#ReManageEvent").show();
                $("#ReMakeEvent").hide();
                $("#ReViewEvent").hide();
                $("#viewPage").replaceWith($("#ReManageEvent"));
                 break;
            }
            case "viewEvent": {
                $("#ReViewEvent").show();
                $("#ReManageEvent").hide();
                $("#ReMakeEvent").hide();
                $("#viewPage").replaceWith($("#ReViewEvent"));
                 break;
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
        newUser(account.User, account.Pass);
        //do what you need with the Object
        signIn = account;
        $('.signIn').text(signIn.User);
        //insert(account.User, account.Pass);
       
        return true;
    }
});


//function sendHome(user, password) {
//    debugger;
//    sign= user;
//    $('.signIn').val(user);
//    $('.signIn').text(user);
//}



function loadData() {
    var account = localStorage.getItem('_account');
    if (!account) return false;
    localStorage.removeItem('_account');
    //decodes a string data encoded using base-64
    account = atob(account);
    //parses to Object the JSON string
    account = JSON.parse(account);
    //do what you need with the Object
    //fillFields(account.User, account.Pass);
   $('.signIn').text(signIn.User);
    return true;
}



