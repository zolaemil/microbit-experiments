/**
 * This program plots the analog input on the micro:bit's LED matrix
 */ 


let light = 0

basic.forever(function () {
    light = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(light, 0)
})
