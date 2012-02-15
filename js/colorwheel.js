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
    $boxes.not(this).val($(this).val());
  }).focus(function() {
    var $this = $(this);
    if ($this.val() === $this.attr('data-default')) {
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
