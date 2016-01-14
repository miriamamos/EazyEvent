
       $(function () {
            $('a').click(function () {
                var operation = $(this).attr('id');
                var StringName = operation.toString() + ".html".toString();
                $("#viewPage").load(StringName);
                $('footer').attr('style', 'display: block !important');

            });
            $("#btnReturn").click(function () {
                window.location.href = "Home.html"
            });
        });
 

