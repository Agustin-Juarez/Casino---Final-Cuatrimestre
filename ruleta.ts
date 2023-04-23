import { Juego } from "./juego";

export class Ruleta extends Juego {
  private saldo: number;
  constructor(nombre: string, valorMinimoApuesta: number, probabilidadGanar: number) {
    super(nombre, valorMinimoApuesta, probabilidadGanar);
    this.saldo = 0; // El saldo se inicializa en 0 al crear el objeto
  }
  
  iniciar(): any {
    const readlineSync = require('readline-sync');
    this.saldo = readlineSync.questionFloat('Ingrese su saldo inicial: ');
    console.log(`\nBienvenido al juego de la Ruleta. Su saldo actual es de ${this.saldo} fichas.\n`);

    while (this.saldo >= this.valorMinimoApuesta) {
      this.jugar();
      if (this.saldo < this.valorMinimoApuesta) {
        console.log(`\nLo siento, no tienes suficientes fichas para jugar.`) 
        console.log(`Tu saldo actual es de ${this.saldo} fichas y el monto minimo de apuesta es de ${this.valorMinimoApuesta} fichas.\n`);
        return;
    }
      const seguirJugando = readlineSync.question('Desea seguir jugando? (S/N) ');
      if (seguirJugando.toLowerCase() === 'n') {
        console.log(`\nGracias por jugar. Tu saldo final es de ${this.saldo} fichas.\n`);
        return;
      }
    }
  }

  jugar(): any {
    const readlineSync = require('readline-sync');
    let apuesta: number = 0;
    const numeroGanador = Math.floor(Math.random() * 37);
    let numeroApostado: number = -1; 

    while (numeroApostado < 0 || numeroApostado > 36) {
      numeroApostado = readlineSync.questionInt(` A que numero le gustaria apostar? `);
      if (numeroApostado < 0 || numeroApostado > 36) {
        console.log(`\nIngrese un numero del 0 al 36\n`);
      }
    }

    while (apuesta < this.valorMinimoApuesta) {
      apuesta = readlineSync.questionInt(`\nIngrese la cantidad que desea apostar (monto minimo de apuesta: ${this.valorMinimoApuesta}): \n`);
      if (apuesta < this.valorMinimoApuesta) {
        console.log(`\nLa cantidad ingresada es menor al monto minimo de apuesta (${this.valorMinimoApuesta}).\n`);
      }
    }


    // Verificar si la apuesta del jugador coincide con el número ganador
    if (numeroApostado === numeroGanador) {
      // El jugador gana la apuesta y recibe 35 veces el valor apostado
      console.log(`\n¡Felicidades! Ha ganado ${apuesta * 35} fichas.\n`);
      this.saldo += apuesta * 35;
      console.log("\nTu saldo actual es de: \n" + this.saldo);
    } else {
      // El jugador pierde la apuesta
      console.log(`\nLo siento, ha perdido ${apuesta} fichas. El numero ganador es ${numeroGanador}.\n`);
      this.saldo -= apuesta
      console.log("\nTu saldo actual es de: \n" + this.saldo);
    }
  }
}
