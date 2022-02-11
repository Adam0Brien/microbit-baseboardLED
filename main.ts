input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    serial.redirect(
    SerialPin.P15,
    SerialPin.P16,
    BaudRate.BaudRate9600
    )
    serial.writeString("ld1 microbit to pic")
    serial.writeString("\\r")
    serial.writeString("\\r")
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    serial.redirect(
    SerialPin.P15,
    SerialPin.P16,
    BaudRate.BaudRate9600
    )
    serial.writeString("do11")
    serial.writeString("\\r")
    serial.writeString("\\r")
    basic.showIcon(IconNames.No)
})
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
