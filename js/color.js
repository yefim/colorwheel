var parseColor = function(c) {
  if (c.charAt(0) === '#') c = c.substr(1);
  // hex, rgb, single
  var hex_regex = /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;
  var rgb_regex = /^rgb\s*\(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\)$/i;
  var single_regex = /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/;
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
  this.red = Math.round(r);
  this.green = Math.round(g);
  this.blue = Math.round(b);
}
Color.prototype.convert = function(into) {
  // break statements are unnecessary because I'm always returning shit
  switch(into) {
    case 'rgb': return 'rgb('+this.red+', '+this.green+', '+this.blue + ')';
    case 'hex': return '#'+toHex(this.red)+''+toHex(this.green)+''+ toHex(this.blue);
    case 'red': return this.red;
    case 'green': return this.green;
    case 'blue': return this.blue;
  }
}
var toRGB = function(num) {
  return parseInt(num, 16);
}
var toHex = function(num) {
  var hex = parseInt(num,10).toString(16).toUpperCase();
  return (hex.length == 1) ? "0"+hex : hex;
}
// r,g,b values are from 0 to 1 
// h = [0,360], s = [0,1], v = [0,1] 
//  if s == 0, then h = -1 (undefined)
Color.prototype.toHSV = function() {
  var r = parseInt(this.red,10)/255;
  var g = parseInt(this.green,10)/255;
  var b = parseInt(this.blue,10)/255;

  var H, S, V;
  var min = Math.min(r,g,b ), max = Math.max(r,g,b);
  var delta = max - min; //need to cover the case if delta === 0
  V = max;    // v
  if(max != 0) 
    S = delta / max;  // s 
  else { 
    // r = g = b = 0  // s = 0, v is undefined 
    S = 0; 
    H = -1;
    return new HSV(0,0,0);
  }
  if (delta === 0) {
    H = 0;
  }
  else if(r === max)
    H = (g-b)/delta;  // between yellow & magenta
  else if(g === max) 
    H = 2+(b-r)/delta; // between cyan & yellow 
  else 
    H = 4+(r-g)/delta; // between magenta & cyan
  H *= 60;    // degrees 
  if(H < 0) 
    H += 360;
  return new HSV(H,S,V);
}
function HSV(h,s,v) {
  this.hue = h;
  this.saturation = s;
  this.value = v;
}
HSV.prototype.toRGB = function() {
  var i = 0;
  var f, p, q, t;
  var h = this.hue, s = this.saturation, v = this.value;
  if(s == 0) {
    // achromatic (grey)
    return new Color(v*255, v*255, v*255);
  }
  h /= 60;			// sector 0 to 5
  i = Math.floor(h);
  f = h - i;			// factorial part of h
  p = v * (1 - s);
  q = v * (1 - s * f);
  t = v * (1 - s * (1 - f));
  switch(i) {
    case 0: return new Color(v*255, t*255, p*255);
    case 1: return new Color(q*255, v*255, p*255);
    case 2: return new Color(p*255, v*255, t*255);
    case 3: return new Color(p*255, q*255, v*255);
    case 4: return new Color(t*255, p*255, v*255);
    case 5: return new Color(v*255, p*255, q*255);
    default: return;
  }
}


