$(function(){
  var $color = $('#color'), $input = $('#input'), $boxes = $('.colortext');

  $input.select();
  
  $boxes.each(function() {
    $(this).text($(this).attr('data-default'));
  });

  $input.keyup(function() {
    if ($input.val().length === 0) {
      $input.removeClass('error');
      return;
    }
    var color = parseColor($input.val());
    if (color) {
      $input.removeClass('error');
      $boxes.each(function() {
        var $current = $(this);
        var into = $current.attr('id');
        $current.text(color.convert(into));
      });
      $color.css('background-color', color.convert('rgb'));
    } else {
      $input.addClass('error');
    }
  }).click(function() {
    $input.select();
  });
  
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
    $input.val($color.css('background-color')).trigger('keyup').select();
  });
});
