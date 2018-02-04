 $(document).ready(function(){
            $('#click').click(function(){
                alert("Click Success");
                })
            $("#hide").click(function() {
                $("#picture").hide("fast")                  
                });              
            $("#show").click(function() {
                $("#picture").show("fast")
                });
            $("#toggle").click(function() {
                $("#picture").toggle("slow");
                });
            $("#slidedown").click(function () {
                ( $( "#picture" ).is(":hidden") ) 
                  $("#picture").slideDown("slow");                
                });
            $("#slideup").click(function () {                
                  $("#picture").slideUp("slow");                
                });
            $("#slidetoggle").click(function () {                
                $("#picture").slideToggle("fast");                
                });
            $( "#fadein" ).click(function() {
                $( "#div" ).fadeIn(3000, function() {
                $( "span" ).fadeIn(100);
                });
                    return false;
                });    
            $("#fadeout").click(function() {
                $("#div").fadeOut(3000, function() {
                $("span").fadeOut(100);
                });
                        return false;
                });        
            $("#addclass").click(function () {                
                $("h1").addClass("header");                 
                });
            $("#before").click(function () {                
                $( "p" ).before( $("<b>Before text</b>") );                
                });
            $("#after").click(function () {                
                $( "p" ).after( $("<b>After text</b>") );                
                });
            $("#append").click(function(){
                $("p").append("<b>Appended text</b>");
                });
            $("#html").click(function(){
                $("h1").html("<b>Wow!</b> Such excitement...");
                $( "div b" )
                .append(document.createTextNode( "!!!" ) )
                .css("color", "red");
            });
            $("#attr").click(function(){
                var title = $( "img" ).attr( "title" );
                $( "p" ).text( title );
            });
            $( "#val" ).click(function() {
                $("#div2").slideToggle("fast");
                $( "input" )
                .keyup(function() {
                  var value = $( this ).val();
                  $( "p" ).text( value );
                })
                .keyup();                
                });
            $("#text").click(function(){                
                    $( "h1" ).text( "TEXT TEXT TEXT" );
            });         
            }); //end
        