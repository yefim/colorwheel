var getColor = function(c) {
  if (c.charAt(0) === '#') c = c.substr(1);
  // hex, rgb, single
  var regex = [/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/, /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/];
  $.each(regex, function(i, value) {
    var color = c.match(value);
    if (color != null) {
      console.log(color);
      return color;
    }
  });
}
var fuckyou = function(argument) {
  return "fuck you";
}
var isValidColor = function(c, type) {
  if (type === 'rgb') {
    return (parseRGB(c) != null);
  }
  else if (type === 'hex') {
    return (parseHex(c) != null);
  }
  else if (type === 'single') {
    var num = parseInt(c);
    return (num <= 255 && num >= 0);
  }
  return false;
}
var toRGB = function(num) {
  return parseInt(num, 16);
}
var toHex = function(num) {
  return parseInt(num,10).toString(16);
}
var parseColor = function(c, type) {
  if (type === 'rgb') {
    return parseRGB(c);
  }
  else if (type === 'hex') {
    return parseHex(c);
  }
  else if (type === 'single') {
    return parseInt(c);
  }
}
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
    $.each(c, function(i, value) {
      c[i] = toRGB(value);
    });
    return c;
  }
}
var parseRGB = function(rgb) {
  var rgb_regex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  var c = rgb.match(rgb_regex);
  if (c) {
    return [c[1],c[2],c[3]];
  }
}
