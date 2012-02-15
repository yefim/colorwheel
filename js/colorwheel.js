$(function(){	
  var check_single_digit = function(num) {
    return (num.toString().length === 1) ? "0" + num.toString() : num;
  }
  var $hex = $('#hextext'), $rgb = $('#rgbtext'), $red = $('#red'),
    $green = $('#green'), $blue = $('#blue'), $singlergb = $('#singlergb'),
    $color = $('#color');
  var $boxes = $('.colortext');
  
  $boxes.each(function() {
    $this = $(this);
    $this.val($this.attr('data-default'));
  });

  $boxes.keyup(function() {
    $this = $(this);
    var val = $this.val();
    var type = $this.attr('data-type');
    if (isValidColor(val,type)) {
      $boxes.not(this).val(val);
    }
  }).focus(function() {
    var $this = $(this);
    var val = $this.val();
    if (val === $this.attr('data-default') || !isValidColor(val, $this.attr('data-type'))) {
      $this.val('');
    }
  }).click(function() {
    $(this).select();
  }).blur(function() {
    var $this = $(this);
    if ($this.val() === '')
      $this.val($this.attr('data-default'));
  });
});
