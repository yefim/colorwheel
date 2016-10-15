var parse = window.parseColor;
var copy = window.copyNode;

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
    preview.style.backgroundColor = parsed.rgb;
  } else {
    // show error
  }
}, true);

document.getElementById('hex-copy').addEventListener('click', function() {
  copy(hexDisplay);
}, true);

document.getElementById('rgb-copy').addEventListener('click', function() {
  copy(rgbDisplay);
}, true);
