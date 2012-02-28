$(function(){
  var $color = $('#color'), $boxes = $('.colortext'), $input = $('#input').focus() ;
  
  $boxes.each(function() { $(this).text($(this).attr('data-default')); });

  $input.keyup(function() {
    var input = $input.val();
      localStorage['input'] = input;
    if (input.length === 0) {
      $input.removeClass('error valid');
      return;
    }
    var color = parseColor(input);
    if (color) {
      $input.removeClass('error').addClass('valid');
      $boxes.each(function() {
        var $current = $(this);
        var into = $current.attr('id');
        $current.text(color.convert(into));
      });
      $color.css('background-color', color.toString());
    } else {
      $input.removeClass('valid').addClass('error');
    }
  }).click(function() { $input.select(); });
  
  $boxes.click(function() {
    var $this = $(this);
    var text = "";
    if ($this.attr('class').indexOf('single') > -1) {
      var rgb = [];
      $('.single').each(function(i) {
        rgb[i] = $(this).text();
      });
      text = rgb.join(',');
    } else {
      text = $this.text();
    }
    $input.val(text).select().trigger('keyup');
  });
  $color.click(function() {
    $input.val($color.css('background-color')).select().trigger('keyup');
  });
  
  if (localStorage['input'] !== undefined) {
    $input.val(localStorage['input']).select().trigger('keyup');
  }
});
