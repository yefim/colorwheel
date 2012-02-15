$(function(){
  var default_hex = "#RRGGBB", default_rgb = "rgb(R,G,B)", 
    default_red = "R", default_green = "G", default_blue = "B";
	
  var check_single_digit = function(num) {
    return (num.toString().length === 1) ? "0" + num.toString() : num;
  }
  var $hex = $('#hextext'), $rgb = $('#rgbtext'), $red = $('#red'),
    $green = $('#green'), $blue = $('#blue'), $singlergb = $('#singlergb'),
    $color = $('#color');
  var $boxes = $('.colortext');
  
  $hex.val(default_hex); $rgb.val(default_rgb); $red.val(default_red);
  $green.val(default_green); $blue.val(default_blue); $color.html('color');
  
  $boxes.keyup(function() {
    $boxes.not(this).val($(this).val());
  }).focus(function() {
    //$boxes.not(this).val('');
  }).click(function() {
    $(this).select();
  }).blur(function() {
    if ($(this).val() === '')
      $(this).val('default val');
  });
});
