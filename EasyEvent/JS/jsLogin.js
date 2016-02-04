﻿var ERRORTEXT = "יש למלא את כל הנתונים";
var ERRORTEXTPASSWORD = "סיסמה אמורה להכיל 8 תווים מינימום ושני סוגי תווים שונים";
$(function () {

    //כניסה לאתר
    $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
        //הורדת כל הקלאסים של שגיאות
        $('.msgError').hide();
        $('.signIn , .signInReg').each(function () {
            $(this).removeClass('error-style').val('');
        });
    });
    //הירשמות לאתר
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
        //הורדת כל הקלאסים של שגיאות
        $('.msgError').hide();
        $('.signIn , .signInReg').each(function () {
            $(this).removeClass('error-style').val('');
        });
    });


    //לחיצה על  כפתור כניסת משתמש קיים
    $("#login-submit").click(function () {
        //בדיקת הכנסת  שם משתמש וסיסמה
        checkLogin();
    });

    //לחיצה על  כפתור הירשמות לאתר
    $("#register-submit").click(function () {
        //בדיקת הכנסת  שם משתמש וסיסמה
        checkRegister();
    });

    // בעת כניסה לאתר- בדיקת הכנסת  שם משתמש וסיסמה
    function checkLogin() {
        debugger;
        //בדיקת הכנסת  שם משתמש וסיסמה
        if ((($('#username').val() != '') & ($('#password').val() != ''))) {
            $('.msgError').hide();
            $('.signIn , .signInReg').each(function () {
                $(this).removeClass('error-style').val('');
            });
            //בדיקה האם קיים המשתמש
            ////////////שליחה למסד נתונים האם קיים
            //checkHasUser()

            //............................................
            if (true) {
                //המשתמש קיים
                $('.signIn').each(function () {
                    $(this).removeClass('error-style');
                });
                $('.msgError').hide();
            }
            else {
                //השם משתמש או הסיסמה אינם קיימים
                $('.fillUsernameAndPassword').removeClass('noneError');
                $('.fillUsernameAndPassword').show();
            }
        }
        else {
            //אם השם משתמש או הסיסמה ריקים
            $('.signIn').each(function () {
                if (!($(this).val())) {
                    $(this).addClass('error-style');
                }
                else {
                    $(this).removeClass('error-style');
                }
            });
            //אם המשתמש ריק
            if (!($('#username').val())) {
                $('.fillUsername').removeClass('noneError');
                $('.fillUsername').show();
            }
            else {
                $('.fillUsername').addClass('noneError');
            }
            //אם הסיסמה ריקה
            if (!($('#password').val())) {
                $('.fillPassword').removeClass('noneError');
                $('.fillPassword').show();
            }
            else {
                $('.fillPassword').addClass('noneError');
            }
        }
    }

    //בעת הירשמות לאתר -בדיקת הכנסת  שם משתמש וסיסמה
    function checkRegister() {
        //מלאים input -האם כל ה
        if (myValidation()) {
            $('.msgError').hide();
            $('.signIn , .signInReg').each(function () {
                $(this).removeClass('error-style').val('');
            });
            //פונקצית שליחת שם משתמש וסיסמה
            //sendRegister();
        } else {
            //ריק input לכל ERROR השמת קלאס  
            $('.signInReg').each(function () {
                if (!($(this).val())) {
                    $(this).addClass('error-style');
                }
                else {
                    $(this).removeClass('error-style');
                }
            });
            //אם שם המשתמש ריק
            if (!($('#usernameReg').val())) {

                $('.fillUsername').removeClass('noneError');
                $('.fillUsername').show();
            }
            else {
                $('.fillUsername').addClass('noneError');
            }
            //אם המייל ריק
            if (!($('#emailReg').val())) {
                //debugger;
                $('.errorEmailIncorrect').addClass('noneError');
                $('.fillEmail').removeClass('noneError');
                $('.fillEmail').show();
            }
                //בדיקת תקינות EMAIL   
            else if (!(validateEmail($('#emailReg').val()))) {
                //debugger;
                $('.fillEmail').addClass('noneError');
                $('.errorEmailIncorrect').removeClass('noneError');
                $('.errorEmailIncorrect').show();
                $('#emailReg').addClass('error-style');
            }
            else {
                $('.errorEmailIncorrect').addClass('noneError');
                $('.fillEmail').addClass('noneError');
            }

            //אם הסיסמה ריקה
            if (!($('#passwordReg').val())) {
                //debugger;
                $('.weakPassword').addClass('noneError');
                $('.fillPassword').removeClass('noneError');
                $('.fillPassword').show();
            }
            else if (!($('#result').hasClass('good') || $('#result').hasClass('strong'))) {
                //debugger;
                $('.fillPassword').addClass('noneError');
                $('.weakPassword').removeClass('noneError');
                $('.weakPassword').show();
            }
            else {
                $('.fillPassword').addClass('noneError');
                $('.weakPassword').addClass('noneError');
            }

            //אם אימות הסיסמה ריקה
            if (!($('#confirm-passwordReg').val())) {
                debugger;
                $('.NotPasswordsEqaul').addClass('noneError');
                $('.fillPasswordAgain').removeClass('noneError');
                $('.fillPasswordAgain').show();
            }
            else if ($('#passwordReg').val() != $('#confirm-passwordReg').val()) {
                $('.fillPasswordAgain').addClass('noneError');
                $('.NotPasswordsEqaul').removeClass('noneError');
                $('.NotPasswordsEqaul').show();
            }
            else {
                $('.fillPasswordAgain').addClass('noneError');
                $('.NotPasswordsEqaul').addClass('noneError');
            }

        }
    }

    //מלאים input -האם כל ה
    function myValidation() {
        debugger
        var allGood = true;
        $(".signInReg").each(function () {
            if (!($(this).val())) {
                allGood = false;
                }
        });
        return allGood;
    }



    //בדיקת אימות הסיסמה
    $('#passwordReg').keyup(function () {
        $('#result').html(checkStrength($('#passwordReg').val()))
    })


    //בדיקת email חוקי

    function validateEmail($email) {
        debugger;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    //בדיקת password חזק
    function checkStrength(password) {

        //initial strength
        var strength = 0

        //if the password length is less than 6, return message.
        if (password.length < 6) {
            $('#result').removeClass()
            $('#result').addClass('short')
            return 'Too short'
        }

        //length is ok, lets continue.

        //if length is 8 characters or more, increase strength value
        if (password.length > 7) strength += 1

        //if password contains both lower and uppercase characters, increase strength value
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1

        //if it has numbers and characters, increase strength value
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1

        //if it has one special character, increase strength value
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

        //if it has two special characters, increase strength value
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

        //now we have calculated strength value, we can return messages

        //if value is less than 2
        if (strength < 2) {
            $('#result').removeClass()
            $('#result').addClass('weak')

            return 'Weak'
        }
        else if (strength == 2) {
            $('#result').removeClass()
            $('#result').addClass('good')
            return 'Good'
        }
        else {
            $('#result').removeClass()
            $('#result').addClass('strong')
            return 'Strong'
        }
    }


});