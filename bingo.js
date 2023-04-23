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
exports.Bingo = void 0;
var juego_1 = require("./juego");
var Bingo = /** @class */ (function (_super) {
    __extends(Bingo, _super);
    function Bingo(nombre, valorMinimoApuesta, probabilidadGanar) {
        return _super.call(this, nombre, valorMinimoApuesta, probabilidadGanar) || this;
    }
    Bingo.prototype.iniciar = function () {
        var readlineSync = require('readline-sync');
        this.saldo = readlineSync.questionFloat('Ingrese su saldo inicial: ');
        console.log("\nBienvenido al juego de Bingo. Su saldo actual es de ".concat(this.saldo, " fichas.\n"));
        while (this.saldo >= this.valorMinimoApuesta) {
            this.jugar();
            if (this.saldo < this.valorMinimoApuesta) {
                console.log("\nLo siento, no tienes suficientes fichas para seguir jugando. \n        Tu saldo actual es de ".concat(this.saldo, " fichas y el monto minimo de apuesta es de ").concat(this.valorMinimoApuesta, " fichas.\n"));
                return;
            }
            var seguirJugando = readlineSync.question('Desea seguir jugando? (S/N) ');
            if (seguirJugando.toLowerCase() === 'n') {
                console.log("\nGracias por jugar. Tu saldo final es de ".concat(this.saldo, " fichas.\n"));
                return;
            }
        }
    };
    Bingo.prototype.jugar = function () {
        var readlineSync = require('readline-sync');
        var apuesta = 0;
        var aciertos = 0;
        var carton = [];
        var bolillero = [];
        var numerosAciertos = [];
        if (this.saldo < this.valorMinimoApuesta) {
            console.log("\nLo siento, no tienes suficientes fichas para jugar.");
            console.log("Tu saldo actual es de ".concat(this.saldo, " fichas y el monto minimo de apuesta es de ").concat(this.valorMinimoApuesta, " fichas.\n"));
            return;
        }
        while (apuesta < this.valorMinimoApuesta) {
            apuesta = readlineSync.questionFloat("\n Ingrese la cantidad que desea apostar (monto minimo de apuesta: ".concat(this.valorMinimoApuesta, "): \n"));
            if (apuesta < this.valorMinimoApuesta) {
                console.log("\nLa cantidad ingresada es menor al monto minimo de apuesta (".concat(this.valorMinimoApuesta, ").\n"));
            }
        }
        // Generar los numeros del carton aleatoriamente
        for (var i = 0; i < 15; i++) {
            var num = void 0;
            do {
                num = Math.floor(Math.random() * 90 + 10);
            } while (carton.includes(num)); // Verificar que el número no esté repetido en el cartón
            carton.push(num);
        }
        // Se compara cada bolilla con el carton
        while (bolillero.length < 30 && aciertos < 7) {
            var bolilla = Math.floor(Math.random() * 90 + 10);
            if (carton.includes(bolilla)) {
                aciertos++;
                numerosAciertos.push(bolilla);
            }
            else {
                bolillero.push(bolilla);
            }
        }
        if (aciertos === 7) {
            console.log("\n\u00A1Felicidades! Ha ganado ".concat(apuesta * 15, " fichas con ").concat(aciertos, " aciertos. Los numeros ganadores fueron ").concat(numerosAciertos, "\n"));
            this.saldo += apuesta * 15;
        }
        else {
            console.log("Lo siento, ha perdido ".concat(apuesta, " fichas con ").concat(aciertos, " aciertos."));
            console.log("Los numeros que arrojo el bolillero fueron: ".concat(bolillero, "."));
            console.log("Usted ha acertado ".concat(aciertos, " numeros: ").concat(numerosAciertos, "\n"));
            this.saldo -= apuesta;
        }
        console.log("\nTu saldo actual es de:\n " + this.saldo);
        this.saldo = this.saldo;
    };
    return Bingo;
}(juego_1.Juego));
exports.Bingo = Bingo;
