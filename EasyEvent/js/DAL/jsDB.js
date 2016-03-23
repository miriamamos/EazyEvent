//מחיקה הוספה מהמסד נתונים  $
$(function () {
    //שליפת נתונים לפי שם משתמש וסיסמה
    function getDataUserAjax(name, pass) {
        var data;
        $.ajax({
            type: "POST",
            url: "http://vehupili-001-site1.smarterasp.net/Kitchen/data/image/GetById",
            crossDomain: false,
            data: JSON.stringify({ name: name, pass: pass }),
            contentType: 'application/json',
            success: function (data) {
                data = data.url;



            },
            error: function (data) {

            },
            complete: function (data) { }
        });
    };
    //שמירת אירוע
    function saveDataEventAjax(nameEvent, typeEvent, place, addres, date) {
        var data;
        $.ajax({
            type: "SET",
            url: "http://vehupili-001-site1.smarterasp.net/Kitchen/data/image/GetById",
            crossDomain: false,
            data: JSON.stringify({ nameEvent: nameEvent, typeEvent: typeEvent, place: place, addres: addres, date: date }),
            contentType: 'application/json',
            success: function (data) {
                data = data.url;
            },
            error: function (data) {

            },
            complete: function (data) { }
        });
    };
    //שמירת מוזמנים לאירוע
    //שמירת מערך המוזמנים
    function saveDataInvitedAjax(arrInvited) {
        var data;
        $.ajax({
            type: "SET",
            url: "http://vehupili-001-site1.smarterasp.net/Kitchen/data/image/GetById",
            crossDomain: false,
            data: JSON.stringify({ arrInvited: arrInvited }),
            contentType: 'application/json',
            success: function (data) {
                data = data.url;
            },
            error: function (data) {

            },
            complete: function (data) { }
        });
    };
});

