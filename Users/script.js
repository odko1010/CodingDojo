$(document).ready(function(){ 
    $("#button").click(function(){
        $("#list tbody:last").append("<tr></tr>");
        $("#list tr:last").append("<td>"+document.getElementById("firstname").value+"</td>");
        $("#list tr:last").append("<td>"+document.getElementById("lastname").value+"</td>");
        $("#list tr:last").append("<td>"+document.getElementById("email").value+"</td>");
        $("#list tr:last").append("<td>"+document.getElementById("phone").value+"</td>"); 
    });
});    