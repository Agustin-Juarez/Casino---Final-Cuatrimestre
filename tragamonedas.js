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
exports.Tragamonedas3linea = exports.Tragamonedas1linea = exports.Tragamonedas = void 0;
var juego_1 = require("./juego");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombre, valorMinimoApuesta, probabilidadGanar, numCarretes) {
        var _this = _super.call(this, nombre, valorMinimoApuesta, probabilidadGanar) || this;
        _this.numCarretes = numCarretes;
        return _this;
    }
    return Tragamonedas;
}(juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
var Tragamonedas1linea = /** @class */ (function (_super) {
    __extends(Tragamonedas1linea, _super);
    function Tragamonedas1linea(nombre, valorMinimoApuesta, probabilidadGanar, numCarretes) {
        return _super.call(this, nombre, valorMinimoApuesta, probabilidadGanar, numCarretes) || this;
    }
    Tragamonedas1linea.prototype.iniciar = function () {
        var readlineSync = require('readline-sync');
        this.saldo = readlineSync.questionFloat('Ingrese su saldo inicial: ');
        console.log("\n Bienvenido al juego de Tragamonedas de 1 linea. Su saldo actual es de ".concat(this.saldo, " fichas.\n"));
        while (this.saldo >= this.valorMinimoApuesta) {
            this.jugar();
            if (this.saldo < this.valorMinimoApuesta) {
                console.log("\nLo siento, no tienes suficientes fichas para jugar.");
                console.log("Tu saldo actual es de ".concat(this.saldo, " fichas y el monto minimo de apuesta es de ").concat(this.valorMinimoApuesta, " fichas.\n"));
                return;
            }
            var seguirJugando = readlineSync.question('Desea seguir jugando? (S/N) ');
            if (seguirJugando.toLowerCase() === 'n') {
                console.log("\n Gracias por jugar. Tu saldo final es de ".concat(this.saldo, " fichas.\n"));
                return;
            }
        }
    };
    Tragamonedas1linea.prototype.jugar = function () {
        var readlineSync = require('readline-sync');
        var apuesta = 0;
        while (apuesta < this.valorMinimoApuesta) {
            apuesta = readlineSync.questionFloat("\n Ingrese la cantidad que desea apostar (monto minimo de apuesta: ".concat(this.valorMinimoApuesta, "): \n"));
            if (apuesta < this.valorMinimoApuesta) {
                console.log("\n La cantidad ingresada es menor al monto minimo de apuesta (".concat(this.valorMinimoApuesta, ").\n"));
            }
        }
        var carretes = [];
        // Generar los carretes aleatoriamente
        for (var i = 0; i < this.numCarretes; i++) {
            carretes.push(Math.floor(Math.random() * 9));
        }
        //Verificar carretes
        if (carretes[0] === carretes[1] && carretes[1] === carretes[2]) {
            console.log("\n \u00A1Felicidades! Ha ganado ".concat(apuesta * 35, " fichas. La combinacion ganadora es ").concat(carretes, ".\n"));
            this.saldo += apuesta * 35;
            console.log("\n Tu saldo actual es de: \n" + this.saldo);
        }
        else {
            console.log("\n Lo siento, ha perdido ".concat(apuesta, " fichas. La combinacion ganadora es ").concat(carretes, ".\n"));
            this.saldo -= apuesta;
            console.log("\n Tu saldo actual es de: \n" + this.saldo);
        }
    };
    return Tragamonedas1linea;
}(Tragamonedas));
exports.Tragamonedas1linea = Tragamonedas1linea;
var Tragamonedas3linea = /** @class */ (function (_super) {
    __extends(Tragamonedas3linea, _super);
    function Tragamonedas3linea(nombre, valorMinimoApuesta, probabilidadGanar, numCarretes) {
        return _super.call(this, nombre, valorMinimoApuesta, probabilidadGanar, numCarretes) || this;
    }
    Tragamonedas3linea.prototype.iniciar = function () {
        var readlineSync = require('readline-sync');
        this.saldo = readlineSync.questionFloat('Ingrese su saldo inicial: ');
        console.log("\n Bienvenido al juego de Tragamonedas de 3 lineas. Su saldo actual es de ".concat(this.saldo, " fichas.\n"));
        while (this.saldo >= this.valorMinimoApuesta) {
            this.jugar();
            if (this.saldo < this.valorMinimoApuesta) {
                console.log("\nLo siento, no tienes suficientes fichas para jugar.");
                console.log("Tu saldo actual es de ".concat(this.saldo, " fichas y el monto minimo de apuesta es de ").concat(this.valorMinimoApuesta, " fichas.\n"));
                return;
            }
            var seguirJugando = readlineSync.question('Desea seguir jugando? (S/N) ');
            if (seguirJugando.toLowerCase() === 'n') {
                console.log("\n Gracias por jugar. Tu saldo final es de ".concat(this.saldo, " fichas.\n"));
                return;
            }
        }
    };
    Tragamonedas3linea.prototype.jugar = function () {
        var readlineSync = require('readline-sync');
        var apuesta = 0;
        while (apuesta < this.valorMinimoApuesta) {
            apuesta = readlineSync.questionFloat("\n Ingrese la cantidad que desea apostar (monto minimo de apuesta: ".concat(this.valorMinimoApuesta, "): \n"));
            if (apuesta < this.valorMinimoApuesta) {
                console.log("\n La cantidad ingresada es menor al monto minimo de apuesta (".concat(this.valorMinimoApuesta, ").\n"));
            }
        }
        var carretes1 = [];
        var carretes2 = [];
        var carretes3 = [];
        var letras = "ABC";
        // Generar los carretes aleatoriamente
        for (var i = 0; i < 3; i++) {
            var indice = Math.floor(Math.random() * letras.length);
            var letra = letras.charAt(indice);
            carretes1.push(letra);
        }
        for (var i = 0; i < 3; i++) {
            var indice = Math.floor(Math.random() * letras.length);
            var letra = letras.charAt(indice);
            carretes2.push(letra);
        }
        for (var i = 0; i < 3; i++) {
            var indice = Math.floor(Math.random() * letras.length);
            var letra = letras.charAt(indice);
            carretes3.push(letra);
        }
        //Verificar carretes
        if (carretes2[0] === carretes2[1] && carretes2[1] === carretes2[2]) {
            console.log("\n \u00A1Felicidades! Ha ganado ".concat(apuesta * 35, " fichas. La combinacion ganadora es: \n"));
            console.log(carretes1);
            console.log(carretes2);
            console.log(carretes3);
            this.saldo += apuesta * 35;
            console.log("\n Tu saldo actual es de: \n" + this.saldo);
        }
        else if (carretes1[0] === carretes2[1] && carretes2[1] === carretes3[2]) {
            console.log("\n \u00A1Felicidades! Ha ganado ".concat(apuesta * 20, " fichas. La combinacion ganadora es: \n"));
            console.log(carretes1);
            console.log(carretes2);
            console.log(carretes3);
            this.saldo += apuesta * 20;
            console.log("\n Tu saldo actual es de: \n" + this.saldo);
        }
        else if (carretes1[3] === carretes2[1] && carretes2[0] === carretes3[2]) {
            console.log("\n \u00A1Felicidades! Ha ganado ".concat(apuesta * 20, " fichas. La combinacion ganadora es: \n"));
            console.log(carretes1);
            console.log(carretes2);
            console.log(carretes3);
            this.saldo += apuesta * 20;
            console.log("\n Tu saldo actual es de: \n" + this.saldo);
        }
        else {
            console.log("\n Lo siento, ha perdido ".concat(apuesta, " fichas. La combinacion ganadora es: \n"));
            console.log(carretes1);
            console.log(carretes2);
            console.log(carretes3);
            this.saldo -= apuesta;
            console.log("\n Tu saldo actual es de: \n" + this.saldo);
        }
    };
    return Tragamonedas3linea;
}(Tragamonedas));
exports.Tragamonedas3linea = Tragamonedas3linea;
