var parseColor = function(c) {
  if (c.charAt(0) === '#') c = c.substr(1);
  // hex, rgb, single
  var hex_regex = /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
  var rgb_regex = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;
  var single_regex = /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/;
  var color = [];
  color = c.match(hex_regex);
  if (color != null) {
    return new Color(toRGB(color[1]),toRGB(color[2]),toRGB(color[3]))
  }
  color = c.match(rgb_regex);
  if (color != null) {
    return new Color(color[1], color[2], color[3]);
  }
  color = c.match(single_regex);
  if (color != null) {
    return new Color(color[1],color[1],color[1]);
  }
}
function Color(r,g,b) {
  this.red = r;
  this.green = g;
  this.blue = b;
}
Color.prototype.convert = function(into) {
  if (into === 'rgb') {
    return 'rgb('+this.red+','+this.green+','+this.blue + ')';
  } else if (into === 'hex') {
    return '#'+toHex(this.red)+''+toHex(this.green)+''+ toHex(this.blue);
  }
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
