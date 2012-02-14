$(function(){
  var parseHex = function(hex) {
	if (hex.charAt(0) === '#')
		hex = hex.substr(1);
	if (hex.length !== 6)
		return hex;
	var red = hex.substr(0,2);
	var green = hex.substr(2,2);
	var blue = hex.substr(4,2);
	return parseInt(red, 16) + "," + parseInt(green, 16) + "," + parseInt(blue, 16);
  }
  var parseRGB = function(rgb) {
	var color = rgb.split(',');
	var hex = "#";
	if (color.length !== 3)
	  return;
	for (var i = 0; i < color.length; i++) {
	  hex = hex + parseInt(color[i],10).toString(16);
	}
	return hex;
  }
  var $hex = $('#hextext'), $rgb = $('#rgbtext'), $color = $('#color');
  $hex.val('#rrggbb');
  $rgb.val('rgb');
  $color.val('color');
  
  $hex.click(function() {
	$hex.select();
  });
  $rgb.click(function() {
	$rgb.select();
  });
  
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