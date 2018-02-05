$(document).ready(function() {
    $('form').submit(function(){
     var api_key = '0b8c0f3cc96cd15e18ea3ec74528fcb8';
     var city = $('input:text[name=city]').val();
     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + api_key, function(res){
         var html_str = '';
         html_str += "<p>" + res['name'] + ": " + res['weather'][0]['description'] + "</p>";
         html_str += "<p>" + "Temperature: " + res['main']['temp'] + " F</p>";
         $('#results').html(html_str);
     }, 'jsonp');
     return false;
    })
 });