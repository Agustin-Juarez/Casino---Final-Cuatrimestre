export class Jugador {
    public nombre: string;
    public edad: number;
    public saldo: number;
  
    constructor(nombre: string, edad: number, saldo: number) {
      this.nombre = nombre;
      this.edad = edad;
      this.saldo = saldo;
    }
  
    public actualizarSaldo(cantidad: number) {
      this.saldo += cantidad;
    }
  
    public restarSaldo(cantidad: number) {
      this.saldo -= cantidad;
    }
  
    public imprimirSaldo() {
      console.log(`Su saldo actual es: ${this.saldo}`);
    }
  }
  