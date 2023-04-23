import { Ruleta } from "./ruleta";
import { Bingo } from "./bingo";
import { Tragamonedas1linea } from "./tragamonedas";
import { Tragamonedas3linea } from "./tragamonedas";
import { Juego } from "./juego";
import { Jugador } from "./jugador";

export class Casino {
private nombre: string;
private localidad: string;
private edadMinima: number;
private juegos: Juego[];

constructor(nombre:string, localidad:string, edadMinima:number, juegos: Juego[]){
  this.nombre = nombre;
  this.localidad = localidad;
  this.edadMinima = edadMinima;
  this.juegos = juegos;
}
}

const tragamonedasNumeros: Tragamonedas1linea = new Tragamonedas1linea("Tragamonedas Numerico", 100, 0.5, 3);
const tragamonedasLetras:Tragamonedas3linea =  new Tragamonedas3linea("Tragamonedas Alfabetico", 200, 0.7, 3);
const ruleta:Ruleta =  new Ruleta("Ruleta", 500, 0.2);
const bingo: Bingo =  new Bingo("Bingo", 250, 1.7);
const casino: Casino = new Casino("Casino Sr Burns","Springfield",18,[tragamonedasLetras,tragamonedasNumeros,ruleta,bingo]);
const jugador1: Jugador = new Jugador("Jorge",28,0);
const juegos = [tragamonedasLetras, tragamonedasNumeros, ruleta, bingo];
const readlineSync = require('readline-sync');
 
// Bienvenida al casino
console.log("\n===================================");
console.log("|  ¡Bienvenido al casino!  |");
console.log("===================================\n");


const nombre = readlineSync.question("\nIngrese su nombre:\n");
console.clear();

const edad = readlineSync.questionInt("\nIngrese su edad:\n");
console.clear();

if(edad > 18){
  console.log(`\n Bienvenido/a ${nombre}   \n`);
  console.log("¡Juega y diviértete en nuestros juegos de azar!  \n");
} else {
  console.log("\nLo lamentamos usted no puede jugar en el casino  \n");
  process.exit(1);
}

let juegoSeleccionado = -1;

while (juegoSeleccionado < 0 || juegoSeleccionado > juegos.length) {
  console.log("Por favor, seleccione un juego:\n");
  for (let i = 0; i < juegos.length; i++) {
    console.log(`  ${i + 1}. ${juegos[i].nombre}`);
  }
  console.log(`  0. Salir`);

  juegoSeleccionado = readlineSync.questionInt("\nIngrese el numero correspondiente al juego que desea jugar:\n");

  if (juegoSeleccionado < 0 || juegoSeleccionado > juegos.length) {
    console.log("Opción invalida. Por favor, seleccione un número de juego valido.\n");
    console.clear();
  } else if (juegoSeleccionado === 0) {
    console.log("Gracias por visitarnos, vuelva pronto!!");
    process.exit(1);
  } else {
    let seguirJugando = true;
    const juego = juegos[juegoSeleccionado - 1];
    console.log(`Ha seleccionado el juego ${juego.nombre}.\n`);
    console.clear()
    // Se ejecuta el juego
    while (seguirJugando) {
      const resultado = juego.iniciar();
      console.log("1. Volver a jugar");
      console.log("2. Seleccionar otro juego");
      console.log("0. Salir del casino");

      const opcionMenu = readlineSync.questionInt("\n Que desea hacer ahora?: \n");
      console.clear();

      if (opcionMenu === 1) {
        console.log(`Ha seleccionado el juego ${juego.nombre}.\n`);
        // Se ejecuta el juego
        seguirJugando = true;
      } else if (opcionMenu === 2) {
        seguirJugando = false;
        juegoSeleccionado = -1;
        console.log("Por favor, seleccione un juego:\n");
        for (let i = 0; i < juegos.length; i++) {
          console.log(`  ${i + 1}. ${juegos[i].nombre}`);
        }
        console.log(`  0. Salir`);
        console.clear()
      } 
      else {
        seguirJugando = false;
        console.log("Gracias por visitarnos, vuelva pronto!!");
        process.exit(1);
      }
    }
 }
}