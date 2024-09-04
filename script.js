$(document).ready(function() {
   $("#11").click(function() {
       $("#11").addClass("selected");
       $("#12").removeClass("selected");
       $("#13").removeClass("selected");
       $("#14").removeClass("selected");
   });
   $("#12").click(function() {
       $("#11").removeClass("selected");
       $("#12").addClass("selected");
       $("#13").removeClass("selected");
       $("#14").removeClass("selected");
   });
   $("#13").click(function() {
       $("#11").removeClass("selected");
       $("#12").removeClass("selected");
       $("#13").addClass("selected");
       $("#14").removeClass("selected");
   });
   $("#14").click(function() {
       $("#11").removeClass("selected");
       $("#12").removeClass("selected");
       $("#13").removeClass("selected");
       $("#14").addClass("selected");
   });
   $("#submit1").click(function() {
       if($("#14").hasClass("selected")){
           $("#submit1").addClass("hidden");
           $("#wrong1").addClass("hidden");
           $("#correct1").removeClass("hidden");
           $("#continue1").removeClass("hidden");
       } else {
           $("#wrong1").removeClass("hidden");
       }
   });
   $("#continue1").click(function() {
       $("#11").addClass("hidden");
       $("#12").addClass("hidden");
       $("#13").addClass("hidden");
       $("#14").addClass("hidden");
       $("#correct1").addClass("hidden");
       $("#continue1").addClass("hidden");
       $("#q1").addClass("hidden");


       $("#q2").removeClass("hidden");
       $("#21").removeClass("hidden");
       $("#22").removeClass("hidden");
       $("#23").removeClass("hidden");
       $("#24").removeClass("hidden");
       $("#submit2").removeClass("hidden");
   });








   $("#21").click(function() {
       $("#21").addClass("selected");
       $("#22").removeClass("selected");
       $("#23").removeClass("selected");
       $("#24").removeClass("selected");
   });
   $("#22").click(function() {
       $("#21").removeClass("selected");
       $("#22").addClass("selected");
       $("#23").removeClass("selected");
       $("#24").removeClass("selected");
   });
   $("#23").click(function() {
       $("#21").removeClass("selected");
       $("#22").removeClass("selected");
       $("#23").addClass("selected");
       $("#24").removeClass("selected");
   });
   $("#24").click(function() {
       $("#21").removeClass("selected");
       $("#22").removeClass("selected");
       $("#23").removeClass("selected");
       $("#24").addClass("selected");
   });
   $("#submit2").click(function() {
       if($("#22").hasClass("selected")){
           $("#submit2").addClass("hidden");
           $("#wrong2").addClass("hidden");
           $("#correct2").removeClass("hidden");
           $("#continue2").removeClass("hidden");
       } else {
           $("#wrong2").removeClass("hidden");
       }
   });
   $("#continue2").click(function() {
       $("#21").addClass("hidden");
       $("#22").addClass("hidden");
       $("#23").addClass("hidden");
       $("#24").addClass("hidden");
       $("#correct2").addClass("hidden");
       $("#continue2").addClass("hidden");
       $("#q2").addClass("hidden");

       $("#q3").removeClass("hidden");
       $("#31").removeClass("hidden");
       $("#32").removeClass("hidden");
       $("#33").removeClass("hidden");
       $("#34").removeClass("hidden");
       $("#submit3").removeClass("hidden");
   });
});




$("#31").click(function() {
       $("#31").addClass("selected");
       $("#32").removeClass("selected");
       $("#33").removeClass("selected");
       $("#34").removeClass("selected");
   });
   $("#32").click(function() {
       $("#31").removeClass("selected");
       $("#32").addClass("selected");
       $("#33").removeClass("selected");
       $("#34").removeClass("selected");
   });
   $("#33").click(function() {
       $("#31").removeClass("selected");
       $("#32").removeClass("selected");
       $("#33").addClass("selected");
       $("#34").removeClass("selected");
   });
   $("#34").click(function() {
       $("#31").removeClass("selected");
       $("#32").removeClass("selected");
       $("#33").removeClass("selected");
       $("#34").addClass("selected");
   });
   $("#submit3").click(function() {
       if($("#32").hasClass("selected")){
           $("#submit3").addClass("hidden");
           $("#wrong3").addClass("hidden");
           $("#correct3").removeClass("hidden");
           $("#continue3").removeClass("hidden");
       } else {
           $("#wrong3").removeClass("hidden");
       }
   });
   $("#continue3").click(function() {
       $("#31").addClass("hidden");
       $("#32").addClass("hidden");
       $("#33").addClass("hidden");
       $("#34").addClass("hidden");
       $("#correct3").addClass("hidden");
       $("#continue3").addClass("hidden");
       $("#q3").addClass("hidden");

       $("#q4").removeClass("hidden");
       $("#41").removeClass("hidden");
       $("#42").removeClass("hidden");
       $("#43").removeClass("hidden");
       $("#44").removeClass("hidden");
       $("#submit4").removeClass("hidden");
   });






   $("#41").click(function() {
       $("#41").addClass("selected");
       $("#42").removeClass("selected");
       $("#43").removeClass("selected");
       $("#44").removeClass("selected");
   });
   $("#42").click(function() {
       $("#41").removeClass("selected");
       $("#42").addClass("selected");
       $("#43").removeClass("selected");
       $("#44").removeClass("selected");
   });
   $("#43").click(function() {
       $("#41").removeClass("selected");
       $("#42").removeClass("selected");
       $("#43").addClass("selected");
       $("#44").removeClass("selected");
   });
   $("#44").click(function() {
       $("#41").removeClass("selected");
       $("#42").removeClass("selected");
       $("#43").removeClass("selected");
       $("#44").addClass("selected");
   });
   $("#submit4").click(function() {
       if($("#42").hasClass("selected")){
           $("#submit4").addClass("hidden");
           $("#wrong4").addClass("hidden");
           $("#correct4").removeClass("hidden");
           $("#continue4").removeClass("hidden");
       } else {
           $("#wrong4").removeClass("hidden");
       }
   });
   $("#continue4").click(function() {
       $("#41").addClass("hidden");
       $("#42").addClass("hidden");
       $("#43").addClass("hidden");
       $("#44").addClass("hidden");
       $("#correct4").addClass("hidden");
       $("#continue4").addClass("hidden");
       $("#q4").addClass("hidden");

       //$("#q5").removeClass("hidden");
       //$("#51").removeClass("hidden");
       //$("#52").removeClass("hidden");
       //$("#53").removeClass("hidden");
       //$("#54").removeClass("hidden");
       //$("#submit5").removeClass("hidden");
   });

});
