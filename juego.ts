export abstract class Juego {
  public nombre: string;
  public valorMinimoApuesta: number;
  public probabilidadGanar: number;
    
  
  constructor(nombre: string, valorMinimoApuesta: number, probabilidadGanar: number) {
  this.nombre = nombre;
  this.valorMinimoApuesta = valorMinimoApuesta;
  this.probabilidadGanar = probabilidadGanar;
  }
}