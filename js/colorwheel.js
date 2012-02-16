$(function(){	
  var check_single_digit = function(num) {
    return (num.toString().length === 1) ? "0" + num.toString() : num;
  }
  var $color = $('#color'), $input = $('#input'), $boxes = $('.colortext');
  
  $boxes.each(function() {
    $this = $(this);
    $this.val($this.attr('data-default'));
  });
  
  $input.keyup(function() {
    var color = parseColor($input.val());
    if (color) {
      $boxes.each(function() {
        var $current = $(this);
        var into = $current.attr('id');
        $current.val(color.convert(into));
      });
      $color.css('background-color', color.convert('rgb'));
    }
  }).click(function() {
    $input.select();
  });
  $boxes.focus(function() {
    var $this = $(this);
    var val = $this.val();
    if (val === $this.attr('data-default')) {
      $this.val('');
    }
  }).click(function() {
    $this = $(this);
    $input.val($this.val());
    $this.select();
  }).blur(function() {
    var $this = $(this);
    if ($this.val() === '')
      $this.val($this.attr('data-default'));
  });
});
