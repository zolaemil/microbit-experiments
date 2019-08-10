/**
 * Respond to button input
 */ 


input.onButtonPressed(Button.A, function () {
  basic.showLeds(`
      . . . . .
      . # . # .
      . . . . .
      # . . . #
      . # # # .
      `)
})
input.onButtonPressed(Button.B, function () {
  basic.showString("Smiley")
})
