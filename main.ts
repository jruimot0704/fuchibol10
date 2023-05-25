radio.setGroup(208)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("izquierda")
        basic.showArrow(ArrowNames.West)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("derecha")
        basic.showArrow(ArrowNames.East)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("adelante")
        basic.showArrow(ArrowNames.North)
    }
    if (input.isGesture(Gesture.Shake)) {
        radio.sendString("parar")
        cuteBot.stopcar()
    }
})
