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
       if($("#34").hasClass("selected")){
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
       if($("#43").hasClass("selected")){
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

       $("#q5").removeClass("hidden");
       $("#51").removeClass("hidden");
       $("#52").removeClass("hidden");
       $("#53").removeClass("hidden");
       $("#54").removeClass("hidden");
       $("#submit5").removeClass("hidden");
   });
   
   
   
   
   
   
   
   
   $("#51").click(function() {
       $("#51").addClass("selected");
       $("#52").removeClass("selected");
       $("#53").removeClass("selected");
       $("#54").removeClass("selected");
   });
   $("#52").click(function() {
       $("#51").removeClass("selected");
       $("#52").addClass("selected");
       $("#53").removeClass("selected");
       $("#54").removeClass("selected");
   });
   $("#53").click(function() {
       $("#51").removeClass("selected");
       $("#52").removeClass("selected");
       $("#53").addClass("selected");
       $("#54").removeClass("selected");
   });
   $("#54").click(function() {
       $("#51").removeClass("selected");
       $("#52").removeClass("selected");
       $("#53").removeClass("selected");
       $("#54").addClass("selected");
   });
   $("#submit5").click(function() {
       if($("#51").hasClass("selected")){
           $("#submit5").addClass("hidden");
           $("#wrong5").addClass("hidden");
           $("#correct5").removeClass("hidden");
           $("#continue5").removeClass("hidden");
       } else {
           $("#wrong5").removeClass("hidden");
       }
   });
   $("#continue5").click(function() {
       $("#51").addClass("hidden");
       $("#52").addClass("hidden");
       $("#53").addClass("hidden");
       $("#54").addClass("hidden");
       $("#correct5").addClass("hidden");
       $("#continue5").addClass("hidden");
       $("#q5").addClass("hidden");

       $("#q6").removeClass("hidden");
       $("#61").removeClass("hidden");
       $("#62").removeClass("hidden");
       $("#63").removeClass("hidden");
       $("#64").removeClass("hidden");
       $("#submit6").removeClass("hidden");
   });
   
   
   
   
   
   
   
   $("#61").click(function() {
       $("#61").addClass("selected");
       $("#62").removeClass("selected");
       $("#63").removeClass("selected");
       $("#64").removeClass("selected");
   });
   $("#62").click(function() {
       $("#61").removeClass("selected");
       $("#62").addClass("selected");
       $("#63").removeClass("selected");
       $("#64").removeClass("selected");
   });
   $("#63").click(function() {
       $("#61").removeClass("selected");
       $("#62").removeClass("selected");
       $("#63").addClass("selected");
       $("#64").removeClass("selected");
   });
   $("#64").click(function() {
       $("#61").removeClass("selected");
       $("#62").removeClass("selected");
       $("#63").removeClass("selected");
       $("#64").addClass("selected");
   });
   $("#submit6").click(function() {
       if($("#64").hasClass("selected")){
           $("#submit6").addClass("hidden");
           $("#wrong6").addClass("hidden");
           $("#correct6").removeClass("hidden");
           $("#continue6").removeClass("hidden");
       } else {
           $("#wrong6").removeClass("hidden");
       }
   });
   $("#continue6").click(function() {
       $("#61").addClass("hidden");
       $("#62").addClass("hidden");
       $("#63").addClass("hidden");
       $("#64").addClass("hidden");
       $("#correct6").addClass("hidden");
       $("#continue6").addClass("hidden");
       $("#q6").addClass("hidden");

       $("#q7").removeClass("hidden");
       $("#71").removeClass("hidden");
       $("#72").removeClass("hidden");
       $("#73").removeClass("hidden");
       $("#74").removeClass("hidden");
       $("#submit7").removeClass("hidden");
   });
   
   
   
   
   
   
   
   $("#71").click(function() {
       $("#71").addClass("selected");
       $("#72").removeClass("selected");
       $("#73").removeClass("selected");
       $("#74").removeClass("selected");
   });
   $("#72").click(function() {
       $("#71").removeClass("selected");
       $("#72").addClass("selected");
       $("#73").removeClass("selected");
       $("#74").removeClass("selected");
   });
   $("#73").click(function() {
       $("#71").removeClass("selected");
       $("#72").removeClass("selected");
       $("#73").addClass("selected");
       $("#74").removeClass("selected");
   });
   $("#74").click(function() {
       $("#71").removeClass("selected");
       $("#72").removeClass("selected");
       $("#73").removeClass("selected");
       $("#74").addClass("selected");
   });
   $("#submit7").click(function() {
       if($("#72").hasClass("selected")){
           $("#submit7").addClass("hidden");
           $("#wrong7").addClass("hidden");
           $("#correct7").removeClass("hidden");
           $("#continue7").removeClass("hidden");
       } else {
           $("#wrong7").removeClass("hidden");
       }
   });
   $("#continue7").click(function() {
       $("#71").addClass("hidden");
       $("#72").addClass("hidden");
       $("#73").addClass("hidden");
       $("#74").addClass("hidden");
       $("#correct7").addClass("hidden");
       $("#continue7").addClass("hidden");
       $("#q7").addClass("hidden");

       $("#q8").removeClass("hidden");
       $("#81").removeClass("hidden");
       $("#82").removeClass("hidden");
       $("#83").removeClass("hidden");
       $("#84").removeClass("hidden");
       $("#submit8").removeClass("hidden");
   });
   
   
   
   
   
   
   $("#81").click(function() {
       $("#81").addClass("selected");
       $("#82").removeClass("selected");
       $("#83").removeClass("selected");
       $("#84").removeClass("selected");
   });
   $("#82").click(function() {
       $("#81").removeClass("selected");
       $("#82").addClass("selected");
       $("#83").removeClass("selected");
       $("#84").removeClass("selected");
   });
   $("#83").click(function() {
       $("#81").removeClass("selected");
       $("#82").removeClass("selected");
       $("#83").addClass("selected");
       $("#84").removeClass("selected");
   });
   $("#84").click(function() {
       $("#81").removeClass("selected");
       $("#82").removeClass("selected");
       $("#83").removeClass("selected");
       $("#84").addClass("selected");
   });
   $("#submit8").click(function() {
       if($("#83").hasClass("selected")){
           $("#submit8").addClass("hidden");
           $("#wrong8").addClass("hidden");
           $("#correct8").removeClass("hidden");
           $("#continue8").removeClass("hidden");
       } else {
           $("#wrong8").removeClass("hidden");
       }
   });
   $("#continue8").click(function() {
       $("#81").addClass("hidden");
       $("#82").addClass("hidden");
       $("#83").addClass("hidden");
       $("#84").addClass("hidden");
       $("#correct8").addClass("hidden");
       $("#continue8").addClass("hidden");
       $("#q8").addClass("hidden");

       $("#q9").removeClass("hidden");
       $("#91").removeClass("hidden");
       $("#92").removeClass("hidden");
       $("#93").removeClass("hidden");
       $("#94").removeClass("hidden");
       $("#submit9").removeClass("hidden");
   });
   
   
   
   
   
   
   
   $("#91").click(function() {
       $("#91").addClass("selected");
       $("#92").removeClass("selected");
       $("#93").removeClass("selected");
       $("#94").removeClass("selected");
   });
   $("#92").click(function() {
       $("#91").removeClass("selected");
       $("#92").addClass("selected");
       $("#93").removeClass("selected");
       $("#94").removeClass("selected");
   });
   $("#93").click(function() {
       $("#91").removeClass("selected");
       $("#92").removeClass("selected");
       $("#93").addClass("selected");
       $("#94").removeClass("selected");
   });
   $("#94").click(function() {
       $("#91").removeClass("selected");
       $("#92").removeClass("selected");
       $("#93").removeClass("selected");
       $("#94").addClass("selected");
   });
   $("#submit9").click(function() {
       if($("#92").hasClass("selected")){
           $("#submit9").addClass("hidden");
           $("#wrong9").addClass("hidden");
           $("#correct9").removeClass("hidden");
           $("#continue9").removeClass("hidden");
       } else {
           $("#wrong9").removeClass("hidden");
       }
   });
   $("#continue9").click(function() {
       $("#91").addClass("hidden");
       $("#92").addClass("hidden");
       $("#93").addClass("hidden");
       $("#94").addClass("hidden");
       $("#correct9").addClass("hidden");
       $("#continue9").addClass("hidden");
       $("#q9").addClass("hidden");

       $("#q10").removeClass("hidden");
       $("#101").removeClass("hidden");
       $("#102").removeClass("hidden");
       $("#103").removeClass("hidden");
       $("#104").removeClass("hidden");
       $("#submit10").removeClass("hidden");
   });
   
   
   
   
   
   
   $("#101").click(function() {
       $("#101").addClass("selected");
       $("#102").removeClass("selected");
       $("#103").removeClass("selected");
       $("#104").removeClass("selected");
   });
   $("#102").click(function() {
       $("#101").removeClass("selected");
       $("#102").addClass("selected");
       $("#103").removeClass("selected");
       $("#104").removeClass("selected");
   });
   $("#103").click(function() {
       $("#101").removeClass("selected");
       $("#102").removeClass("selected");
       $("#103").addClass("selected");
       $("#104").removeClass("selected");
   });
   $("#104").click(function() {
       $("#101").removeClass("selected");
       $("#102").removeClass("selected");
       $("#103").removeClass("selected");
       $("#104").addClass("selected");
   });
   $("#submit10").click(function() {
       if($("#102").hasClass("selected")){
           $("#submit10").addClass("hidden");
           $("#wrong10").addClass("hidden");
           $("#correct10").removeClass("hidden");
           $("#continue10").removeClass("hidden");
       } else {
           $("#wrong10").removeClass("hidden");
       }
   });
   $("#continue10").click(function() {
       $("#101").addClass("hidden");
       $("#102").addClass("hidden");
       $("#103").addClass("hidden");
       $("#104").addClass("hidden");
       $("#correct10").addClass("hidden");
       $("#continue10").addClass("hidden");
       $("#q10").addClass("hidden");
   });

});
