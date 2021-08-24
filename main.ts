let veces = 0
let humedad = 0
let presion = 0
let temp = 0
serial.redirectToUSB()
sensoresFing.inicializarSensores()
basic.forever(function () {
    temp = 0
    presion = 0
    humedad = 0
    for (let index = 0; index < 10; index++) {
        temp += sensoresFing.obtenerTemperatura()
        presion += sensoresFing.obtenerPresion()
        humedad += sensoresFing.obtenerHumedad()
        basic.pause(100)
    }
    veces += 1
    serial.writeValue("temperatura", temp / 10)
    serial.writeValue("presion", presion / 10)
    serial.writeValue("humedad", humedad / 10)
    serial.writeLine("" + (veces))
})
