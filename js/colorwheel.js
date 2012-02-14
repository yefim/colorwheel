$(function(){
  var default_hex = "#RRGGBB", default_rgb = "rgb(R,G,B)", 
	default_red = "R", default_green = "G", default_blue = "B";
	
  var check_single_digit = function(num) {
    return (num.toString().length === 1) ? "0" + num.toString() : num;
  }
  var $hex = $('#hextext'), $rgb = $('#rgbtext'), $red = $('#red'),
	$green = $('#green'), $blue = $('#blue'), $singlergb = $('#singlergb'),
	$color = $('#color');
  $hex.val(default_hex); $rgb.val(default_rgb); $red.val(default_red);
  $green.val(default_green); $blue.val(default_blue); $color.html('color');
  
  $('body').keyup(function() {
    if ($hex.val() !== "" && $rgb.val() !== "") {
      $color.css('background-color', $rgb.val());
    } else {
      $color.css('background-color', 'fff');
    }
  });
  $singlergb.map(function() {
    return $(this).val();
  }).get().join(',');
  $hex.click(function() {
	$hex.select();
  });
  $rgb.click(function() {
    $rgb.select();
  });
  $hex.focus(function() {
    if ($hex.val() === default_hex)
      $hex.val('');
  });
  $rgb.focus(function() {
    if ($rgb.val() === default_rgb)
      $rgb.val('');
  });
  $hex.blur(function() {
    if ($hex.val() === '')
      $hex.val(default_hex);
  });
  $rgb.blur(function() {
    if ($rgb.val() === '')
      $rgb.val(default_rgb);
  });
  $hex.keyup(function() {
    $rgb.val(parseHex($hex.val()));
  });
  $rgb.keyup(function() {
    $hex.val(parseRGB($rgb.val()));
  });
  // HELP
  $singlergb.children().keyup(function() {
    $singlergb.map(function() {
      return $(this).val();
    }).get().join(',');
  });
});
