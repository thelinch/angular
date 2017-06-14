export class ejercicios {
  nombre: string;
  respuesta: Object;
  Area: string;
  constructor(nombre: string, respuesta: Object, Area: string) {
    this.nombre = nombre;
    this.respuesta = respuesta;
    this.Area = Area;
  }

  public get Nombre(): string {
    return this.nombre;
  }
  public get Respuesta(): Object {
    return this.respuesta;
  } public get area(): string {
    return this.Area;
  }
}