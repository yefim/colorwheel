var parseColor = function(c) {
  if (c.charAt(0) === '#') c = c.substr(1);
  // hex, rgb, single
  var hex_regex = /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
  var rgb_regex = /^rgb\s*\((\d+),\s*(\d+),\s*(\d+)\)$/i;
  var single_regex = /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/;
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
    return new Color(color[1],color[2],color[3]);
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
  } else if (into === 'red') {
    return this.red;
  } else if (into === 'green') {
    return this.green;
  } else if (into === 'blue') {
    return this.blue;
  }
}
var toRGB = function(num) {
  return parseInt(num, 16);
}
var toHex = function(num) {
  var hex = parseInt(num,10).toString(16).toUpperCase();
  return (hex.length == 1) ? "0"+hex : hex;
}
