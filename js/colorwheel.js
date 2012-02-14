$(function(){
  var parseHex = function(hex) {
	if (hex.charAt(0) === '#')
		hex = hex.substr(1);
	if (hex.length !== 6)
		return hex;
	var red = hex.substr(0,2);
	var green = hex.substr(2,4);
	var blue = hex.substr(4,6);
	return parseInt(red, 10) + "," + parseInt(green, 10) + "," + parseInt(blue, 10);
  }
  var parseRGB = function(rgb) {
	parseInt(hexString, 16);
	return rgb;
  }
  var $hex = $('#hextext'), $rgb = $('#rgbtext'), $color = $('#color');
  $hex.val('#rrggbb');
  $rgb.val('rgb');
  $color.val('color');
  
  $hex.focus(function() {
	if ($hex.val() === '#rrggbb')
	  $hex.val('');
  });
  
  $rgb.focus(function() {
	if ($rgb.val() === 'rgb')
	  $rgb.val('');
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
	$rgb.val(parseHex($hex.val()));
  });
  $rgb.keyup(function() {
	$hex.val(parseRGB($rgb.val()));
  });
});