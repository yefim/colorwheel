$(function(){	
  var $color = $('#color'), $input = $('#input'), $boxes = $('.colortext');
  
  $boxes.each(function() {
    $this = $(this);
    $this.html($this.attr('data-default'));
  });
  
  $input.keyup(function() {
    var color = parseColor($input.val());
    if (color) {
      $boxes.each(function() {
        var $current = $(this);
        var into = $current.attr('id');
        $current.html(color.convert(into));
      });
      $color.css('background-color', color.convert('rgb'));
    }
  }).click(function() {
    $input.select();
  });
  
  $boxes.click(function() {
    $this = $(this);
    if ($this.html() !== $this.attr('data-default'))
      $input.val($this.html());
    $input.select();
  });
});
