/// <reference path="jsHome.js" />
/// <reference path="oop.js" />
//יצירת מופעים
debugger;
//יצירת שם משתמש וסיסמה
function newUser(name, pass) {
    updateSignIn(name, pass);
}
//יצירת אירוע
function newEvent(nameEvent, typeEvent, place, addres, date) {
    arrSignIn[0].updateMakeEvent(nameEvent, typeEvent, place, addres, date);
}
//יצירת מוזמן לאירוע
//צריך לבדוק לפני כן האם יש לו אירועים קריאה לפונצקיה הזאת גם בעת  צפיה ויצירה של האירוע 
function newInvited(invited, mail, Coming, namrEvent) {
    for (var i = 0; i < arrSignIn[0].arrMakeEvent.length; i++) {
        if (arrSignIn[0].arrMakeEvent[i].nameEvent == namrEvent) {
            arrSignIn[0].arrMakeEvent[i].updatInvited(invited, mail, Coming);
        }
        //שמירת מערך האירוע
    }
}
