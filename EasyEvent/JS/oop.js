debugger;
var USER = {
      arrSignIn: function arrSignIn() {
      arrSignIn = [];
   },
     //זהות משתמש
    User: function User(userName, password) {
        this.userName = userName;
        this.password = password;
        this.arrMakeEvent = [];
    },
      //פרטי אירוע
    Event: function Event(nameEvent, typeEvent, place, addres, date) {
        this.nameEvent = nameEvent;
        this.typeEvent = typeEvent;
        this.place = place;
        this.addres = addres;
        this.date = date;
        this.arrInvited = [];
    },
    //מוזמנים לאירוע
    Invited:function Invited(invited, mail, isComing) {
    this.invited = invited;
    this.mail = mail;
    this.Coming = Coming;
},

//הוספת משתמש
    updateSignIn: function updateSignIn(user, password) {
    debugger;
    arrSignIn.push(new SignIn(user, password));
    },

    //הוספת פרטי אירוע
    updateMakeEvent:  SignIn.prototype.updateMakeEvent = function updateMakeEvent(nameEvent, typeEvent, place, addres, date) {
        debugger;
        this.arrMakeEvent.push(new MakeEvent(nameEvent, typeEvent, place, addres, date));
        console.log(this);
    },

    //הוספת פרטי אירוע
    updateMakeEvent:SignIn.prototype.updateMakeEvent = function updateMakeEvent(nameEvent, typeEvent, place, addres, date) {
        debugger;
        this.arrMakeEvent.push(new MakeEvent(nameEvent, typeEvent, place, addres, date));
        console.log(this);
    },

    //הוספת מוזמן לאירוע
    updatInvited: MakeEvent.prototype.updatInvited = function updatInvited(invited, mail, Coming) {
        debugger;
        this.arrInvited.push(new Invited(invited, mail, Coming));
        console.log(this);
    },

    ////פונקציה שמעדכנת אישור הגעה לאירוע
    updateComing:   Invited.prototype.updateComing = function updateComing(Coming) {
        debugger;
        this.Coming = true;
        console.log(this);
    }
};




    //function myfunction() {
    
    //}



////הוספת פרטי אירוע
//SignIn.prototype.updateMakeEvent = function updateMakeEvent(nameEvent, typeEvent, place, addres, date) {
//    debugger;
//    this.arrMakeEvent.push(new MakeEvent(nameEvent, typeEvent, place, addres, date));
//    console.log(this);
//};
////הוספת מוזמן לאירוע
//MakeEvent.prototype.updatInvited = function updatInvited(invited, mail, Coming) {
//    debugger;
//    this.arrInvited.push(new Invited(invited, mail, Coming));
//    console.log(this);
//};
//////פונקציה שמעדכנת אישור הגעה לאירוע
//Invited.prototype.updateComing = function updateComing(Coming) {
//    debugger;
//    this.Coming = true;
//    console.log(this);
//};


updateSignIn('miriam', '312456');
updateSignIn('ayelet', '456789');
arrSignIn[0].updateMakeEvent('חתונה שלמה ולאה', 'חתונה', 'אולמי נוף', 'עוזיאל 31', '12/12/16');
arrSignIn[1].updateMakeEvent('שלמה', 'בר מצווה', 'ארטימסיה', 'פרנק 54', '12/12/16');
arrSignIn[0].arrMakeEvent[0].updatInvited('ayelet', 'ayelet@gmail.com', false);
arrSignIn[1].arrMakeEvent[0].updatInvited('miriam', 'miriam@gmail.com', false);
arrSignIn[1].updateMakeEvent('יהודה', 'בר מצווה', 'אולמי וולף', 'פרנק 54', '12/12/16');
