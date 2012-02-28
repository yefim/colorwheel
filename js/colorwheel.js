$(function(){
  var $color = $('#color'), $boxes = $('.colortext'), $input = $('#input').focus() ;
  
  $boxes.each(function() { $(this).text($(this).attr('data-default')); });

  $input.keyup(function() {
    var input = $input.val();
    if (input.length === 0) {
      $input.removeClass('error valid');
      localStorage['color'] = "";
      return;
    }
    var color = parseColor(input);
    if (color) {
    	localStorage['color'] = input;
      $input.removeClass('error').addClass('valid');
      $boxes.each(function() {
        var $current = $(this);
        var into = $current.attr('id');
        $current.text(color.convert(into));
      });
      $color.css('background-color', color.toString());
    } else {
      delete localStorage['color'];
      $input.removeClass('valid');
      $input.addClass('error');
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
  
  if (localStorage['color'] !== undefined) {
    $input.val(localStorage['color']).select().trigger('keyup');
  }
});
