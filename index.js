$(document).on("keydown", function(event) {
  $("h1").css("color", "red");
  setTimeout(function() {
    $("h1").css("color", "black");
  }, 100);
});
