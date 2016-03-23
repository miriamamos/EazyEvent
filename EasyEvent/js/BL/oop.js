debugger;

var  arrSignIn = [];
var USER = {
     //זהות משתמש
    User: function (userName, password) {
        this.userName = userName;
        this.password = password;
        this.arrMakeEvent = [];
    },
    //פרטי אירוע
    Event: function (nameEvent, typeEvent, place, addres, date) {
        this.nameEvent = nameEvent;
        this.typeEvent = typeEvent;
        this.place = place;
        this.addres = addres;
        this.date = date;
        this.arrInvited = [];
    },
    //מוזמנים לאירוע
    Invited: function (invited, mail, isComing) {
        this.invited = invited;
        this.mail = mail;
        this.Coming = Coming;
        this.randomUrl = stringRandom();
    },

};

//הוספת משתמש
function updateSignIn(user, password) {
    arrSignIn.push(new USER.User(user, password));
}
//USER. 
// //הוספת פרטי אירוע
USER.User.prototype.updateMakeEvent = function updateMakeEvent(nameEvent, typeEvent, place, addres, date) {
    debugger;
    this.arrMakeEvent.push(new USER.Event(nameEvent, typeEvent, place, addres, date));
    console.log(this);
}

// //הוספת מוזמן לאירוע
USER.Event.prototype.updatInvited = function updatInvited(invited, mail, Coming) {
    debugger;
    this.arrInvited.push(new USER.Invited(invited, mail, Coming));
    console.log(this);
}
//////פונקציה שמעדכנת אישור הגעה לאירוע
USER.Invited.prototype.updateComing = function updateComing(Coming) {
    debugger;
    this.Coming = true;
    console.log(this);
}
//פונקציה ליצירת רשימה אקראית
function stringRandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

updateSignIn('miriam', '312456');
updateSignIn('ayelet', '456789');
arrSignIn[0].updateMakeEvent('חתונה שלמה ולאה', 'חתונה', 'אולמי נוף', 'עוזיאל 31', '12/12/16');
arrSignIn[0].updateMakeEvent('חתונה שרון ולאה', 'חתונה', 'אולמי נוף', 'עוזיאל 31', '12/12/16');
arrSignIn[1].updateMakeEvent('שלמה', 'בר מצווה', 'ארטימסיה', 'פרנק 54', '12/12/16');
arrSignIn[0].arrMakeEvent[0].updatInvited('ayelet', 'ayelet@gmail.com', false);
arrSignIn[1].arrMakeEvent[0].updatInvited('miriam', 'miriam@gmail.com', false);
arrSignIn[1].updateMakeEvent('יהודה', 'בר מצווה', 'אולמי וולף', 'פרנק 54', '12/12/16');
