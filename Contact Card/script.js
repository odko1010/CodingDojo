$(document).ready(function(){
    $(document).on('click', '.btn', function(){
        var firstName = $('input[name="first"]').val();
        var lastName = $('input[name="last"]').val();
        var description = $(document.getElementById("description")).val();
        $("#right").append('<div class="box"><div class="info"><h1>' + firstName + " " + lastName + '</h1><a href="#" class="more_info">Click to see description!</a></div><div class="description">' + description + '</div></div>');
        $("#form")[0].reset();
    });
});
$(document).on("click", ".more_info", function(){
    var box = $(this).parent().parent();
    box.find(".info").hide();
    box.find(".description").show();
});
