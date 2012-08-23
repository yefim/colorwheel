window.parseColor = (c) ->
  if c.charAt(0) is "#"
    c = c.substr(1)

  
  # hex, rgb, single
  hex_regex = /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  rgb_regex = /^rgb\s*\(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\)$/i
  single_regex = /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/

  color = []
  color = c.match(hex_regex)
  if color?
    return new Color(toRGB(color[1]), toRGB(color[2]), toRGB(color[3]))

  color = c.match(rgb_regex)
  if color?
    return new Color(color[1], color[2], color[3])

  color = c.match(single_regex)
  if color?
    return new Color(color[1], color[2], color[3])

class Color
  constructor: (r, g, b) ->
    @red = r
    @green = g
    @blue = b
    @rgb = "#{r}, #{g}, #{b}"

  toString: () ->
    "rgb(#{@rgb})"

  convert: (into) ->
    switch into
      when "rgb" then @toString()
      when "hex" then "##{toHex(@red)}#{toHex(@green)}#{toHex(@blue)}"
      when "red" then @red
      when "green" then @green
      when "blue" then @blue
  
window.toRGB = (num) -> parseInt(num, 16)

window.toHex = (num) ->
  hex = parseInt(num, 10).toString(16).toUpperCase()
  if hex.length is 1
    return "0#{hex}"
  else
    return hex
