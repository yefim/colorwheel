// Accepted Inputs
// * #eee
// * #eeeeee
// * eee
// * eeeeee
// * rgb(255, 255, 255)
// * 255, 255, 255
window.parseColor = function(str) {
  var match;
  if (str.length === 0) {
    // It's the default case
    return {
      hex: '#RRGGBB',
      rgb: 'rgb(R, G, B)'
    };
  } else if (match = str.match(/^#?([0-9a-f]{3})$/i)) {
    // It's a 3 digit hex
    var hex = match[1];
    if (hex[0] === '#') {
      hex = hex.substring(1);
    }

    var rgbString = hex.split('').map(function(ch) {
      return parseInt(ch, 16) * 0x11;
    }).join(', ');

    return {
      hex: '#' + hex,
      rgb: 'rgb(' + rgbString + ')'
    };
  } else if (match = str.match(/^#?([0-9a-f]{6})$/i)) {
    // It's a 6 digit hex
    var hex = match[1];
    if (hex[0] === '#') {
      hex = hex.substring(1);
    }

    var rgbString = [
      parseInt(hex.substring(0, 2), 16),
      parseInt(hex.substring(2, 4), 16),
      parseInt(hex.substring(4, 6), 16),
    ].join(', ');

    return {
      hex: '#' + hex,
      rgb: 'rgb(' + rgbString + ')'
    };
  } else if (match = str.match(/^(rgb\s*\()?\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)?$/i)) {
    // Comma-delimited rgb value
    var red = parseInt(match[2], 10);
    var green = parseInt(match[3], 10);
    var blue = parseInt(match[4], 10);

    if (red < 0 || red > 255 ||
        green < 0 || green > 255 ||
        blue < 0 || blue > 255) {
      return null;
    }

    var toHex = function(s) {
      return ('00' + s.toString(16)).slice(-2);
    };

    return {
      hex: '#' + toHex(red) + toHex(green) + toHex(blue),
      rgb: 'rgb(' + [red, green, blue].join(', ') + ')'
    };
  } else {
    return null;
  }
};

window.copyString = function(node) {
  var range = document.createRange();
  range.selectNode(node);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
};
