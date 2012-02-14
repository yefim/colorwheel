function Color(red,green,blue) {
  this.r = red;
  this.g = green;
  this.b = blue;
}
Color.prototype.toString = function() {
  return 'rgb('+r+","+g","+b +')';
}
var toRGB = function(num) {
  return parseInt(num, 16);
}
var toHex = function(num) {
  return parseInt(num,10).toString(16);
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
