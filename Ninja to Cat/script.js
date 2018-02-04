$(document).ready(function(){
    $('img').click(function(){
        var attr = $(this).attr('alt');
        $(this).attr('src', attr);

    });
});
