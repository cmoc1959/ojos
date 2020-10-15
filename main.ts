function Gira_izquierda () {
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 1)
}
function Gira_centro () {
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P11, 0)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 100) {
        Limpia_Ojo()
        Pupila(2, 3, color_pupila)
        Gira_izquierda()
    }
    if (receivedNumber == 101) {
        Limpia_Ojo()
        Pupila(4, 3, color_pupila)
        Gira_derecha()
    }
    if (receivedNumber == 111) {
        Limpia_Ojo()
        Ojo_abierto()
        Gira_centro()
    }
    if (receivedNumber == 202) {
        Limpia_Ojo()
        Pupila(3, 2, color_pupila)
        Gira_centro()
    }
    if (receivedNumber == 222) {
        Limpia_Ojo()
        Pupila(3, 4, color_pupila)
        Gira_centro()
    }
    if (receivedNumber == 200) {
        Limpia_Ojo()
        Pupila(3, 3, colorbit.colors(BitColors.Red))
        Gira_centro()
    }
})
input.onButtonPressed(Button.A, function () {
    if (color_pupila == colorbit.colors(BitColors.Red)) {
        color_pupila = colorbit.colors(BitColors.Blue)
    } else {
        color_pupila = colorbit.colors(BitColors.Red)
    }
    Ojo_abierto()
})
function Pupila (x: number, y: number, color: number) {
    for (let index = 0; index <= 3; index++) {
        for (let index2 = 0; index2 <= 3; index2++) {
            Led(index + x, index2 + y, color)
        }
    }
}
function Limpia_Ojo () {
    for (let index = 0; index <= 5; index++) {
        for (let index2 = 0; index2 <= 5; index2++) {
            Led(index + 2, index2 + 2, colorbit.colors(BitColors.Black))
        }
    }
}
function Ojo () {
    for (let index = 0; index <= 5; index++) {
        Led(index + 2, 1, colorbit.colors(BitColors.Red))
    }
    for (let index = 0; index <= 5; index++) {
        Led(1, index + 2, colorbit.colors(BitColors.Red))
        Led(8, index + 2, colorbit.colors(BitColors.Red))
    }
    for (let index = 0; index <= 5; index++) {
        Led(index + 2, 8, colorbit.colors(BitColors.Red))
    }
}
function Led (x: number, y: number, color: number) {
    x = x - 1
    y = y - 1
    colorbit_51bit.setPixelColor(y * 8 + x, color)
    colorbit_51bit.show()
    colorbit_51bit2.setPixelColor(y * 8 + x, color)
    colorbit_51bit2.show()
}
function Ojo_abierto () {
    Ojo()
    Pupila(3, 3, color_pupila)
}
input.onButtonPressed(Button.B, function () {
    if (color_pupila == colorbit.colors(BitColors.Green)) {
        color_pupila = colorbit.colors(BitColors.Blue)
    } else {
        color_pupila = colorbit.colors(BitColors.Green)
    }
    Ojo_abierto()
})
function Gira_derecha () {
    pins.digitalWritePin(DigitalPin.P10, 1)
    pins.digitalWritePin(DigitalPin.P11, 0)
}
let y = 0
let x = 0
let color_pupila = 0
let colorbit_51bit2: colorbit.Strip = null
let colorbit_51bit: colorbit.Strip = null
radio.setGroup(1)
colorbit_51bit = colorbit.create(DigitalPin.P16, 84, BitColorMode.RGB)
colorbit_51bit2 = colorbit.create(DigitalPin.P13, 84, BitColorMode.RGB)
let ojo = 4
color_pupila = colorbit.colors(BitColors.Blue)
basic.pause(100)
Ojo_abierto()
