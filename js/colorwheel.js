$(function(){
  var $hex = $('#hextext'), $rgb = $('#rgbtext'), $both = $('.colortext'), $color = $('#color');
  $hex.val('#rrggbb');
  $rgb.val('rgb');
  $color.val('color');
  
  $both.focus(function() {
	$(this).val('');
  });
  
  $hex.blur(function() {
	if ($hex.val() === '')
	  $hex.val('#rrggbb');
  });
  $rgb.blur(function() {
	if ($rgb.val() === '')
	  $rgb.val('rgb');
  });
  
  $hex.keyup(function() {
	$rgb.val($hex.val());
  });
  $rgb.keyup(function() {
	$hex.val($rgb.val());
  });
});