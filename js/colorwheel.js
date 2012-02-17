$(function(){
  var $color = $('#color'), $input = $('#input'), $boxes = $('.colortext'),
    $HSV = $('.hsv');

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
      var HSV = color.toHSV();
      $HSV.each(function() {
	$(this).val(HSV.get($(this).attr('id')));
      });
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
  
  $HSV.keydown(function() {
    
    var values = [];
    $HSV.each(function(i) {
      values[i] = $(this).val();
    });
    var hsv = new HSV(parseInt(values[0]), parseInt(values[1]),parseInt(values[2]));
    if (HSV) {
      console.log(hsv);
      $input.val(hsv.toRGB().convert('rgb'));
    }
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
