/// <reference path="../html/MakeEvent.html" />
/// <reference path="../html/CheckParticipation.html" />
/// <reference path="../html/ManagementEvent.html" />


       $(function () {
           $('a').click(function () {
               debugger;
                var operation = $(this).attr('id');
                var StringName = operation.toString() + ".html".toString();
                $("#viewPage").load(StringName);
                $('footer').attr('style', 'display: block !important');

            });
            $("#btnReturn").click(function () {
                window.location.href = "Home.html"
            });
        });
 

