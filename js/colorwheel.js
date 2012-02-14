$(function(){
  var default_hex = "#RRGGBB", default_rgb = "rgb(R,G,B)", 
	default_red = "R", default_green = "G", default_blue = "B";
	
  var check_single_digit = function(num) {
    return (num.toString().length === 1) ? "0" + num.toString() : num;
  }
  var toRGB = function(num) { return parseInt(num,16); }
  var toHex = function(num) { return check_single_digit(parseInt(num,10).toString(16)); }
  var parseHex = function(hex) {
    if (hex.charAt(0) === '#') hex = hex.substr(1);
	var hex_regex = /^(?:[0-9a-fA-F]{3}){1,2}$/;
	if (hex.match(hex_regex)) {
	  var c = [];
	  if (hex.length === 6) {
	    c = hex.match(/.{1,2}/g);
	  } else if (hex.length === 3) {
	    c = [hex[0]+hex[0], hex[1]+hex[1], hex[2]+hex[2]];
	  }
	  for (var i = 0; i < c.length; i++) {
	    c[i] = toRGB(c[i]);
	  }
	  return 'rgb(' + c.join(',') + ')';
	}
  }
  var parseRGB = function(rgb) {
    var rgb_regex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
    var c = rgb.match(rgb_regex);
    if (c) {
      return "#" + toHex(c[1]) + toHex(c[2]) + toHex(c[3]);
    }
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
