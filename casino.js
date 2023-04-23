"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var ruleta_1 = require("./ruleta");
var bingo_1 = require("./bingo");
var tragamonedas_1 = require("./tragamonedas");
var tragamonedas_2 = require("./tragamonedas");
var jugador_1 = require("./jugador");
var Casino = /** @class */ (function () {
    function Casino(nombre, localidad, edadMinima, juegos) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.edadMinima = edadMinima;
        this.juegos = juegos;
    }
    return Casino;
}());
exports.Casino = Casino;
var tragamonedasNumeros = new tragamonedas_1.Tragamonedas1linea("Tragamonedas Numerico", 100, 0.5, 3);
var tragamonedasLetras = new tragamonedas_2.Tragamonedas3linea("Tragamonedas Alfabetico", 200, 0.7, 3);
var ruleta = new ruleta_1.Ruleta("Ruleta", 500, 0.2);
var bingo = new bingo_1.Bingo("Bingo", 250, 1.7);
var casino = new Casino("Casino Sr Burns", "Springfield", 18, [tragamonedasLetras, tragamonedasNumeros, ruleta, bingo]);
var jugador1 = new jugador_1.Jugador("Jorge", 28, 0);
var juegos = [tragamonedasLetras, tragamonedasNumeros, ruleta, bingo];
var readlineSync = require('readline-sync');
// Bienvenida al casino
console.log('\x1b[31m%s\x1b[45m', "\n===================================");
console.log('\x1b[31m%s\x1b[45m', "|  ¡Bienvenido al casino!  |");
console.log('\x1b[31m%s\x1b[45m', "===================================\n");
var nombre = readlineSync.question("\nIngrese su nombre:\n");
console.clear();
var edad = readlineSync.questionInt("\nIngrese su edad:\n");
console.clear();
if (edad > 18) {
    console.log("\n Bienvenido/a ".concat(nombre, "   \n"));
    console.log("¡Juega y diviértete en nuestros juegos de azar!  \n");
}
else {
    console.log("\nLo lamentamos usted no puede jugar en el casino  \n");
    process.exit(1);
}
var juegoSeleccionado = -1;
while (juegoSeleccionado < 0 || juegoSeleccionado > juegos.length) {
    console.log("Por favor, seleccione un juego:\n");
    for (var i = 0; i < juegos.length; i++) {
        console.log("  ".concat(i + 1, ". ").concat(juegos[i].nombre));
    }
    console.log("  0. Salir");
    juegoSeleccionado = readlineSync.questionInt("\nIngrese el numero correspondiente al juego que desea jugar:\n");
    if (juegoSeleccionado < 0 || juegoSeleccionado > juegos.length) {
        console.log("Opción invalida. Por favor, seleccione un número de juego valido.\n");
        console.clear();
    }
    else if (juegoSeleccionado === 0) {
        console.log("Gracias por visitarnos, vuelva pronto!!");
        process.exit(1);
    }
    else {
        var seguirJugando = true;
        var juego = juegos[juegoSeleccionado - 1];
        console.log("Ha seleccionado el juego ".concat(juego.nombre, ".\n"));
        console.clear();
        // Se ejecuta el juego
        while (seguirJugando) {
            var resultado = juego.iniciar();
            console.log("1. Volver a jugar");
            console.log("2. Seleccionar otro juego");
            console.log("0. Salir del casino");
            var opcionMenu = readlineSync.questionInt("\n Que desea hacer ahora?: \n");
            console.clear();
            if (opcionMenu === 1) {
                console.log("Ha seleccionado el juego ".concat(juego.nombre, ".\n"));
                // Se ejecuta el juego
                seguirJugando = true;
            }
            else if (opcionMenu === 2) {
                seguirJugando = false;
                juegoSeleccionado = -1;
                console.log("Por favor, seleccione un juego:\n");
                for (var i = 0; i < juegos.length; i++) {
                    console.log("  ".concat(i + 1, ". ").concat(juegos[i].nombre));
                }
                console.log("  0. Salir");
                console.clear();
            }
            else {
                seguirJugando = false;
                console.log("Gracias por visitarnos, vuelva pronto!!");
                process.exit(1);
            }
        }
    }
}
