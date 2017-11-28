$(document).ready(function() {
  $("button#darkbtn").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#lightbtn").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
