new WOW().init();
$(document).ready(
    function(){
           $("#dot1").click(
               function(){
                     $("#main").hide();
                     $("#main2").show();
               }
          );

          $("#dot2").click(
               function(){
                    $("#main").show();
                    $("#main2").hide();
               }
          );
          $("#circle1").click(
               function(){
                    $("#main").hide();
                    $("#main2").show();
               }
          );

          $("#circle2").click(
               function(){
                    $("#main").show();
                    $("#main2").hide();
               }
          );
          $("#buttonShow").hover(
               function(){
                    $("#buttArrow").show();
               }
          );
          $("#buttonShow1").hover(
               function(){
                    $("#buttArrow1").show();
               }
          );
          $("#buttonShow1").mouseout(
               function(){
                    $("#buttArrow1").hide();
               }
          ); 
          $("#buttonShow").mouseout(
               function(){
                    $("#buttArrow").hide();
               }
          ); 
     });
window.onscroll = function() {
     if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
          document.getElementById("nav").style.backgroundColor = "rgba(17, 17, 17, 0.822)";
     }
     else{
          
          document.getElementById("nav").style.backgroundColor = " rgba(0, 0, 0, 0)";
     }
}
   
    

   

