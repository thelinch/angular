export class Cursos{
nombre:string;
duracion:number;
Area:string;
constructor(nombre:string,duracion:number,Area:string){
this.nombre=nombre;
this.duracion=duracion;
this.Area=Area;
}

public get nombreUser() : string {
  return this.nombre;
}

public get Duracion() : number {
  return this.Duracion;
}

public get Are() : string {
  return this.Area;
}




}