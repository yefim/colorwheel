var parse = window.parseColor;
var colorInput = document.getElementById('color-input');
var hexDisplay = document.getElementById('hex');
var rgbDisplay = document.getElementById('rgb');
var preview = document.getElementById('preview');

colorInput.addEventListener('input', function() {
  var val = colorInput.value;
  var parsed = parse(val);

  if (parsed) {
    // show hex and rgb
    hexDisplay.innerHTML = parsed.hex;
    rgbDisplay.innerHTML = parsed.rgb;
  } else {
    // show error
  }
}, true);

document.getElementById('hex-copy').addEventListener('click', function() {
  var hex = hexDisplay.innerHTML;
  console.log(hex);
}, true);

document.getElementById('rgb-copy').addEventListener('click', function() {
  var rgb = rgbDisplay.innerHTML;
  console.log(rgb);
}, true);
