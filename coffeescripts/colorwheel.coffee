$ ->
  [$color, $boxes, $input] = [$("#color"), $(".colortext"), $("#input").focus()]

  $boxes.each () -> $(this).text($(this).data("default"))
  
  update_boxes = (color) ->
    $input.removeClass("error").addClass("valid")
    $boxes.each () ->
      $current = $(this)
      into = $current.attr("id")
      $current.text(color.convert(into))
    $color.css("background-color", color.toString())

  $input.keyup () ->
    input = $input.val()
    localStorage["input"] = input
    if input.length is 0
      $input.removeClass("error valid")
      return
    color = parseColor(input)
    if color
      update_boxes(color)
    else
      $input.removeClass("valid").addClass("error")

  $input.click () -> $input.select()

  $boxes.click () ->
    $this = $(this)
    text = ""
    if $this.attr("class").indexOf("single") > -1
      rgb = []
      $(".single").each (el) -> rgb[el] = $(this).text()
      text = rgb.join(",")
    else
      text = $this.text()
    $input.val(text).select().trigger("keyup")

  $color.click () ->
    $input.val($color.css("background-color")).select().trigger("keyup")

  if localStorage["input"]?
    $input.val(localStorage["input"]).select().trigger("keyup")

