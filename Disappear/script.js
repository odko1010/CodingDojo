$(document).ready(function(){
    $('button').click(function(){
        $('img').fadeTo(1000, 1);
    });
    $('img').click(function(){
        $(this).fadeTo(1000, 0.005);
    });
});
