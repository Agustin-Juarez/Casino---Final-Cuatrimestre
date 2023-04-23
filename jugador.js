"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, edad, saldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.saldo = saldo;
    }
    Jugador.prototype.actualizarSaldo = function (cantidad) {
        this.saldo += cantidad;
    };
    Jugador.prototype.restarSaldo = function (cantidad) {
        this.saldo -= cantidad;
    };
    Jugador.prototype.imprimirSaldo = function () {
        console.log("Su saldo actual es: ".concat(this.saldo));
    };
    return Jugador;
}());
exports.Jugador = Jugador;
