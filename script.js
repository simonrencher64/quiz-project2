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
   });
});

