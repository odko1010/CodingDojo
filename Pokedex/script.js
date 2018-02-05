$(document).ready(function() {
    for (var i = 1; i < 151; i++) {
        $('#pokemon').append("<img id='" + i + "'class='pokemon' src='https://pokeapi.co/media/img/" + i + ".png'/>");
    }
    $('.pokemon').click(function(){
        var id = this.id
        $.get('http://pokeapi.salestock.net/api/v2/pokemon/' + id, function(res) {
            var html_str = "";
            html_str += "<img id='" + id + "'class='pokemon' src='https://pokeapi.co/media/img/" + id + ".png'/>";
            html_str += "<h4>Name: " + res['name'] + "</h4>";
            html_str += "<h4>Height:</h4>";
            html_str += res['height'];
            html_str += "<h4>Weight</h4>";
            html_str += res['weight'];                   
            $('#pokedeck').html(html_str)
            $('html, body').animate({scrollTop: 0}, 600);
        });
    })
 });