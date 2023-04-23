"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
var juego_1 = require("./juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(nombre, valorMinimoApuesta, probabilidadGanar) {
        var _this = _super.call(this, nombre, valorMinimoApuesta, probabilidadGanar) || this;
        _this.saldo = 0; // El saldo se inicializa en 0 al crear el objeto
        return _this;
    }
    Ruleta.prototype.iniciar = function () {
        var readlineSync = require('readline-sync');
        this.saldo = readlineSync.questionFloat('Ingrese su saldo inicial: ');
        console.log("\nBienvenido al juego de la Ruleta. Su saldo actual es de ".concat(this.saldo, " fichas.\n"));
        while (this.saldo >= this.valorMinimoApuesta) {
            this.jugar();
            if (this.saldo < this.valorMinimoApuesta) {
                console.log("\nLo siento, no tienes suficientes fichas para jugar.");
                console.log("Tu saldo actual es de ".concat(this.saldo, " fichas y el monto minimo de apuesta es de ").concat(this.valorMinimoApuesta, " fichas.\n"));
                return;
            }
            var seguirJugando = readlineSync.question('Desea seguir jugando? (S/N) ');
            if (seguirJugando.toLowerCase() === 'n') {
                console.log("\nGracias por jugar. Tu saldo final es de ".concat(this.saldo, " fichas.\n"));
                return;
            }
        }
    };
    Ruleta.prototype.jugar = function () {
        var readlineSync = require('readline-sync');
        var apuesta = 0;
        var numeroGanador = Math.floor(Math.random() * 37);
        var numeroApostado = -1;
        while (numeroApostado < 0 || numeroApostado > 36) {
            numeroApostado = readlineSync.questionInt(" A que numero le gustaria apostar? ");
            if (numeroApostado < 0 || numeroApostado > 36) {
                console.log("\nIngrese un numero del 0 al 36\n");
            }
        }
        while (apuesta < this.valorMinimoApuesta) {
            apuesta = readlineSync.questionInt("\nIngrese la cantidad que desea apostar (monto minimo de apuesta: ".concat(this.valorMinimoApuesta, "): \n"));
            if (apuesta < this.valorMinimoApuesta) {
                console.log("\nLa cantidad ingresada es menor al monto minimo de apuesta (".concat(this.valorMinimoApuesta, ").\n"));
            }
        }
        // Verificar si la apuesta del jugador coincide con el número ganador
        if (numeroApostado === numeroGanador) {
            // El jugador gana la apuesta y recibe 35 veces el valor apostado
            console.log("\n\u00A1Felicidades! Ha ganado ".concat(apuesta * 35, " fichas.\n"));
            this.saldo += apuesta * 35;
            console.log("\nTu saldo actual es de: \n" + this.saldo);
        }
        else {
            // El jugador pierde la apuesta
            console.log("\nLo siento, ha perdido ".concat(apuesta, " fichas. El numero ganador es ").concat(numeroGanador, ".\n"));
            this.saldo -= apuesta;
            console.log("\nTu saldo actual es de: \n" + this.saldo);
        }
    };
    return Ruleta;
}(juego_1.Juego));
exports.Ruleta = Ruleta;
