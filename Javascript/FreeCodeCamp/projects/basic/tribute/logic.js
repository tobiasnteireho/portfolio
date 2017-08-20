$(this).ready(function(){
  //$("img").addClass("animated fadeIn");//fadeIn("slow", function(){});
  $("#FM").hover(function(){
    $("#glyph").append(document.createTextNode("yup"));},
 function(){ $("#glyph").children().remove();});
   /*$("#glyph").append(document.createTextNode("nope"));*/
  
   //$("#glyph").append(document.createTextNode("yup"));
  
 });
