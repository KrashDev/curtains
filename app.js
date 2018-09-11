$(document).ready(function() {

  var box = $('.box');

  //cog div creation
  for (i = 0; i < 10; i++) {
    $(box).append('<div class="panels"><img src="images/panel.svg"></div>');
  }

  var panels = $('.panels');
  var panelsImg = $('.panel img');
  var main = $('.main');

  //positioning
  var j = 2;

  $(panels).each(function() {
    $(this).css({
      "left": "-14%"
    });

  });

  //sizing
  // panelImg.css({
  //   "height": "75px",
  //   "width": "75px"
  // });


  // left: -14 % ;

}); //document ready function