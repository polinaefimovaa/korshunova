$(document).ready(function(){
  $(".star").click(function(){
    if ($(".frame").hasClass("f1")) {
      $(".frame").removeClass("f1");
      $(".frame").addClass("f2");
      $(".star").addClass("none");
      $(".text1").removeClass("none");
    }
  });
});
