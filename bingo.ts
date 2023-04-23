import { Juego } from "./juego";

export class Bingo extends Juego {
  private saldo: number;
  constructor(nombre: string, valorMinimoApuesta: number, probabilidadGanar: number) {
    super(nombre, valorMinimoApuesta, probabilidadGanar);
  }

  iniciar(): any {
    const readlineSync = require('readline-sync');
    this.saldo = readlineSync.questionFloat('Ingrese su saldo inicial: ');
    console.log(`\nBienvenido al juego de Bingo. Su saldo actual es de ${this.saldo} fichas.\n`);

    while (this.saldo >= this.valorMinimoApuesta) {
      this.jugar();
      if (this.saldo < this.valorMinimoApuesta) {
        console.log(`\nLo siento, no tienes suficientes fichas para seguir jugando. 
        Tu saldo actual es de ${this.saldo} fichas y el monto minimo de apuesta es de ${this.valorMinimoApuesta} fichas.\n`);
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
    let aciertos: number = 0;
    const carton: number[] = [];
    const bolillero: number[] = [];
    const numerosAciertos: number[] = [];
    

    if (this.saldo < this.valorMinimoApuesta) {
        console.log(`\nLo siento, no tienes suficientes fichas para jugar.`) 
        console.log(`Tu saldo actual es de ${this.saldo} fichas y el monto minimo de apuesta es de ${this.valorMinimoApuesta} fichas.\n`);
        return;
    }

    while (apuesta < this.valorMinimoApuesta) {
        apuesta = readlineSync.questionFloat(`\n Ingrese la cantidad que desea apostar (monto minimo de apuesta: ${this.valorMinimoApuesta}): \n`);
        if (apuesta < this.valorMinimoApuesta) {
            console.log(`\nLa cantidad ingresada es menor al monto minimo de apuesta (${this.valorMinimoApuesta}).\n`);
        }
    }

    // Generar los numeros del carton aleatoriamente
    for (let i = 0; i < 15; i++) {
        let num: number;
        do {
            num = Math.floor(Math.random() * 90 + 10);
        } while (carton.includes(num)); // Verificar que el número no esté repetido en el cartón
        carton.push(num);
    }

    // Se compara cada bolilla con el carton
    while (bolillero.length < 30 && aciertos < 7) {
        const bolilla = Math.floor(Math.random() * 90 + 10);
        if (carton.includes(bolilla)) {
            aciertos++;
            numerosAciertos.push(bolilla);
        } else {
            bolillero.push(bolilla);
        }
    }

    if (aciertos === 7) {
        console.log(`\n¡Felicidades! Ha ganado ${apuesta * 15} fichas con ${aciertos} aciertos. Los numeros ganadores fueron ${numerosAciertos}\n`);
        this.saldo += apuesta * 15;
    } else {
        console.log(`Lo siento, ha perdido ${apuesta} fichas con ${aciertos} aciertos.`); 
        console.log(`Los numeros que arrojo el bolillero fueron: ${bolillero}.`); 
        console.log(`Usted ha acertado ${aciertos} numeros: ${numerosAciertos}\n`);
        this.saldo -= apuesta;
    }
    console.log("\nTu saldo actual es de:\n " + this.saldo);
    this.saldo = this.saldo;
}
}