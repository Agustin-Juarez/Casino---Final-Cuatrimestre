import { Juego } from "./juego";
export class Tragamonedas extends Juego {
  public numCarretes: number;
    
  constructor(nombre: string, valorMinimoApuesta: number, probabilidadGanar: number, numCarretes: number,) {
    super(nombre, valorMinimoApuesta, probabilidadGanar);
    this.numCarretes = numCarretes;
  }
}
  
export class Tragamonedas1linea extends Tragamonedas {
    private saldo: number;
    constructor(nombre: string, valorMinimoApuesta: number, probabilidadGanar: number, numCarretes: number,) {
    super(nombre, valorMinimoApuesta, probabilidadGanar,numCarretes);
  }
  iniciar(): any {
    const readlineSync = require('readline-sync');
    this.saldo = readlineSync.questionFloat('Ingrese su saldo inicial: ');
    console.log(`\n Bienvenido al juego de Tragamonedas de 1 linea. Su saldo actual es de ${this.saldo} fichas.\n`);

    while (this.saldo >= this.valorMinimoApuesta) {
      this.jugar();
      if (this.saldo < this.valorMinimoApuesta) {
        console.log(`\nLo siento, no tienes suficientes fichas para jugar.`) 
        console.log(`Tu saldo actual es de ${this.saldo} fichas y el monto minimo de apuesta es de ${this.valorMinimoApuesta} fichas.\n`);
        return;
    }
      const seguirJugando = readlineSync.question('Desea seguir jugando? (S/N) ');
      if (seguirJugando.toLowerCase() === 'n') {
        console.log(`\n Gracias por jugar. Tu saldo final es de ${this.saldo} fichas.\n`);
        return;
      }
    }
  }
  
  jugar(): any {
      const readlineSync = require('readline-sync');
      let apuesta: number = 0;

      while (apuesta < this.valorMinimoApuesta) {
        apuesta = readlineSync.questionFloat(`\n Ingrese la cantidad que desea apostar (monto minimo de apuesta: ${this.valorMinimoApuesta}): \n`);
        if (apuesta < this.valorMinimoApuesta) {
          console.log(`\n La cantidad ingresada es menor al monto minimo de apuesta (${this.valorMinimoApuesta}).\n`);
        }
      }
  const carretes: number[] = [];
  
  // Generar los carretes aleatoriamente
  for (let i = 0; i < this.numCarretes; i++) {
    carretes.push(Math.floor(Math.random() * 9));
  }
 
  //Verificar carretes
  if(carretes[0] === carretes[1] &&  carretes[1] === carretes[2]) {
    console.log(`\n ¡Felicidades! Ha ganado ${apuesta * 35} fichas. La combinacion ganadora es ${carretes}.\n`);
    this.saldo += apuesta * 35;
    console.log("\n Tu saldo actual es de: \n" + this.saldo);
  } else {
  console.log(`\n Lo siento, ha perdido ${apuesta} fichas. La combinacion ganadora es ${carretes}.\n`);
  this.saldo -= apuesta
  console.log("\n Tu saldo actual es de: \n" + this.saldo);
   }
  }
}

export class Tragamonedas3linea extends Tragamonedas {
  private saldo: number;
  constructor(nombre: string, valorMinimoApuesta: number, probabilidadGanar: number, numCarretes: number,) {
  super(nombre, valorMinimoApuesta, probabilidadGanar,numCarretes);
}
iniciar(): any {
  const readlineSync = require('readline-sync');
  this.saldo = readlineSync.questionFloat('Ingrese su saldo inicial: ');
  console.log(`\n Bienvenido al juego de Tragamonedas de 3 lineas. Su saldo actual es de ${this.saldo} fichas.\n`);

  while (this.saldo >= this.valorMinimoApuesta) {
    this.jugar();
    if (this.saldo < this.valorMinimoApuesta) {
      console.log(`\nLo siento, no tienes suficientes fichas para jugar.`) 
      console.log(`Tu saldo actual es de ${this.saldo} fichas y el monto minimo de apuesta es de ${this.valorMinimoApuesta} fichas.\n`);
      return;
  }
    const seguirJugando = readlineSync.question('Desea seguir jugando? (S/N) ');
    if (seguirJugando.toLowerCase() === 'n') {
      console.log(`\n Gracias por jugar. Tu saldo final es de ${this.saldo} fichas.\n`);
      return;
    }
  }
}

jugar(): any {
    const readlineSync = require('readline-sync');
    let apuesta: number = 0;

      while (apuesta < this.valorMinimoApuesta) {
        apuesta = readlineSync.questionFloat(`\n Ingrese la cantidad que desea apostar (monto minimo de apuesta: ${this.valorMinimoApuesta}): \n`);
        if (apuesta < this.valorMinimoApuesta) {
          console.log(`\n La cantidad ingresada es menor al monto minimo de apuesta (${this.valorMinimoApuesta}).\n`);
        }
      }

const carretes1: number[] = [];
const carretes2: number[] = [];
const carretes3: number[] = [];
const letras: any = `ABC`

// Generar los carretes aleatoriamente
for (let i = 0; i < 3; i++) {
  const indice = Math.floor(Math.random() * letras.length);
  const letra = letras.charAt(indice);
  carretes1.push(letra);
}

for (let i = 0; i < 3; i++) {
  const indice = Math.floor(Math.random() * letras.length);
  const letra = letras.charAt(indice);
  carretes2.push(letra);
}

for (let i = 0; i < 3; i++) {
  const indice = Math.floor(Math.random() * letras.length);
  const letra = letras.charAt(indice);
  carretes3.push(letra);
}

//Verificar carretes
if(carretes2[0] === carretes2[1] &&  carretes2[1] === carretes2[2]) {
console.log(`\n ¡Felicidades! Ha ganado ${apuesta * 35} fichas. La combinacion ganadora es: \n`);
console.log(carretes1);
console.log(carretes2);
console.log(carretes3);
this.saldo  += apuesta * 35;
console.log("\n Tu saldo actual es de: \n" + this.saldo);
} else if (carretes1[0] === carretes2[1] && carretes2[1] === carretes3[2]){
 console.log(`\n ¡Felicidades! Ha ganado ${apuesta * 20} fichas. La combinacion ganadora es: \n`);
console.log(carretes1);
console.log(carretes2);
console.log(carretes3);
this.saldo  += apuesta * 20;
console.log("\n Tu saldo actual es de: \n" + this.saldo);
} else if (carretes1[3] === carretes2[1] && carretes2[0] === carretes3[2]){
console.log(`\n ¡Felicidades! Ha ganado ${apuesta * 20} fichas. La combinacion ganadora es: \n`);
console.log(carretes1);
console.log(carretes2);
console.log(carretes3);
this.saldo  += apuesta * 20;
console.log("\n Tu saldo actual es de: \n" + this.saldo);
} else {
console.log(`\n Lo siento, ha perdido ${apuesta} fichas. La combinacion ganadora es: \n`);
console.log(carretes1);
console.log(carretes2);
console.log(carretes3);
this.saldo -= apuesta
console.log("\n Tu saldo actual es de: \n" + this.saldo);
}
}
}