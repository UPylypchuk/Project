$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

function changeTextSize(action) {
  var currentSize = parseInt($("html").css("font-size"));

  if (action === 'increaseBy4') {
    $("html").css("font-size", currentSize + 4 + "px");
  } else if (action === 'increaseBy2') {
    $("html").css("font-size", currentSize + 2 + "px");
  } else if (action === 'reset') {
    $("html").css("font-size", "10px");
  }
}



