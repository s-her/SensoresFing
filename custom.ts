/**
 * Bloques para los sensores
 */
//% weight=100 color=#808080 icon=""
namespace sensoresFing {
    let inicializado = false;

    /**
     * Inicializa el sensor
     */
    //% block
    export function inicializarSensores(): void {
        inicializado = true
    }

    /**
     * Obtener temperatura en grados Celsius
     */
    //% block
    export function obtenerTemperatura(): number {
        if (!inicializado)
            return -1
        return Math.randomRange(14, 15)
    }

    /**
     * Obtener humedad en porcentaje
     */
    //% block
    export function obtenerHumedad(): number {
        if (!inicializado)
            return -1
        return Math.randomRange(50, 55)
    }

    /**
     * Obtener presion en hPa
     */
    //% block
    export function obtenerPresion(): number {
        if (!inicializado)
            return -1
        return Math.randomRange(1017, 1019)
    }
}
